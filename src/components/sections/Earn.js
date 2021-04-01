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
      title: 'Provide Liquidity, Earn DGOV',
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

                  <p className="m-0">
               DeStake is a Liquid Staking DAO powered by DGOV, the native governance token, which acts as a built-in incentive system designed to drive user participation across staking networks and provide liquidity for the synthetic trading pairs. Simply deposit your synthetic assets as liquidity in the associated uniswap pool and begin receiving DGOV tokens automatically.

                </p>
                <br />



                </div>


                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images/DGOV.jpg')}
                    alt="Features split 03"
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
