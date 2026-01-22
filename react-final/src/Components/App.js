import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import CarGrid from "./CarGrid";
import App from "./components/App";


function App() {
  // Search + filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  // Car dataset
  const cars = [
    {
      id: 1,
      make: "Toyota",
      model: "Camry",
      year: 2020,
      price: 22000,
      mileage: 30000,
      image: "/images/camry.jpg"
    },
    {
      id: 2,
      make: "Honda",
      model: "Civic",
      year: 2019,
      price: 18000,
      mileage: 40000,
      image: "/images/civic.jpg"
    },
    {
      id: 3,
      make: "Ford",
      model: "F-150",
      year: 2021,
      price: 35000,
      mileage: 25000,
      image: "/images/f150.jpg"
    }
  ];

  return (
    <div className="app-container">
      <header className="header">
        <h1>Car Listings</h1>
      </header>

      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Filters
        selectedMake={selectedMake}
        setSelectedMake={setSelectedMake}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />

      <CarGrid
        cars={cars}
        searchQuery={searchQuery}
        selectedMake={selectedMake}
        selectedPrice={selectedPrice}
        selectedYear={selectedYear}
      />
    </div>
  );
}

export default App;




