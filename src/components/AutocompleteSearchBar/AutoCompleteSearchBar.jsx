import React, { useEffect, useState } from "react";
import "./AutoCompleteSearchBar.css";

function AutoCompleteSeachBar() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {
    if (cache[input]) {
      setResults(cache[input]);
      return;
    }
    const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
    const json = await data.json();
    setResults(json?.recipes);
    setCache((prev) => ({ ...prev, [input]: results }));
  };

  useEffect(() => {
    const time = setTimeout(() => fetchData(), 300);
    return () => {
      clearTimeout(time);
    };
  }, [input]);

  return (
    <div className="App">
      <h1>AutoCompleteSeachBar</h1>
      <div>
        <input
          type="text"
          className="search-input"
          value={input}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
          onChange={(e) => setInput(e.target.value)}
        />
        {showResults && (
          <div className="result-container">
            {results.map((result) => {
              return (
                <span className="result" key={result?.id}>
                  {result.name}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default AutoCompleteSeachBar;
