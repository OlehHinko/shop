export const SET_PRODUCTS_DATA = "SET_PRODUCTS_DATA";

const initState = {
	data: JSON.parse(localStorage.getItem('data')) || [
		{
			id: 1,
			name: 'T-shirt',
			quantity: 10,
			type: 'sport',
		},
		{
			id: 2,
			name: 'Leggings',
			quantity: 5,
			type: 'sport',
		},
		{
			id: 3,
			name: 'Shorts',
			quantity: 2,
			type: 'sport',
		},
		{
			id: 4,
			name: 'Shoes',
			quantity: 3,
			type: 'sport',
		},
	  ]
};

export const productsReducers = (state = initState, action) => {
	switch (action.type) {
		case SET_PRODUCTS_DATA:
			localStorage.setItem("data", JSON.stringify(action.payload));
			return { ...state, data: action.payload };
		default:
			return state;
	}
};

export const setProductsData = (data) => async dispatch => {
	dispatch({ type: SET_PRODUCTS_DATA, payload: data });
};
