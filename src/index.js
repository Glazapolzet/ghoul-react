import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const ghoulArr = [];
let n = '1000';
let i = 0;
let timerId;

while (parseInt(n) > 0) {
  ghoulArr.push(`${n} - 7 = ${parseInt(n) - 7}`);
  n = n-7;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

function callGhoul () {
  if (i >= ghoulArr.length) {
    root.render(
      <div>
        <p className="kaneki">I'm ghoul</p>
        <img src="https://media.tenor.com/wvDyYLTH4vEAAAAC/zxc-cat.gif" alt="zxc"/>
      </div>
    );
    clearInterval(timerId);
    return;
  }
  root.render(
    <div>
      <button>LET ME DIE</button>
      <p>{ghoulArr[i]}</p>
    </div>
  );
  i++;
}

root.render(
  <div>
    <button onClick={() => timerId = setInterval(callGhoul, 37)}>LET ME DIE</button>
  </div>
)

reportWebVitals();
