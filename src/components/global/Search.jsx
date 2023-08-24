import { useEffect, useRef, useState } from 'react';
import SearchColumn from './SearchColumn';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../redux/slices/searchSlice';
import { setChosedIds } from '../../redux/slices/searchSlice';
import { setSearchCatgrsQuantity } from '../../redux/slices/searchSlice';
import { setMarkedCatgrsQuantity } from '../../redux/slices/searchSlice';
import { Link } from 'react-router-dom';

function Search() {
  const [dropdownState, setDropdownState] = useState(false);
  const activeCategories = useSelector((state) => state.searchSlice.markedCatgrsQuantity);
  const searchCatgrsQuantity = useSelector((state) => state.searchSlice.searchCatgrsQuantity);
  const searchValue = useSelector((state) => state.searchSlice.searchValue);
  const [inputValue, setInputValue] = useState('');
  const setSearchDropdown = () => {
    setDropdownState(!dropdownState);
  };
  const dispatch = useDispatch();

  const searchRef = useRef();

  useEffect(() => {
    dispatch(setMarkedCatgrsQuantity(searchCatgrsQuantity));
    setInputValue(searchValue);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.composedPath().includes(searchRef.current)) {
        setDropdownState(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const columnOne = [
    'Treadmills',
    'Exercise Bikes',
    'Utility Benches',
    'Barbell Benches',
    'Multi-Gyms',
  ];
  const columnTwo = [
    'Smith Machines',
    'Leg Machines',
    'Arm Machines',
    'Chest and Shoulder Machines',
    'Back Machines',
  ];
  const columnThree = [
    'Rowing Machines',
    'Steppers',
    'Dumbbell Sets',
    'Kettlebell Sets',
    'Accessories',
  ];

  return (
    <form action="#" className="page__search search-page" ref={searchRef}>
      <div
        className={dropdownState ? 'search-page__select _active' : 'search-page__select'}
        onClick={setSearchDropdown}>
        <div className="search-page__title">
          {activeCategories === 0 && <span>Everywhere</span>}
          {activeCategories > 0 && (
            <span className="search-page__quantity"> Selected: {activeCategories}</span>
          )}
        </div>
        <div className="search-page__categories categories-search">
          <div className="categories-search__row">
            <SearchColumn plusId={1} array={columnOne} />
            <SearchColumn plusId={6} array={columnTwo} />
            <SearchColumn plusId={11} array={columnThree} />
          </div>
        </div>
      </div>
      <div className="search-page__input">
        <input
          value={inputValue}
          type="text"
          autoComplete="off"
          name="form[]"
          data-error="Error"
          data-value=""
          className="input"
          onChange={(event) => setInputValue(event.target.value)}
        />
        {inputValue && (
          <img
            onClick={() => setInputValue('')}
            src="../../images/searchClear.svg"
            className="search-page__clear"></img>
        )}
      </div>
      <Link
        onClick={() => {
          dispatch(setSearchValue(inputValue));
          dispatch(setChosedIds());
          dispatch(setSearchCatgrsQuantity());
        }}
        to="/search"
        className="search-page__btn _btn"
        type="submit">
        Search
      </Link>
    </form>
  );
}

export default Search;
