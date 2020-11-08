import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class Economics extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-split section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-split-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    const sectionHeader = {
      title: 'Token Economics',
      paragraph: ''
    };


    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>

            <div className={splitClasses}>


                <SectionHeader data={sectionHeader} className="center-content" />


              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <h3 className="mt-0 mb-12">
                    Distribution
                  </h3>
                  <p className="m-0">
                  The maximum total supply of DGOV is 10,000,000. Initially a combined 5 million DGOV (50%) will be allocated as follows:

                </p>
                <br />
                <ul>
                <li>Cosmos : 10% (1,000 DGOV/Day)</li>
                <li>Polkadot : 10% (1,000 DGOV/Day)</li>
                <li>Ethereum 2.0 : 10% (1,000 DGOV/Day)</li>
                <li>Uniswap ETH/DGOV Liquidity : 20% (2,000 DGOV/Day)</li>
                <li>The remaining 50% is set aside in the community fund for future networks</li>
                </ul>


                </div>


                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images/features-split-image-03.png')}
                    alt="Features split 03"
                    width={528}
                    height={396} />
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                  <h3 className="mt-0 mb-12">
                    Zero Founders' Tokens
                  </h3>
                  <p className="m-0">
                  No amount is reserved for founders and no % goes directly to founders. Instead 1% of all withdrawals of DGOV are sent to the community fund and holders of DGOV decide how to allocate capital from the community fund to maintain the project.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images/features-split-image-02.png')}
                    alt="Features split 02"
                    width={528}
                    height={396} />
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                  <h3 className="mt-0 mb-12">
                    Fair Distribution
                  </h3>
                  <p className="m-0">
                  While TokenWeb is the creator of DeStake, the goal is to decentralise it as much as possible through the governance token. Additionally, there is absolutely no extra incentive for delegating tokens to the TokenWeb Validator. We believe that delegations should be evenly distributed among all validators to promote decentralisation so it is bad for the networks we support to incentivise a specific validator.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images/features-split-image-02.png')}
                    alt="Features split 02"
                    width={528}
                    height={396} />
                </div>
              </div>



            </div>
          </div>
        </div>
      </section>
    );
  }
}

Economics.propTypes = propTypes;
Economics.defaultProps = defaultProps;

export default Economics;
