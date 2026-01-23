import "./Filters.css";

function Filters({
  selectedMake,
  setSelectedMake,
  selectedPrice,
  setSelectedPrice,
  selectedYear,
  setSelectedYear
}) {
  return (
    <div className="filters">
      <select value={selectedMake} onChange={(e) => setSelectedMake(e.target.value)}>
        <option value="">All Makes</option>
        <option value="Toyota">Toyota</option>
        <option value="Honda">Honda</option>
        <option value="Ford">Ford</option>
      </select>

      <select value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)}>
        <option value="">Max Price</option>
        <option value="15000">15,000</option>
        <option value="20000">20,000</option>
        <option value="25000">25,000</option>
      </select>

      <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
        <option value="">Year</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
      </select>
    </div>
  );
}

export default Filters;

