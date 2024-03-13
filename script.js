let picks = 1;
let packs = 1;
let count = 0;
let counter = null;
let picktime = 0;
const sound = new Audio('sound.mp3');

function countdown(){
  count--;
  document.getElementById('timer').textContent = count;
  if (count == 0){
    sound.play();
    clearInterval(counter);
  }
}
function next(){
  document.getElementById('btn_restart').style.display = 'none';
  document.getElementById('btn_stop').style.display = 'block';
  clearInterval(counter);
  picks++
  if (picks == 16){
    picks = 1;
    if (packs == rounds){
      location.reload();
    }
    packs++;
    document.getElementById('packs').textContent = packs;
  }
  document.getElementById('picks').textContent = picks;
  count = picktime * 15 - ((picks - 1) * picktime);
  document.getElementById('timer').textContent = count;
  counter = setInterval(countdown, 1000);
}

function stop(){
  document.getElementById('btn_stop').style.display = 'none';
  document.getElementById('btn_restart').style.display = 'block';
  clearInterval(counter);
}
function restart(){
  document.getElementById('btn_restart').style.display = 'none';
  document.getElementById('btn_stop').style.display = 'block';
  counter = setInterval(countdown, 1000);
}

function start(){
  // 画面表示
  document.getElementById('timer').style.display = 'block';
  document.getElementById('packs_picks').style.display = 'block';
  document.getElementById('options').style.display = 'none';
  document.getElementById('btn_start').style.display = 'none';
  document.getElementById('btn_container').style.display = 'flex';
  document.getElementById('picks').textContent = picks;
  rounds = document.getElementById('rounds').value
  document.getElementById('packs').textContent = packs;

  picktime = document.getElementById('picktime').value
  count = picktime * 15
  document.getElementById('timer').textContent = count;  
  counter = setInterval(countdown, 1000);
}