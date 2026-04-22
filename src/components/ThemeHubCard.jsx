import Button from "./Button";

function ThemeHubCard({ title, description, imageUrl, cta, onOpen }) {
  return (
    <article className="hub-card">
      <img src={imageUrl} alt={title} className="hub-card-image" />
      <div className="hub-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Button onClick={onOpen}>{cta}</Button>
      </div>
    </article>
  );
}

export default ThemeHubCard;
