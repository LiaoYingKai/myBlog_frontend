import { combineReducers } from 'redux';
import user from './reducer/user';

const musicPlayer = combineReducers({
	user,
});

export default musicPlayer;