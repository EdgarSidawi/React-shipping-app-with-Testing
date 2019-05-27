const initialState = {
  isLoggedIn: false,
  userId: '',
  adminIsLoggedIn: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'logIn':
      return {
        ...state,
        isLoggedIn: true
      };
    case 'logOut':
      return {
        ...state,
        isLoggedIn: false
      };
    case 'setUserId':
      return {
        ...state,
        userId: action.userId
      };
    case 'setAdminIsLoggedIn':
      return {
        ...state,
        adminIsLoggedIn: true
      };
    default:
      return state;
  }
};

export default reducer;
