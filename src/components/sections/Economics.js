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
                <li>Uniswap ETH/DGOV Liquidity : 10% (1,000 DGOV/Day)</li>
                <li>Uniswap ETH/sETH2 Liquidity : 10% (1,000 DGOV/Day)</li>
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
                  What is the Value of DGOV?

                  </h3>
                  <p className="m-0">
                DGOV is designed as a valueless governance token. If it does miraculously have any value then it will act as a form of rebate for those who delegate their tokens. For example. If a user pays a validator fee of 10% and is receiving an APY of 12% from DGOV tokens, then their effective validator fee is -2%. Pretty cool, eh?
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
