import "./styles.css";
import { useState } from "react";

export default function App() {
  var [dob, setDob] = useState("");
  var [luckyNumber, setLuckyNumber] = useState("");
  var messageDiv = document.querySelector("#message-div");

  function dobInputHandler(e) {
    setDob(e.target.value);
    return dob;
  }

  function luckyNumInputHandler(e) {
    setLuckyNumber(Number(e.target.value));
    return luckyNumber;
  }

  function checkBirthday() {
    var arr = [];
    var sum = 0;

    for (var i = 0; i < dob.length; i++) {
      // console.log(dob[i])
      if (dob[i] !== "-") {
        arr.push(Number(dob[i]));
        if (dob[i] === Number) {
          arr[i] = Number(dob[i]);
        }
      }
    }

    for (var j = 0; j < arr.length; j++) {
      sum += arr[j];
    }
    console.log(sum);
    // setDobSum(sum);
    if (sum === 0) {
      if (luckyNumber === null || luckyNumber === "") {
        return "Please select both Date of Birth and Lucky Number";
      }
      return "Please select the Date of Birth";
    } else if (dob !== null || dob !== undefined) {
      if (sum % luckyNumber === 0) {
        return luckyNumber + " is your lucky number and You are so Lucky";
      } else {
        if (luckyNumber === "") {
          return "please enter the lucky nymber";
        } else {
          return luckyNumber + " is not that Lucky";
        }
      }
    }
  }

  function onclickHandler() {
    // console.log(dob, luckyNumber);
    // console.log(checkBirthday());
    messageDiv.innerHTML = checkBirthday();
  }

  return (
    <div className="App">
      <h1>Is your Birthday Lucky? </h1>
      <label htmlFor="dob-input">Date Of Birth:</label>
      <input onChange={dobInputHandler} id="dob-input" type="date" />
      <br />
      <label htmlFor="lucky-num-input"> Lucky Number: </label>
      <input
        onChange={luckyNumInputHandler}
        id="lucky-num-input"
        type="number"
      />
      <br />
      <button id="btn-check" onClick={onclickHandler}>
        Check Number
      </button>

      <div id="output-div">
        <div id="message-div">
          You can see your birthday is lucky or not here...
        </div>
      </div>
    </div>
  );
}
