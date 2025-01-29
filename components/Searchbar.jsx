export default function Searchbar({ setQuery }) {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
        type="text"
        placeholder="Search for country..."
      />
    </div>
  );
}
