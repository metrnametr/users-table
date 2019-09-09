import axios from 'axios';

const usersStartFetch = {
  type: 'FETCH_USERS_START',
};

const userSuccessFetch = (data) => ({
  type: 'FETCH_USERS_SUCCESS',
  payload: data,
});

const usersErrorFetch = (error) => ({
  type: 'FETCH_USERS_ERROR',
  payload: {
    error,
  },
});

export default () => (dispatch) => {
  dispatch(usersStartFetch);
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      const { data } = res;
      dispatch(userSuccessFetch(data));
    })
    .catch((error) => dispatch(usersErrorFetch(error)));
};
