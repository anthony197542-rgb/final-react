import "./CarGrid.css";

function CarGrid({ cars }) {
  return (
    <div className="car-grid">
      {cars.length === 0 && <p>No cars match your filters.</p>}

      {cars.map((car) => (
        <div key={car.id} className="car-card">
          <img src={car.image} alt={`${car.make} ${car.model}`} />
          <h3>{car.make} {car.model}</h3>
          <p>Year: {car.year}</p>
          <p>Price: ${car.price.toLocaleString()}</p>
          <p>Mileage: {car.mileage.toLocaleString()} miles</p>
        </div>
      ))}
    </div>
  );
}

export default CarGrid;

