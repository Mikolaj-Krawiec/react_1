import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {settings} from '../../data/dataStore';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import Search from '../Search/SearchContainer';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to="/" className={styles.logo}>
              <Icon name={settings.logo.icon} />
            </Link>
            <nav>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
              <NavLink exact to="/info" activeClassName="active">
                Info
              </NavLink>
              <NavLink exact to="/faq" activeClassName="active">
                Faq
              </NavLink>
            </nav>
          </div>
          <Search/>
        </Container>
      </header>
    );
  }
}

export default Header;
