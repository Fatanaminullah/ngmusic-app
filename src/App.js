import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import "./App.css";
import Landing from "./components/landing";
import ResultList from "./components/result-list";
import ResultNavbar from "./components/result-navbar";
import useLazyFetch from "./hooks";
import PopupSearch from "./components/popup-search";

function App() {
  let [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const { fetchData, loading, data, error } = useLazyFetch();

  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [popupSearch, setPopupSearch] = useState(false);
  const handleSearch = () => {
    setSearchParams({ term: inputValue });
  };
  useEffect(() => {
    const currentURLSearchParams = new URLSearchParams(window.location.search);
    const termFromURL = currentURLSearchParams.get("term");
    if (termFromURL) {
      setSearch(termFromURL);
      fetchData(termFromURL);
    }
  }, [location.search]);
  console.log("loadingm ", loading);
  return (
    <div className="App">
      {!search ? (
        <Landing
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSearch={handleSearch}
        />
      ) : (
        <div className="result">
          <ResultNavbar onClickSearch={() => setPopupSearch(true)} />
          <ResultList loading={loading} data={data} search={search} />
          <PopupSearch
            popupSearch={popupSearch}
            setPopupSearch={setPopupSearch}
            setInputValue={setInputValue}
            handleSearch={handleSearch}
            inputValue={inputValue}
          />
        </div>
      )}
    </div>
  );
}

export default App;
