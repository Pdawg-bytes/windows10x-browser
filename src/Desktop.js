import './Desktop.css';
import './helpers/fonthelper.css';

function currentTime() {
  const clock = document.querySelector('.clockText');
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
    if (minutes < 10)
    {
      minutes = "0" + minutes;
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
            <div class="statusIcons">
              
            </div>   
            <div class="clock">
              <p class="clockText">0:00</p>
            </div>  
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
