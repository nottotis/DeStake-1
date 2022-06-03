import { request, gql } from 'graphql-request';
import KECCAK256 from "keccak256"
import { MerkleTree } from 'merkletreejs'

import { ethers,BigNumber } from "ethers";

//should ordered by block number
export const example_data = {
    "data": {
      "stakingBalances": [
        {
          "id": "0x9b0b5b9e628a76a183cf7c3e2dc82f61afbe3a39",
          "poolTotalTokens": [
            {
              "block": "10",
              "balance": "1000"
            },
            {
              "block": "15",
              "balance": "1500"
            },
            {
              "block": "20",
              "balance": "2500"
            },
            {
              "block": "25",
              "balance": "3000"
            }
          ]
        }
      ],
      "balances": [
        {
            "id": "0x9B0b5b9e628a76a183cf7c3e2dc82f61afbebeef",
            "numOfTransfer": "2",
            "balance": [
                  {
                      "balance": "0",
                      "block": "1"
                  },
                  {
                      "balance": "10000",
                      "block": "10"
                  },
                  {
                      "balance": "0",
                      "block": "15"
                  }
            ]
        },
        {
            "id": "0x9b0b5b9e628a76a183cf7c3e2dc82f61afbe1337",
            "numOfTransfer": "3",
            "balance": [
                {
                    "balance": "10000",
                    "block": "1"
                },
                {
                    "balance": "0",
                    "block": "10"
                },
                {
                    "balance": "10000",
                    "block": "15"
                }
            ]
        },
      ],
      "tokenStatuses": [
          {
              "id": "0",
              "tokenSupply": "10000"
          },
          {
              "id": "10",
              "tokenSupply": "10000"
          },
          {
              "id": "15",
              "tokenSupply": "10000"
          },
          {
              "id": "20",
              "tokenSupply": "10000"
          }
      ]
    }
  };

export async function getStakingBalances(){

}

function blockBalanceToBigNumber(array){
    let newArray = [];
    for(const blockBalance of array){
        const balance = BigNumber.from(blockBalance.balance);
        const block = BigNumber.from(blockBalance.block);
        const newBlockBalance = {
            "balance": balance,
            "block": block
        };
        newArray.push(newBlockBalance); 
    }
    return newArray;
}
function supplyBalanceToBigNumber(array){
    let newArray = [];
    console.log("array",array);
    for(const blockBalance of array){
        const tokenSupply = BigNumber.from(blockBalance.tokenSupply);
        const id = BigNumber.from(blockBalance.id);
        const newBlockBalance = {
            "tokenSupply": tokenSupply,
            "id": id
        };
        newArray.push(newBlockBalance); 
    }
    return newArray;
}

export function getTotalAccumulatedRewards(subgraph_data){
    let {stakingBalances} = subgraph_data;

    let rewards = BigNumber.from(0);
    for(const indexerBalance of stakingBalances){
        const initial = BigNumber.from(indexerBalance.poolTotalTokens[0].balance);
        const latest = BigNumber.from(indexerBalance.poolTotalTokens[indexerBalance.poolTotalTokens.length-1].balance)
        rewards = rewards.add(latest.sub(initial));
    }

    return rewards.toString();
}

export function getMerkleRoot(subgraph_data){
    console.log(subgraph_data);
    let {stakingBalances,balances,tokenStatuses} = subgraph_data;
    // let stakingBalances = 

    const getCurrentTokenSupply = (start,end) =>{
        const durationInBlock = end.sub(start);
        tokenStatuses = supplyBalanceToBigNumber(tokenStatuses);

        let arrayInRange = [];
        if(start.gt(tokenStatuses[tokenStatuses.length-1].id)){
            return tokenStatuses[tokenStatuses.length-1].tokenSupply;
        }
        if((end.lt(tokenStatuses[0].id))||(start.lt(tokenStatuses[0].id)) ){
            console.assert(false,"Range not possible");
        }
        
        for(let tokenStatus of tokenStatuses){
            if(tokenStatus.id.lt(start)){
                arrayInRange[0] = tokenStatus;
            }
        }
        for(let tokenStatus of tokenStatuses){
            if(tokenStatus.id.gte(start) && tokenStatus.id.lt(end)){
                arrayInRange.push(tokenStatus);
            }
        }
        let averageSupply = BigNumber.from(0);

        for(const [rangeIdx,inRangeSupply] of arrayInRange.entries()){
            if(rangeIdx==0){
                if(arrayInRange.length==1){
                    averageSupply = inRangeSupply.tokenSupply;
                    break;
                }else{
                    averageSupply = averageSupply.add((inRangeSupply.tokenSupply.mul(arrayInRange[rangeIdx+1].id.sub(start)).div(durationInBlock)));
                }
            }else if(rangeIdx == arrayInRange.length -1){
                averageSupply = averageSupply.add((inRangeSupply.tokenSupply.mul(end.sub(inRangeSupply.id)).div(durationInBlock)));
            }else{
                averageSupply = averageSupply.add((inRangeSupply.tokenSupply.mul(arrayInRange[rangeIdx+1].id.sub(inRangeSupply.id)).div(durationInBlock)));
            }
            
        }
        return averageSupply;
    }

    let merkleLeaves = [];

    for(var balanceIdx=0;balanceIdx<balances.length;balanceIdx++){
        if(balances[balanceIdx].id == "0x0000000000000000000000000000000000000000"){
            continue;
        }
        let uBB = balances[balanceIdx].balance;
        uBB = blockBalanceToBigNumber(uBB);
        //append last user balance to
        const lastBalance = {
            "balance": uBB[uBB.length-1].balance,
            "block": BigNumber.from(147784650)
        };
        uBB.push(lastBalance)
        let userRewards = BigNumber.from(0);
        for(let stakingBlockBalance of stakingBalances){
            stakingBlockBalance.poolTotalTokens = blockBalanceToBigNumber(stakingBlockBalance.poolTotalTokens);

            for(let blockBalanceIdx = 0;blockBalanceIdx<stakingBlockBalance.poolTotalTokens.length - 1;blockBalanceIdx++){
                const currentSBB = stakingBlockBalance.poolTotalTokens[blockBalanceIdx];
                const nextSBB = stakingBlockBalance.poolTotalTokens[blockBalanceIdx+1];
                for(let userBlockBalanceIdx = 0; userBlockBalanceIdx<uBB.length - 1;userBlockBalanceIdx++){
                    const currentUBB = uBB[userBlockBalanceIdx];
                    const nextUBB = uBB[userBlockBalanceIdx+1];
                    console.assert(currentUBB.balance.gte(0));
                    if(currentUBB.balance == 0) continue;
                    if( currentUBB.block.lt(currentSBB.block)){
                        if(uBB[userBlockBalanceIdx+1].block.lt(currentSBB.block)) continue;
                        if(uBB[userBlockBalanceIdx+1].block.lt(stakingBlockBalance.poolTotalTokens[blockBalanceIdx+1].block)){
                            const accumulatedStakingRewards = (stakingBlockBalance.poolTotalTokens[blockBalanceIdx+1].balance.sub(currentSBB.balance));
                            const userHoldDuration = uBB[userBlockBalanceIdx+1].block.sub(currentSBB.block);
                            const userTokenBalance = currentUBB.balance;
                            const allocationClosedInterval = stakingBlockBalance.poolTotalTokens[blockBalanceIdx+1].block.sub(currentSBB.block);
                            const currentSupply = getCurrentTokenSupply(currentSBB.block,nextSBB.block.sub(1));

                            console.assert(allocationClosedInterval*currentSupply > 0);
                            // console.assert((accumulatedStakingRewards.mul(userHoldDuration).mul(userTokenBalance)).gt(allocationClosedInterval.mul(currentSupply)));
                            const userReward = (accumulatedStakingRewards.mul(userHoldDuration).mul(userTokenBalance)).div(allocationClosedInterval.mul(currentSupply));
                            userRewards = userRewards.add(userReward);
                        }else{
                            const accumulatedStakingRewards = (stakingBlockBalance.poolTotalTokens[blockBalanceIdx+1].balance.sub(currentSBB.balance));
                            const userHoldDuration = stakingBlockBalance.poolTotalTokens[blockBalanceIdx+1].block.sub(currentSBB.block);
                            const userTokenBalance = currentUBB.balance;
                            const allocationClosedInterval = stakingBlockBalance.poolTotalTokens[blockBalanceIdx+1].block.sub(currentSBB.block);
                            const currentSupply = getCurrentTokenSupply(currentSBB.block,nextSBB.block.sub(1));

                            console.assert(allocationClosedInterval*currentSupply > 0);
                            // console.assert((accumulatedStakingRewards*userHoldDuration*userTokenBalance) >= (allocationClosedInterval*currentSupply));
                            const userReward = (accumulatedStakingRewards.mul(userHoldDuration).mul(userTokenBalance)).div(allocationClosedInterval.mul(currentSupply));
                            userRewards = userRewards.add(userReward);
                        }
                    }else{
                        if(currentUBB.block.gt(stakingBlockBalance.poolTotalTokens[blockBalanceIdx+1].block)) continue;
                        if(uBB[userBlockBalanceIdx+1].block.lt(stakingBlockBalance.poolTotalTokens[blockBalanceIdx+1].block)){
                            const accumulatedStakingRewards = (stakingBlockBalance.poolTotalTokens[blockBalanceIdx+1].balance.sub(currentSBB.balance));
                            const userHoldDuration = uBB[userBlockBalanceIdx+1].block.sub(currentUBB.block);
                            const userTokenBalance = currentUBB.balance;
                            const allocationClosedInterval = stakingBlockBalance.poolTotalTokens[blockBalanceIdx+1].block.sub(currentSBB.block);
                            const currentSupply = getCurrentTokenSupply(currentSBB.block,nextSBB.block.sub(1));

                            console.assert(allocationClosedInterval*currentSupply > 0);
                            console.assert((accumulatedStakingRewards*userHoldDuration*userTokenBalance) >= (allocationClosedInterval*currentSupply));
                            const userReward = (accumulatedStakingRewards.mul(userHoldDuration).mul(userTokenBalance)).div(allocationClosedInterval.mul(currentSupply));
                            userRewards = userRewards.add(userReward);
                        }else{
                            const accumulatedStakingRewards = (stakingBlockBalance.poolTotalTokens[blockBalanceIdx+1].balance.sub(currentSBB.balance) );
                            const userHoldDuration = stakingBlockBalance.poolTotalTokens[blockBalanceIdx+1].block.sub(currentUBB.block);
                            const userTokenBalance = currentUBB.balance;
                            const allocationClosedInterval = stakingBlockBalance.poolTotalTokens[blockBalanceIdx+1].block.sub(currentSBB.block);
                            const currentSupply = getCurrentTokenSupply(currentSBB.block,nextSBB.block.sub(1));

                            console.assert(allocationClosedInterval*currentSupply > 0);
                            // console.assert((accumulatedStakingRewards*userHoldDuration*userTokenBalance) >= (allocationClosedInterval*currentSupply));
                            console.assert((accumulatedStakingRewards.mul(userHoldDuration).mul(userTokenBalance)).gte(allocationClosedInterval.mul(currentSupply)));
                            console.assert((accumulatedStakingRewards.mul(userHoldDuration).mul(userTokenBalance)).gt(allocationClosedInterval.mul(currentSupply)) ||
                             (accumulatedStakingRewards.mul(userHoldDuration).mul(userTokenBalance).eq(0)));
                            const userReward = (accumulatedStakingRewards.mul(userHoldDuration).mul(userTokenBalance)).div(allocationClosedInterval.mul(currentSupply));
                            userRewards = userRewards.add(userReward);
                        }
                    }
                }
                
            }
        }
        const packed = KECCAK256(ethers.utils.solidityPack(["address","uint256"],[balances[balanceIdx].id,userRewards.toString()]));
        merkleLeaves.push(packed);
        merkleLeaves.push(packed);
        //stress-test- workss fine with 1000+ address
        // for(let test=0;test<1000;test++) {
        //     merkleLeaves.push(packed);
        // }
    }
    const airdropTree = new MerkleTree(merkleLeaves, KECCAK256,{ sortPairs: true });
    console.log(Buffer.from(merkleLeaves[0]).toString('hex'));
    console.log(airdropTree.getHexProof(merkleLeaves[0]));
    console.log(airdropTree.getHexRoot());
    console.log(airdropTree.verify(airdropTree.getHexProof(merkleLeaves[0]),merkleLeaves[0],airdropTree.getHexRoot()));
    // console.log(airdropTree.toString());
    // console.log(airdropTree.getHexProof(merkleLeaves[0]));

    return airdropTree;

}