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
          <Link to="">Github</Link>
        </li>
        <li>
          <Link to={whitepaper}>Whitepaper</Link>
        </li>
        <li>
          <Link to="">Github</Link>
        </li>
        <li>
          <Link to="">Chat</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
