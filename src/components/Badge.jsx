function Badge({ text, tone = "neutral" }) {
  return <span className={`badge badge-${tone}`}>{text}</span>;
}

export default Badge;
