import { useParams } from "react-router-dom";
import cars from "../data/cars";
import "./CarDetails.css";

function CarDetails() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === Number(id));

  if (!car) return <h2>Car not found</h2>;

  return (
    <div className="car-details">
      <img src={car.image} alt={`${car.make} ${car.model}`} />
      <h2>{car.year} {car.make} {car.model}</h2>
      <p><strong>Price:</strong> ${car.price.toLocaleString()}</p>
      <p><strong>Mileage:</strong> {car.mileage.toLocaleString()} miles</p>
    </div>
  );
}

export default CarDetails;

