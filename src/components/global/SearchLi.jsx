import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchId } from '../../redux/slices/searchSlice';
import { setMarkedCatgrsQuantity } from '../../redux/slices/searchSlice';

export const SearchLi = ({ value, id }) => {
  const chosenIds = useSelector((state) => state.searchSlice.chosenIds);
  const markedCatgrsQuantity = useSelector((state) => state.searchSlice.markedCatgrsQuantity);
  const isChosen = chosenIds.filter((current) => current == id).length > 0 ? true : false;
  const [isActive, setActive] = useState(isChosen);

  useEffect(() => {
    if (window.location.search && window.location.pathname === '/search') {
      console.log('hi');
    }
  }, []);

  const dispatch = useDispatch();

  const toggleCategory = () => {
    isActive
      ? dispatch(setMarkedCatgrsQuantity(markedCatgrsQuantity - 1))
      : dispatch(setMarkedCatgrsQuantity(markedCatgrsQuantity + 1));
    setActive(!isActive);
    dispatch(setSearchId(id));
  };

  return (
    <li>
      <label
        className={
          isActive
            ? 'categories__checkbox checkbox-categories _active'
            : 'categories__checkbox checkbox-categories'
        }>
        <input type="checkbox" className="checkbox-categories__input" defaultChecked={isActive} />
        <span onClick={toggleCategory} className="checkbox-categories__text">
          {value}
        </span>
      </label>
    </li>
  );
};

export default SearchLi;
