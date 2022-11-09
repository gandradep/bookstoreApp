import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.categories);

  const buttonHandler = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="dFlex">
      <p>{message}</p>
      <button
        type="button"
        onClick={buttonHandler}
      >
        Check Status
      </button>

    </div>
  );
};

export default Categories;
