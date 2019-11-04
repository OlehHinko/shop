import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { productsReducers } from "./products-reducer"
import { userReducers } from "./user-reducer"

export default history =>
	combineReducers({
		router: connectRouter(history),
		user: userReducers,
	    products: productsReducers,
	});
