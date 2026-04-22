import Badge from "./Badge";
import Button from "./Button";

function Card({
  title,
  description,
  imageUrl,
  category,
  isFavorite = false,
  onFavoriteToggle,
  buttonLabel = "Toggle Favorite",
}) {
  return (
    <article className="card">
      {imageUrl ? <img className="card-image" src={imageUrl} alt={title} /> : null}
      <div className="card-content">
        <div className="card-meta">
          {category ? <Badge text={category} tone="accent" /> : null}
          {isFavorite ? <Badge text="Favorite" tone="success" /> : null}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        {onFavoriteToggle ? (
          <Button variant="secondary" size="sm" onClick={onFavoriteToggle}>
            {buttonLabel}
          </Button>
        ) : null}
      </div>
    </article>
  );
}

export default Card;
