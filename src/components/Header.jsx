import "../styles/Header.css";

const Header = ({ title = "Dashboard", onRefresh }) => {
  const handleClick = () => {
    if (onRefresh) {
      onRefresh();
    }
  };

  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
      <button className="header-button" onClick={handleClick}>
        Refresh
      </button>
    </header>
  );
};

export default Header;
