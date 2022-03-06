# Store Folder Structure
## /Actions
- In /src/actions/, action files are created according to modules so as to group similar concerns. For example, AuthenticationActions.js - may contain signInAction(); logoutAction(); BlogActions.js - may contain getBlogPostAction(); deleteCommentAction(); updateBlogPostAction(); etc..

## /Reducer
- In /src/reducer/, create TestReducer.js file, several reducers can be created to handle the state for specific modules within our application.
Create a Test Reducer function that accepts two parameters,
- state (with the default set to its original state) and action
- Use switch to check action type and then update state.

## /store/index.js
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./Reducers";

//thunk middleware is used to intercept actions so as to make API call before dispatching result to reducer
const store = createStore(reducers, applyMiddleware(thunk));

export default store;

## To bring it all together
In App.tsx
- import useDispatch hook, to dispatch action that'll get fetch users from a remote server
- dispatch that action on component mount,


### More on topic here
- https://dev.to/olumidesamuel_/structuring-redux-in-a-react-web-app-1i21 
