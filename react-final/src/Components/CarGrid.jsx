import { Link } from "react-router-dom";
import "./CarGrid.css";

function CarGrid({ cars }) {
  return (
    <div className="car-grid">
      {cars.map((car) => (
        <Link
          to={`/car/${car.id}`}
          key={car.id}
          className="car-card"
        >
          <img src={car.image} alt={`${car.make} ${car.model}`} />
          <h3>{car.year} {car.make} {car.model}</h3>
          <p>Price: ${car.price.toLocaleString()}</p>
          <p>Mileage: {car.mileage.toLocaleString()} miles</p>
        </Link>
      ))}
    </div>
  );
}

export default CarGrid;

