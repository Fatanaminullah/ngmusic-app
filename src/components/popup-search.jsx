import { AnimatePresence, motion } from "framer-motion";

export default function PopupSearch({
  popupSearch,
  setPopupSearch,
  setInputValue,
  handleSearch,
  inputValue
}) {
  const onSubmit = () => {
    setPopupSearch(false);
    setTimeout(() => {
      handleSearch();
    }, 500);
  };
  return (
    <AnimatePresence mode="wait">
      {popupSearch && (
        <motion.div
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="popup-search cursor-pointer"
        >
          <img
            src="/img/ic_close.png"
            width={18}
            height={18}
            className="popup-search__close"
            role="presentation"
            onClick={() => setPopupSearch(false)}
          />
          <h2>Search</h2>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="popup-search__input-search"
            placeholder="Artist / Album / Title"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSubmit();
              }
            }}
          />
          <button
            className="popup-search__input-button"
            onClick={() => {
              onSubmit();
            }}
          >
            Search
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
