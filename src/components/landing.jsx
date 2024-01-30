export default function Landing({ inputValue, setInputValue, handleSearch }) {
  return (
    <div className="landing">
      <img src="/img/img_logo.png" alt="img-logo" className="landing__logo" />
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="landing__input-search"
        placeholder="Artist / Album / Title"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button
        className="landing__input-button"
        onClick={() => {
          handleSearch();
        }}
      >
        Search
      </button>
    </div>
  );
}
