import './Desktop.css';
import './helpers/fonthelper.css';

function showTime() {
  // Init clock variables
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var session = "AM";

  if (h === 0) {
      h = 12;
  }

  if (h > 12) {
      h = h - 12;
      session = "PM";
  }

  h = (h < 10) ? h : h;
  m = (m < 10) ? "0" + m : m;

  var time = h + ":" + m;
  document.getElementById("clockRight").innerText = time;
  document.getElementById("clockRight").textContent = time;

  // Recall func every second
  setTimeout(showTime, 1000);

}

showTime();

function App() {
  return (
  <div class="container" onload="currentTime()">
    <div class="desktop">
      <div class="bar">
        <p class="clockRight">1:29</p>
      </div>
    </div>
  </div>
  );
}

export default App;
