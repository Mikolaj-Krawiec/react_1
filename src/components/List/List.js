import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        heroImg: PropTypes.string.isRequired,
        children: PropTypes.node,
      }

    static defaultProps = {
        children: <p>I can do all the things!!!</p>
    }

    render() {
        return (
            <section className={styles.component}>
                <Hero title={this.props.title} heroImg={this.props.heroImg}/>
                <div className={styles.description}>
                    {this.props.children}
                </div>
                <div className={styles.columns}>
                    <Column title='title_1'/>
                    <Column title='title_2'/>
                    <Column title='title_3'/>
                </div>
            </section>
        )
    }
}

export default List;