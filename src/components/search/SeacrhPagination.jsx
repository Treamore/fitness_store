import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import data from '../../json/AllItems.json';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentItems } from '../../redux/slices/itemsSlice';
import { setChosedIds, setSearchIds, setSearchValue } from '../../redux/slices/searchSlice';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

export const SearchPagination = () => {
  const [selectedId, setSelectedId] = useState('0');
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sortCategory = useSelector((state) => state.filterSlice.sortCategory);
  const searchValue = useSelector((state) => state.searchSlice.searchValue);
  const searchIds = useSelector((state) => state.searchSlice.chosenIds);

  let items = data;

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(setSearchValue(params.search));
      if (params.categories) {
        const searchParams = params.categories.map((item) => +item);
        dispatch(setSearchIds(searchParams));
        dispatch(setChosedIds());
      }
    }
  }, []);

  if (searchValue) {
    items = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
  }

  if (searchIds.length > 0) {
    let filtered = [];
    searchIds.map((id) => {
      filtered = filtered.concat(items.filter((item) => id == item.typeId));
    });
    items = filtered;
  }

  useEffect(() => {
    switch (sortCategory) {
      case '0':
        items.sort((a, b) => {
          return b.popularity - a.popularity;
        });
        break;
      case '1':
        items.sort((a, b) => {
          if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
          if (a.title.toLowerCase() < b.title.toLowerCase()) return 1;
          return 0;
        });
        break;
      case '2':
        items.sort((a, b) => {
          return a.currentPrice - b.currentPrice;
        });
        break;
      case '3':
        items.sort((a, b) => {
          return b.currentPrice - a.currentPrice;
        });
        break;
    }
  }, [sortCategory]);

  useEffect(() => {
    switch (selectedId) {
      case '0':
        setItemsPerPage(9);
        break;
      case '1':
        setItemsPerPage(18);
        break;
      case '2':
        setItemsPerPage(36);
        break;
      case '3':
        setItemsPerPage(72);
        break;
    }
  }, [selectedId]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    dispatch(setCurrentItems(items.slice(itemOffset, endOffset)));
    setPageCount(Math.ceil(items.length / itemsPerPage));

    const queryString = qs.stringify({
      categories: searchIds,
      search: searchValue,
    });
    navigate(`?${queryString}`);
  }, [itemOffset, itemsPerPage, sortCategory, selectedId, searchValue, searchIds]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="catalog__navi navi-catalog">
      <div className="navi-catalog__show show-catalog">
        <div className="show-catalog__label">Items on Page:</div>
        <div className="show-catalog__select">
          <select
            onChange={(e) => {
              setSelectedId(e.target.value);
            }}
            name="form[]"
            className="_select">
            <option value="0" defaultValue="selected">
              9
            </option>
            <option value="1">18</option>
            <option value="2">36</option>
            <option value="3">72</option>
          </select>
        </div>
      </div>
      <div className="navi-catalog__pages">
        <div className="pagging">
          <ReactPaginate
            breakLabel="..."
            nextLabel=""
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel=""
            renderOnZeroPageCount={null}
            containerClassName="pagging__list"
            pageLinkClassName="pagging__item"
            previousLinkClassName="pagging__arrow"
            nextLinkClassName="pagging__arrow"
            activeLinkClassName="pagging__item _active"
            breakLinkClassName="pagging__item"
            marginPagesDisplayed={1}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchPagination;
