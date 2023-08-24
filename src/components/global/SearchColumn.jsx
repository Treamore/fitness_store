import SearchLi from './SearchLi';

function SearchColumn(props) {
  return (
    <div className="categories-search__column" onClick={(event) => event.stopPropagation()}>
      <ul className="categories-search__list">
        {props.array.map((value, index) => (
          <SearchLi id={props.plusId + index} key={index} value={value} />
        ))}
      </ul>
    </div>
  );
}

export default SearchColumn;
