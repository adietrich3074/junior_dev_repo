import Button from "./Button";

function Navbar({ pages, currentPage, onNavigate }) {
  return (
    <nav className="navbar">
      <h1>Junior Dev UI Garage</h1>
      <div className="nav-links">
        {pages.map((page) => (
          <Button
            key={page.id}
            variant={currentPage === page.id ? "primary" : "ghost"}
            size="sm"
            onClick={() => onNavigate(page.id)}
          >
            {page.label}
          </Button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
