import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Document } from 'react-pdf'
import whitepaper from '../../../assets/docs/DeStake_Whitepaper.pdf'


const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">

        <li>
          <a href="https://mirror.xyz/0xdAA3a454dB4aa15FA4769B5758581A69203A810b" target="_blank">Blog</a>
        </li>
        <li>
          <a href="https://github.com/Tokenweb" target="_blank">Github</a>
        </li>
        <li>
          <a href="https://t.me/DeStakeHQ" target="_blank">Chat</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
