import React from "react";

function Interests({ data, setData }) {
  const { interests } = data;

  const handleDataChange = (e) => {
    setData((prev) => ({
      ...prev,
      interests: prev.interests.includes(e.target.name)
        ? prev.interests.filter((interest) => interest !== e.target.name)
        : [...prev.interests, e.target.name],
    }));
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={(e) => handleDataChange(e)}
          />
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            checked={interests.includes("music")}
            onChange={(e) => handleDataChange(e)}
          />
          Music
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="dancing"
            checked={interests.includes("dancing")}
            onChange={(e) => handleDataChange(e)}
          />
          Dancing
        </label>
      </div>
    </div>
  );
}

export default Interests;
