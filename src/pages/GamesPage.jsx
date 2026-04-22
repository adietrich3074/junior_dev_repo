import { useMemo, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import FeatureGrid from "../components/FeatureGrid";
import SectionHeader from "../components/SectionHeader";

function GamesPage({ items }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const filters = useMemo(
    () => ["All", ...new Set(items.map((item) => item.category))],
    [items]
  );

  const visibleGames = useMemo(() => {
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
        title="Video Games Page"
        subtitle="What you learn: local state, interactive buttons, and data-driven rendering."
      />
      <p className="try-next">
        Try this next: add a new game genre and connect it to another filter option.
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
        {visibleGames.map((game) => (
          <Card
            key={game.id}
            title={game.title}
            description={game.description}
            imageUrl={game.imageUrl}
            category={game.category}
            isFavorite={favorites.includes(game.id)}
            onFavoriteToggle={() => toggleFavorite(game.id)}
            buttonLabel={favorites.includes(game.id) ? "Remove Top Pick" : "Add Top Pick"}
          />
        ))}
      </FeatureGrid>
    </main>
  );
}

export default GamesPage;
