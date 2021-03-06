import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import styles from './OrderOption.scss';

class OrderOptionDate extends React.Component {
  static propTypes = {
    startDate: PropTypes.instanceOf(Date),
    setOptionValue: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange(this.state.startDate);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
    this.props.setOptionValue(date);
  }

  render() {
    return (
      <DatePicker
        className={styles.input}
        selected={this.state.startDate}
        onChange={this.handleChange}
        minDate={this.state.startDate}
        dateFormat="d MMMM, yyyy"
      />
    );
  }
}

export default OrderOptionDate;
