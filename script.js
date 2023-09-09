function display(){
    let clock =document.getElementById("clock")
  let x = new Date
  let h=x.getHours()
    let m =x.getMinutes()
  let s = x.getSeconds()
    let d =x.getDay()
    let session="AM";
    if(h==0){
      h=12;
    }
    if(h>12){
      h==h-12;
      session="PM"
    }
    const timeString = `${formatTime(h)}:${formatTime(m)}:${formatTime(s)}${session}`;
    clock.textContent = timeString;
  
  }
   
  
  
  function formatTime(time) {
  return time < 10 ? `0${time}` : time;
          }
  setInterval(display,1000)
  display();