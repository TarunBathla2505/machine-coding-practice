import "./App.css";
import AutoCompleteSeachBar from "./components/AutocompleteSearchBar/AutoCompleteSearchBar.jsx";
import FileExplorer from "./components/fileExplorer/FileExplorer.jsx";
import ProgressBar from "./components/progressBar/ProgressBar.jsx";

function App() {
  return (
    <>
      <ProgressBar />
      <FileExplorer />
      <AutoCompleteSeachBar />
    </>
  );
}

export default App;
