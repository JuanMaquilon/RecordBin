import React from 'react';
import { connect } from 'react-redux';
import { addNotification } from '../../actions/notificationActions';

const Home = props => {
  // Testing the notification system component
  props.dispatch(addNotification({ title: 'Success', message: 'The loaded successfully.', level: 'success' }));
  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>This a home page</p>
      <p> Reading pathname from the state ->> {props.routing.pathname}</p>

      <button className="btn btn-primary">Button primary</button>

    </div>
  );
}

const mapStateToProps = state => ({
  routing: state.routing.location
});

export default connect(mapStateToProps)(Home);
