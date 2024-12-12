import './styles/SearchBar.css';

export default function SearchBar() {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input type="text" placeholder="Busca" className="search-input" />
        <button className="search-button">🔍</button>
      </div>
    </div>
  );
}