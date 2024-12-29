import css from "./SearchBox.module.css";

const SearchBox = ({ inputValue, handleChange }) => {
  return (
    <div className={css.search}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
