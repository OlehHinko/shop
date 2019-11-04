export const SET_USER_NAME = "SET_USER_NAME";

const initState = {
	name: "",
};

export const userReducers = (state = initState, action) => {
	switch (action.type) {
		case SET_USER_NAME:
			return { ...state, name: action.payload };
		default:
			return state;
	}
};

export const setUserName = (name) => async dispatch => {
	dispatch({ type: SET_USER_NAME, payload: name});
}

