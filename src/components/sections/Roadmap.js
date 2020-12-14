import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Timeline from '../elements/Timeline';
import TimelineItem from '../elements/TimelineItem';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class Roadmap extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'roadmap section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'roadmap-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const sectionHeader = {
      title: 'Roadmap',
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
            <Timeline>
              <TimelineItem title="Phase 0 - DeStake Launch">
              DeStake will be released supporting Launch Partner Projects.
              </TimelineItem>
              <TimelineItem title="Phase 1 - Governance Token Incentives Begin">
                Earn Governance Tokens by providing liquidity on select UniSwap Synthetic Pools.
              </TimelineItem>
              <TimelineItem title="Phase 2 - Lending Platform Released">
                Lend synthetics and receive interest or use them as collateral to borrow against.
              </TimelineItem>
              <TimelineItem title="Phase 3 - Community Governance Activated">
              Ability to use Governance Tokens to vote on networks, rewards, fee structures, and manage the community fund.
              </TimelineItem>

              <TimelineItem title="Phase 4 - Network Expansion">
                This is an ongoing phase of community driven decisions to add new networks and reward incentives.
              </TimelineItem>

            </Timeline>
          </div>
        </div>
      </section>
    );
  }
}

Roadmap.propTypes = propTypes;
Roadmap.defaultProps = defaultProps;

export default Roadmap;
