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
    <div className="dFlex flexCol">
      <p className="montse bold fs1375">{message}</p>
      <button
        type="button"
        onClick={buttonHandler}
        className="roboto bold fs1 formButt"
      >
        Check Status
      </button>

    </div>
  );
};

export default Categories;
