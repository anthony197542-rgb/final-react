import cars from "../data/cars";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import CarGrid from "../components/CarGrid";import "./Home.css";
import "./Home.css";





function Home() {
  return (
    <div className="home-container">
      <Header />

      <div className="home-content">
        <SearchBar />

        <div className="home-layout">
          <aside className="filters-section">
            <Filters />
          </aside>

          <main className="cars-section">
            <CarGrid />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Home;
