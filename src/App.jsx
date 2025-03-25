import "./App.css";
import AutoCompleteSeachBar from "./components/AutocompleteSearchBar/AutoCompleteSearchBar.jsx";
import FileExplorer from "./components/fileExplorer/FileExplorer.jsx";
import Pagination from "./components/pagination/Pagination.jsx";
import ProgressBar from "./components/progressBar/ProgressBar.jsx";
import TabForm from "./components/tabform/TabForm.jsx";

function App() {
  return (
    <>
      <TabForm />
      <ProgressBar />
      <FileExplorer />
      <AutoCompleteSeachBar />
      <Pagination />
    </>
  );
}

export default App;
