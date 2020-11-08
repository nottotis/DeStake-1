import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

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
          <Link to="/contact/">Terms & Conditions</Link>
        </li>
        <li>
          <Link to="/about-us/">Whitepaper</Link>
        </li>
        <li>
          <Link to="/faqs/">Github</Link>
        </li>
        <li>
          <Link to="/support/">Chat</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
