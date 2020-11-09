import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class Networks extends React.Component {

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
      'clients section reveal-fade',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const sectionHeader = {
      title: 'Supported Networks',

    };

    const innerClasses = classNames(
      'clients-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">

          <div
            className={innerClasses}
          >
            <SectionHeader data={sectionHeader} className="center-content rm" />
            <ul className="list-reset rm">
              <li>
                <Image
                  src={require('./../../assets/images/cosmos-white.png')}
                  alt="Client 01"
                  width={124}
                  height={24} />
              </li>
              <li>
                <Image
                  src={require('./../../assets/images/polkadot-white.png')}
                  alt="Client 02"
                  width={124}
                  height={24} />
              </li>
              <li>
                <Image
                  src={require('./../../assets/images/eth-grey.png')}
                  alt="Client 03"
                  width={124}
                  height={24} />
              </li>


            </ul>
          </div>
        </div>
      </section>
    );
  }
}

Networks.propTypes = propTypes;
Networks.defaultProps = defaultProps;

export default Networks;
