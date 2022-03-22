// function startTime() {
  
//   var date = new Date;
  
//   var hours = date.getHours();
//   var minutes = date.getMinutes();
//   var seconds = date.getSeconds();
//   var ampm = hours >= 12 ? 'pm' : 'am';
//   hours = hours % 12;
//   hours = hours ? hours : 12; // the hour '0' should be '12'
//   minutes = minutes < 10 ? '0'+minutes : minutes;
//   seconds = seconds < 10 ? '0'+seconds : seconds;
//   var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
  
//   //m = checkTime(m);
//   //s = checkTime(s);
//   document.getElementById('txt').innerHTML =  strTime;
//   setTimeout(startTime, 1000);
// }


function startTime() {
  let offset = 3;
  const today = new Date();
  let ds = (today.getHours() * 3600) + (today.getMinutes() * 60) + today.getSeconds()
  let ods = ds + offset
  var h = Math.floor(ods / 3600);
  var m = time(Math.floor(ods % 3600 / 60));
  var s = time(Math.floor(ods % 3600 % 60));
  
  var ampm = h >= 12 ? 'pm' : 'am';
  h = h % 12;
  h = h ? h : 12; // the hour '0' should be '12'
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s + " " + ampm;
  document.getElementById('title').innerHTML =  h + ":" + m + ":" + s + " " + ampm;
  
  setTimeout(startTime, 0);
}

function time(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}



var data = $.getJSON('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1');

var json = JSON.parse(data);

window.alert(json);