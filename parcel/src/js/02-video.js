
import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Vimeo(iframe);
const saveTimeThrottled = throttle(saveCurrentTime, 1000);
player.on('timeupdate', saveTimeThrottled);
function saveCurrentTime(event) {
  const currentTime = event.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}
window.addEventListener('load', () => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    player.setCurrentTime(parseFloat(savedTime));
  }
});
