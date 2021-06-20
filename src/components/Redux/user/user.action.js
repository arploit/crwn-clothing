import { UserActionType } from './user.types';

export const SET_CURRENT_USER = (user) => ({
	type: UserActionType.SET_CURRENT_USER,
	payload: user,
});
