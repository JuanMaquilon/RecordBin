import Immutable from 'immutable';
import Constants from '../constants';

// Initial State for Records
const recordInitialState = {
  record: Immutable.fromJS({
    records: []
  })
};

function recordReducer(state = recordInitialState.record, action) {
  switch (action.type) {
    case Constants.LOAD_RECORDS:
      state = state.updateIn(
        ['records'],
        data => (data = Immutable.fromJS(action.results))
      );
      return state;

    default:
      return state;
  }
}

export { recordInitialState, recordReducer };
