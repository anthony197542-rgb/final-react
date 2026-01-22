import "./Filters.css";

function Filters({ maxPrice, setMaxPrice, maxMileage, setMaxMileage }) {
  return (
    <div className="filters">
      <h3>Filters</h3>

      <div className="filter-group">
        <label>Max Price ($)</label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="e.g. 25000"
        />
      </div>

      <div className="filter-group">
        <label>Max Mileage</label>
        <input
          type="number"
          value={maxMileage}
          onChange={(e) => setMaxMileage(e.target.value)}
          placeholder="e.g. 40000"
        />
      </div>
    </div>
  );
}

export default Filters;

