const initialState = {
  loading: true,
  error: false,
  users: [],
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_USERS_START':
      return state;
    case 'FETCH_USERS_SUCCESS': {
      return {
        ...state,
        loading: false,
        users: [...payload],
      };
    }
    case 'FETCH_USERS_ERROR':
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default userReducer;
