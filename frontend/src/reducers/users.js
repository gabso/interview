const usersReducerDefaultState = [];

export default (state = usersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_USERS':
        return action.users;
        case 'CHANGE_USER_STATUS':
        return state.map((user) => {
            if (user.id === action.id) {
              return {
                ...user,
                status: action.status
              };
            } else {
              return user;
            };
          });
      default:
        return state;
    }
};