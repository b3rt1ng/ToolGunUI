state=true
function time() {
  var now = new Date();
  if (state==true) {
    document.getElementById('current_hour').innerText = now.getHours()+" "+(now.getMinutes()<10?'0':'')+now.getMinutes();
  } else {
    document.getElementById('current_hour').innerText = now.getHours()+":"+(now.getMinutes()<10?'0':'')+now.getMinutes();
  }
  state = !state
  setTimeout(time, 1000);
}
