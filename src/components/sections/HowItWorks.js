import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class Gov extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-tiles section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-tiles-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'How it Works',
      paragraph: ''
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-01.svg')}
                        alt="Features tile icon 01"
                        width={64}
                        height={64} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                      Step 1: Stake Tokens
                    </h4>
                    <p className="m-0 text-sm">
                  After you send tokens to the DeStake contract, they are automatically staked and you receive a synthetic equivalent such as sGRT.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-02.svg')}
                        alt="Features tile icon 02"
                        width={64}
                        height={64} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                      Step 2: Use Synthetics
                    </h4>
                    <p className="m-0 text-sm">
                      Maximise your capital efficiency by lending, borrowing or providing liquidity to generate additional revenue streams from your staked assets.
                    </p>
                  </div>
                </div>
              </div>


              <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-06.svg')}
                        alt="Features tile icon 06"
                        width={64}
                        height={64} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                      Step 3: Claim Rewards
                    </h4>
                    <p className="m-0 text-sm">
                    Send synthetics back to the DeStake contract (burn) and receive your native tokens back along with any accumulated staking rewards.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

Gov.propTypes = propTypes;
Gov.defaultProps = defaultProps;

export default Gov;
