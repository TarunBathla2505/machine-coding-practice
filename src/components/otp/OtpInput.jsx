import React, { useEffect, useRef, useState } from "react";
import "./OtpInput.css";

function Otp({ inputArr, setInputArr }) {
  const handleInputChange = (value, index) => {
    value = value.trim();
    if (isNaN(value)) {
      return;
    }
    let newArr = [...inputArr];
    newArr[index] = value.slice(-1);
    setInputArr(newArr);
    value && refArr.current[index + 1]?.focus();
  };

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const refArr = useRef([]);

  const handleOnKeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  };

  return (
    <div className="otp-container">
      {inputArr.map((inp, index) => (
        <input
          className="otp-input"
          type="text"
          key={index}
          value={inputArr[index]}
          ref={(input) => (refArr.current[index] = input)}
          onChange={(e) => handleInputChange(e.target.value, index)}
          onKeyDown={(e) => handleOnKeyDown(e, index)}
        />
      ))}
    </div>
  );
}

const OTP_DIGIT_COUNT = 5;

function OtpInput() {
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGIT_COUNT).fill(""));

  return (
    <>
      <h1>Otp Input</h1>
      <Otp inputArr={inputArr} setInputArr={setInputArr} />
    </>
  );
}

export default OtpInput;
