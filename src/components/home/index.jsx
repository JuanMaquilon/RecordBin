import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecordActions from '../../actions/recordActions';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(RecordActions.loadRecordsAsync());
  }

  render() {
    const records = this.props.records.get('records').map(record => {
      return (
        <div
          className="card border-primary mb-3"
          style={{ 'max-width': '30rem' }}>
          <div className="card-header">{record.get('artist')}</div>
          <div className="card-body">
            <h4 className="card-title">{record.get('recordName')}</h4>
            <p className="card-text">Category: {record.get('category')}</p>
            <p className="card-text">Year: {record.get('year')}</p>
          </div>
        </div>
      );
    });

    return <div className="container">{records}</div>;
  }
}

const mapStateToProps = state => ({
  records: state.record
});

export default connect(mapStateToProps)(Home);
