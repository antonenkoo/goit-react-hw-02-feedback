import React from 'react';
import styles from './feedback.module.scss';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  newValue = el => {
    this.setState({
      [el]: this.state[el] + 1,
    });
  };

  render() {
    return (
      <div className={styles.mainBox}>
        <h2 className={styles.title}>Please leave feedback</h2>
        <div className={styles.buttonsBlock}>
          <button
            type="button"
            onClick={event => {
              this.newValue('good');
            }}
          >
            Good
          </button>
          <button
            type="button"
            onClick={event => {
              this.newValue('neutral');
            }}
          >
            Neutral
          </button>
          <button
            type="button"
            onClick={event => {
              this.newValue('bad');
            }}
          >
            Bad
          </button>
        </div>
        <div className={styles.statisticsBlock}>
          <h3 className={styles.statistics}>Statistics</h3>
          <ul className={styles.statList}>
            <li className={styles.statItem}>Good: {this.state.good}</li>
            <li className={styles.statItem}>Neutral: {this.state.neutral}</li>
            <li className={styles.statItem}>Bad: {this.state.bad}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Feedback;
