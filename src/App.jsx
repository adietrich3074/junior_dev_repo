import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import { carItems, gameItems, homeThemes, sportsItems } from "./data/themes";
import CarsPage from "./pages/CarsPage";
import ComponentShowcasePage from "./pages/ComponentShowcasePage";
import GamesPage from "./pages/GamesPage";
import HomePage from "./pages/HomePage";
import SportsPage from "./pages/SportsPage";

const pages = [
  { id: "home", label: "Home" },
  { id: "cars", label: "Cars" },
  { id: "sports", label: "Sports" },
  { id: "games", label: "Games" },
  { id: "showcase", label: "Showcase" },
];

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const pageContent = useMemo(() => {
    if (currentPage === "cars") return <CarsPage items={carItems} />;
    if (currentPage === "sports") return <SportsPage items={sportsItems} />;
    if (currentPage === "games") return <GamesPage items={gameItems} />;
    if (currentPage === "showcase") return <ComponentShowcasePage />;

    return <HomePage themes={homeThemes} onOpenTheme={setCurrentPage} />;
  }, [currentPage]);

  return (
    <div className="app-shell">
      <Navbar pages={pages} currentPage={currentPage} onNavigate={setCurrentPage} />
      {pageContent}
    </div>
  );
}

export default App;
