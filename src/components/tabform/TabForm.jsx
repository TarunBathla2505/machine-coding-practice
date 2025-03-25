import React, { useState } from "react";
import "./TabForm.css";
import Profile from "./tab-components/Profile";
import Interests from "./tab-components/Interests";
import Settings from "./tab-components/Settings";

function TabForm() {
  const [active, setActive] = useState(0);
  const [data, setData] = useState({
    name: "Tarun Bathla",
    age: "22",
    email: "tarunbathla721@gmail.com",
    interests: ["coding", "music"],
    theme: "dark",
  });

  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interests",
      component: Interests,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const ActiveTabComponent = tabs[active].component;

  const handleNextClick = () => {
    setActive((prev) => prev + 1);
  };

  const handlePreviousClick = () => {
    setActive((prev) => prev - 1);
  };

  const handleSubmitClick = () => {
    console.log(data);
  };
  return (
    <div>
      <h1>TabForm</h1>
      <div className="tab-form-container">
        {tabs.map((tab, index) => (
          <div
            onClick={() => setActive(index)}
            key={tab.name}
            className={
              active === index ? "tab-form-item-active" : "tab-form-item"
            }
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="form">
        <ActiveTabComponent data={data} setData={setData} />
      </div>
      <div>
        {active > 0 && <button onClick={handlePreviousClick}>Previous</button>}
        {active < tabs.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
        {active === tabs.length - 1 && (
          <button onClick={handleSubmitClick}>Submit</button>
        )}
      </div>
    </div>
  );
}

export default TabForm;
