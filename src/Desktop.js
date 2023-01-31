import './Desktop.css';
import './helpers/fonthelper.css';

function currentTime() {
  const clock = document.querySelector('.clockRight');
  setInterval(function() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (hours >= 12) {
      hours -= 12;
    }
    if (hours === 0) {
      hours = 12;
    }
    clock.innerText = `${hours}:${minutes}`;
  }, 200);
}

window.addEventListener('load', currentTime);

function App() {
  return (
  <div class="container" onload="currentTime()" tabindex="-1">
    <div class="desktop">
      <img src="https://static.miraheze.org/windowswallpaperwiki/c/c8/Beach_%28Windows_10X%29.png" className='wallpaper' alt='wallpaper'/>
      <div class="bar">
        <div class="statusDiv">
          <button class="statusButton" tabindex="-1">
            <div class="clock">
              <p class="clockRight">4:51</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
