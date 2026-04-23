import { useMemo, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import FeatureGrid from "../components/FeatureGrid";
import SectionHeader from "../components/SectionHeader";

const filters = ["All", "Fast", "Utility", "Eco"];

function CarsPage({ items }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [favorites, setFavorites] = useState([]);

  const visibleCars = useMemo(() => {
    if (activeFilter === "All") {
      return items;
    }

    return items.filter((item) => item.category === activeFilter);
  }, [activeFilter, items]);

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id) ? current.filter((itemId) => itemId !== id) : [...current, id]
    );
  };

  return (
    <main>
      <SectionHeader
        title="Cars Page"
        subtitle="What you learn: filtering data, mapping arrays, and favorite toggles with state."
      />
      <p className="try-next">
        Try this next: add a new car object in the data file and give it a new category.
      </p>

      <div className="filter-row">
        {filters.map((filterName) => (
          <Button
            key={filterName}
            variant={activeFilter === filterName ? "primary" : "ghost"}
            size="sm"
            onClick={() => setActiveFilter(filterName)}
          >
            {filterName}
          </Button>
        ))}
      </div>

      <FeatureGrid>
        {visibleCars.map((car) => (
          <Card
            key={car.id}
            title={car.title}
            description={car.description}
            imageUrl={car.imageUrl}
            category={car.category}
            isFavorite={favorites.includes(car.id)}
            onFavoriteToggle={() => toggleFavorite(car.id)}
            buttonLabel={favorites.includes(car.id) ? "Remove Favorite" : "Save Favorite"}
          />
        ))}
      </FeatureGrid>
    </main>
  );
}

export default CarsPage;
