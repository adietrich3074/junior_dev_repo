function Button({ children, onClick, variant = "primary", size = "md", type = "button" }) {
  return (
    <button type={type} className={`btn btn-${variant} btn-${size}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
