import "./SearchBar.css";

function SearchBar({ setSearchQuery }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by make, model, or year..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;

