import './styles/desktop.css';
import './styles/flyouts.css'
import './helpers/fonthelper.css';
import './styles/status.css';

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
      <div class="actionTooltip">Action Center</div>
      <img src="https://raw.githubusercontent.com/Futur3Sn0w/Windows10x/main/DynaWalls/1Dark.jpg" className='wallpaper' alt='wallpaper'/>
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
