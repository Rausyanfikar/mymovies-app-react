import { legacy_createStore as createstore } from 'redux';
import { reducer } from '../reducers/reducer';

export const store = createstore(reducer);
