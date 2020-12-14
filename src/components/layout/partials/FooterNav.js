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
          <Link to="">Terms & Conditions</Link>
        </li>
        <li>
          <a href={whitepaper} target="_blank">Whitepaper</a>
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
