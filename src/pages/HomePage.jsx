import SectionHeader from "../components/SectionHeader";
import FeatureGrid from "../components/FeatureGrid";
import ThemeHubCard from "../components/ThemeHubCard";

function HomePage({ themes, onOpenTheme }) {
  return (
    <main>
      <section className="hero">
        <h2>Build Fun UI While You Learn React, Alex</h2>
        <p>
          Pick a theme, inspect the components, and see how the same building blocks create totally
          different pages.
        </p>
      </section>

      <SectionHeader
        title="Theme Hub"
        subtitle="Start with any theme below. The goal is fun practice, not complex code."
      />

      <FeatureGrid>
        {themes.map((theme) => (
          <ThemeHubCard
            key={theme.id}
            title={theme.title}
            description={theme.description}
            imageUrl={theme.imageUrl}
            cta={theme.cta}
            onOpen={() => onOpenTheme(theme.id)}
          />
        ))}
      </FeatureGrid>
    </main>
  );
}

export default HomePage;
