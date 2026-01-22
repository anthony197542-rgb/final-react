import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import CarGrid from "../components/CarGrid";
import carsData from "../data/cars";
import "./Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  const filteredCars = carsData.filter((car) => {
    const query = searchQuery.toLowerCase();

    const matchesSearch =
      car.make.toLowerCase().includes(query) ||
      car.model.toLowerCase().includes(query) ||
      car.year.toString().includes(query);

    const matchesPrice =
      maxPrice === "" || car.price <= Number(maxPrice);

    const matchesMileage =
      maxMileage === "" || car.mileage <= Number(maxMileage);

    return matchesSearch && matchesPrice && matchesMileage;
  });

  return (
    <div className="home-container">
      <SearchBar setSearchQuery={setSearchQuery} />
      <div className="content">
        <Filters
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          maxMileage={maxMileage}
          setMaxMileage={setMaxMileage}
        />
        <CarGrid cars={filteredCars} />
      </div>
    </div>
  );
}

export default Home;

