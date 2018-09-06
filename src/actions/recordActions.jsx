import axios from 'axios';
import Constants from '../constants/';

const base = 'http://localhost:8080/api';

class RecordActions {
  static loadRecords(results) {
    return {
      type: Constants.LOAD_RECORDS,
      results
    };
  }

  // ==================================================
  // ================== API: ASYNC ====================
  // ==================================================
  static loadRecordsAsync() {
    return dispatch => {
      axios
        .get(`${base}/records`)
        .then(response => {
          dispatch(RecordActions.loadRecords(response.data));
        })
        .catch(error => {
          console.log('Error loading async records -->', error);
        });
    };
  }
}

export default RecordActions;
