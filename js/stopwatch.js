const display  = document.getElementById('display');
let timer  = null;
let starttime  = 0 ; 
let elapsedtime  = 0 ;
let isrunning  = false ;


function start (){
    if (!isrunning){
        starttime = Date.now() - elapsedtime;
        timer = setInterval(updateDisplay, 1000);
        isrunning = true;
  

    }

}

function stop(){
    if (isrunning){
        clearInterval(timer);
        elapsedtime =  Date.now() - starttime;
        isrunning = false; 
    }
    

}

function reset(){


    clearInterval(timer);
    elapsedtime = 0;
    starttime = 0;
    isrunning = false;
    display.textContent = '00:00:00:00';
    

}


function updateDisplay(){

    const currenttime = Date.now();
    elapsedtime = currenttime - starttime;
    let Hours = Math.floor( elapsedtime / 3600000);
    let minutes = Math.floor(elapsedtime / (1000*60)% 60);
    let seconds = Math.floor(elapsedtime / 1000% 60);
    let milliseconds = Math.floor(elapsedtime % 1000/10);

    display.textContent = `${Hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
     


}
