import axios from 'axios';
import { GET_ERRORS } from './types';


export const startChangeUserStatus= ({ id, status } = {}) => {
    return (dispatch) => {

        return axios.post('/api/users/ChangeUserStatus', {id, status})
        .then(() => {
            dispatch(ChangeUserStatus({ id, status }));
      
          })
    };
  };

  export const ChangeUserStatus = ({ id, status }  = {}) => ({
    type: 'CHANGE_USER_STATUS',
    id,
    status
  });

export const setUsersAction = () => dispatch => {
    axios.get('/api/users/getUsers')
            .then(res => {
                dispatch(setUsers(res.data.Users));
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

  export const setUsers = (users) => ({
    type: 'SET_USERS',
    users
  });