import { useEffect, useState } from "react";

const Bar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimatedProgress(progress), 100);
  }, [progress]);

  return (
    <div
      className="outer"
      style={{
        width: "100%",
        border: "1px solid black",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <div
        className="inner"
        style={{
          // width: `${progress}%`,
          transform: `translateX(${animatedProgress - 100}%)`,
          color: `${animatedProgress < 5 ? "Black" : "white"}`,
          textAlign: "right",
          transition: "0.5s ease-in",
        }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemax="100"
        aria-valuemin="0"
      >
        {progress}%
      </div>
    </div>
  );
};

function ProgressBar() {
  const progressBars = [0, 5, 10, 30, 50, 70, 90, 100];

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      {progressBars.map((value) => {
        return <Bar key={value} progress={value} />;
      })}
    </div>
  );
}

export default ProgressBar;
