import { useMemo, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import FeatureGrid from "../components/FeatureGrid";
import SectionHeader from "../components/SectionHeader";

const filters = ["All", "Team", "Individual"];

function SportsPage({ items }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [favorites, setFavorites] = useState([]);

  const visibleSports = useMemo(() => {
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
        title="Sports Page"
        subtitle="What you learn: reusable cards, prop changes, and simple category filters."
      />
      <p className="try-next">
        Try this next: create a new filter button and connect it to a category in your data.
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
        {visibleSports.map((sport) => (
          <Card
            key={sport.id}
            title={sport.title}
            description={sport.description}
            imageUrl={sport.imageUrl}
            category={sport.category}
            isFavorite={favorites.includes(sport.id)}
            onFavoriteToggle={() => toggleFavorite(sport.id)}
            buttonLabel={favorites.includes(sport.id) ? "Unpick Sport" : "Quick Pick"}
          />
        ))}
      </FeatureGrid>
    </main>
  );
}

export default SportsPage;
