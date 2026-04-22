import Badge from "../components/Badge";
import Button from "../components/Button";
import Card from "../components/Card";
import FeatureGrid from "../components/FeatureGrid";
import SectionHeader from "../components/SectionHeader";
import ThemeHubCard from "../components/ThemeHubCard";

function ComponentShowcasePage() {
  return (
    <main>
      <SectionHeader
        title="Component Showcase"
        subtitle="See every reusable component in one place and learn what props control each one."
      />
      <p className="try-next">
        Try this next: duplicate one example and change only props to see how the UI updates.
      </p>

      <section className="showcase-block">
        <h3>Button</h3>
        <div className="showcase-row">
          <Button variant="primary" size="sm">
            Primary Small
          </Button>
          <Button variant="secondary">Secondary Medium</Button>
          <Button variant="ghost">Ghost Medium</Button>
        </div>
      </section>

      <section className="showcase-block">
        <h3>Badge</h3>
        <div className="showcase-row">
          <Badge text="Neutral" tone="neutral" />
          <Badge text="Accent" tone="accent" />
          <Badge text="Success" tone="success" />
        </div>
      </section>

      <section className="showcase-block">
        <h3>Card + FeatureGrid</h3>
        <FeatureGrid>
          <Card
            title="Demo Card"
            description="This card shows title, description, image, badge, and favorite state."
            imageUrl="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80"
            category="Example"
            isFavorite
          />
          <Card
            title="Second Card"
            description="Use shared card styles with different content and props."
            imageUrl="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80"
            category="Reusable"
          />
        </FeatureGrid>
      </section>

      <section className="showcase-block">
        <h3>ThemeHubCard</h3>
        <ThemeHubCard
          title="Cars Theme Tile"
          description="The Home hub uses this component to preview each themed page."
          imageUrl="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80"
          cta="Example CTA"
          onOpen={() => {}}
        />
      </section>
    </main>
  );
}

export default ComponentShowcasePage;
