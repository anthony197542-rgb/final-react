import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import CarGrid from "../components/CarGrid";
import "./App.css"; 




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
      image: "/images/camry.jpg",
    },
    {
      id: 2,
      make: "Honda",
      model: "Civic",
      year: 2019,
      price: 18000,
      mileage: 25000,
      image: "/images/civic.jpg",
    },
    {
      id: 3,
      make: "Ford",
      model: "Fusion",
      year: 2021,
      price: 24000,
      mileage: 15000,
      image: "/images/fusion.jpg",
    },
    // Add more cars as needed
  ];

  // Filter logic
  const filteredCars = cars.filter((car) => {
    const matchesSearch =
      searchQuery === "" ||
      `${car.make} ${car.model}`.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesMake = selectedMake === "" || car.make === selectedMake;
    const matchesPrice =
      selectedPrice === "" || car.price <= parseInt(selectedPrice);
    const matchesYear = selectedYear === "" || car.year === parseInt(selectedYear);

    return matchesSearch && matchesMake && matchesPrice && matchesYear;
  });

  return (
    <div className="app-container">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Filters
        selectedMake={selectedMake}
        setSelectedMake={setSelectedMake}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      <CarGrid cars={filteredCars} />
    </div>
  );
}

export default App;





