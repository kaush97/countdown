import React from 'react';
import "../component/CommingSoon.css"

export default function CommingSoon() {
    const countdown = () => {
        const countDate = new Date("August 17, 2050 00:00:00").getTime();
    
        const currentTime = new Date().getTime();
    
        const gap = countDate - currentTime;
    
        const millisecond = 1;
        const second = millisecond * 1000;
        const minutes = second * 60;
        const hour = minutes * 60;
        const day = hour * 24;
    
    
        const textHour = Math.floor((gap % day) / hour);
        const textMinutes = Math.floor((gap % hour) / minutes);
        const textSecond = Math.floor((gap % minutes) / second);
        const textMillisecond = Math.floor((gap % second) / millisecond);
    
        console.log(textHour)
        console.log(textMillisecond)
        document.querySelector('.hour').innerText = textHour;
        document.querySelector('.minutes').innerText = textMinutes;
        document.querySelector('.seconds').innerText = textSecond;
        document.querySelector('.miliSeconds').innerText = textMillisecond;
    
    };
    
    setInterval(countdown, 1000);
  return (
      <div>
          <section className='container'>
          <div>
          <div class="countdown">
              <div class="container-hour">
                  <h2 class="hour">Time</h2>
                  <h5>Hours</h5>
              </div>
              <div class="container-minutes">
                  <h2 class="minutes">Time</h2>
                  <h5>Minutes</h5>
              </div>
              <div class="container-seconds">
                  <h2 class="seconds">Time</h2>
                  <h5>Seconds</h5>
              </div>
              <div class="container-miliSeconds">
                  <h3 class="miliSeconds">Time</h3>
                  <h5>MiliSeconds</h5>
              </div>
          </div>
      </div>
          </section>
      </div>
  )
}
