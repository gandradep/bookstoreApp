const CHECKING_STATUS = 'bookstore/categores/CHECKING_STATUS';

const initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKING_STATUS:
      return 'UNDER CONSTRUCTION';
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: CHECKING_STATUS,
});

export default categoriesReducer;
