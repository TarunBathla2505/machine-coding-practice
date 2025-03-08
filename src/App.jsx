import "./App.css";
import FileExplorer from "./components/fileExplorer/FileExplorer.jsx";
import ProgressBar from "./components/progressBar/ProgressBar.jsx";

function App() {
  return (
    <>
      <ProgressBar />
      <FileExplorer />
    </>
  );
}

export default App;
