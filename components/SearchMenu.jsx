export default function SearchMenu({setQuery}) {
  return (
    <select className="filter-by-region" onChange={(e)=> setQuery(e.target.value.toLocaleLowerCase())}>
      <option value="Africa" hidden>
        Filter by region
      </option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceana">Oceana</option>
    </select>
  );
}
