import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const zk = 5;
  const uni = 10;

  return (
    <div className="App">
      <div>
        <h1>Exchange calculator</h1>
        <div className="first">
          <div>
            <input name="currency" list="currency" />
            <datalist id="currency">
              <option value="RUB" />
              <option value="USD" />
              <option value="EUR" />
              <option value="LAR" />
            </datalist>
          </div>
          <div className="first-between">
            <p className="first-text">to</p>
            <img
              src="./images/Arrow1.png"
              alt=" "
              className="first-arrow"
            ></img>
          </div>
          <div>
            <input name="currency" list="currency" />
            <datalist id="currency">
              <option value="RUB" />
              <option value="USD" />
              <option value="EUR" />
              <option value="LAR" />
            </datalist>
          </div>
        </div>
        <div>
          <input></input>
        </div>
        <div className="second">
          <div className="zk">
            <p>{`Золотая корона: ${zk}`}</p>
            <output></output>
          </div>
          <div className="uni">
            <p>{`Unistream: ${uni}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
