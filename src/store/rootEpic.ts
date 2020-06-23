import { combineEpics } from 'redux-observable';
import counterEpics from './counter/epics';

export default combineEpics<any>(...counterEpics);
