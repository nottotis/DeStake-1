import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

import HowItWorks from './HowItWorks';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class How extends React.Component {

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
      title: 'Built for your workflow',
      paragraph: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint — occaecat cupidatat non proident, sunt in culpa qui.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>

            <div className={splitClasses}>









            
              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <h3 className="mt-0 mb-12">
                    Synthetic Assets
                  </h3>
                  <p className="m-0">
            Synthetic Assets unlock 100% of the value currently locked in staking networks thus solving the liquidity crisis, where billions of dollars in staked assets are inefficiently allocated.

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
                    src={require('./../../assets/images/ETH.jpg')}
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

How.propTypes = propTypes;
How.defaultProps = defaultProps;

export default How;
