import React, { useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';
import data from '../../json/AllItems.json';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentItems } from '../../redux/slices/itemsSlice';
import { setFilters } from '../../redux/slices/filterSlice';
import qs from 'qs';
import { useNavigate, useParams } from 'react-router-dom';

export const Pagination = () => {
  const [selectedId, setSelectedId] = useState('0');
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [urlPage, setUrlPage] = useState(0);
  let items = data;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const sortCategory = useSelector((state) => state.filterSlice.sortCategory);
  const category = params.category;
  const subcategory = +params.subcategory;
  const firstLoad = useRef(true);

  useEffect(() => {
    firstLoad.current = true;
  }, [params]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(setFilters(params));
      setUrlPage(+params.page);
      setItemOffset(+params.page * 9);
    }
  }, []);

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
    if (category) {
      items = items.filter((item) => item.typeId == category);
    }
    if (subcategory) {
      items = items.filter((item) => item.subtypeId == subcategory);
    }

    const endOffset = itemOffset + itemsPerPage;
    setPageCount(Math.ceil(items.length / itemsPerPage));
    dispatch(setCurrentItems(items.slice(itemOffset, endOffset)));

    if (!firstLoad.current) {
      const queryString = qs.stringify({
        sort: sortCategory,
        page: itemOffset / 9,
      });
      navigate(`?${queryString}`);
    }
    firstLoad.current = false;
  }, [itemOffset, itemsPerPage, items, sortCategory, category, selectedId, subcategory]);

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
            forcePage={urlPage}
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

export default Pagination;
