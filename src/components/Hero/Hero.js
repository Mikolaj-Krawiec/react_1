import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.scss';

const Hero = props => (
    <header className={styles.component}>
        <h2 className={styles.title}>{props.title}</h2>
        <img className={styles.image} src={props.heroImg}/>
    </header>
)

Hero.propTypes = {
    title: PropTypes.node.isRequired,
    heroImg: PropTypes.string.isRequired,
}

export default Hero;
