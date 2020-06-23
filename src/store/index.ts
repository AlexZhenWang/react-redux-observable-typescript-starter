import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootEpic from './rootEpic';
import { rootReducer } from './rootReducer';

const epics = createEpicMiddleware();
const middlewares = composeWithDevTools(applyMiddleware(epics));

const store = createStore(rootReducer, {}, middlewares);
epics.run(rootEpic);

export default store;
