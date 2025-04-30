const display = document.getElementById('display')
const sumdisplay = document.getElementById('displayy')
const sunBtn = document.getElementById('sunBtn')
const moonBtn = document.getElementById('moonBtn')
const calContainer = document.querySelector('.calContainer')
sunBtn.addEventListener('click', ()=> {
    calContainer.style.backgroundColor = 'white'
    display.style.backgroundColor = 'white'
    display.style.color = 'black'
    sumdisplay.style.backgroundColor = 'white'
    sumdisplay.style.color = 'black'
    document.getElementById('key').style.backgroundColor = "#f8f9fa"
    document.querySelector('.theme').style.backgroundColor = 'hsl(0, 0%, 15%)'
    document.querySelector('.theme').style.color = 'white'
    // document.getElementsByTagName('button').style.backgroundColor = "green"

})
moonBtn.addEventListener('click', ()=>{
    calContainer.style.backgroundColor = ''
    display.style.backgroundColor = ''
    display.style.color = ''
    sumdisplay.style.backgroundColor = ''
    sumdisplay.style.color = ''
    document.getElementById('key').style.backgroundColor = ""
    document.querySelector('.theme').style.backgroundColor = ''
    document.querySelector('.theme').style.color = ''
})
const appendToDisplay = (val) =>{
    display.value += val;
}
const clearfunc = ()=>{
    display.value = "";
    sumdisplay.value = "";
}
const clearfun = ()=>{
    display.value = "";
}
const calculate =()=>{
    try{
        sumdisplay.value = eval(display.value)
    }
    catch{
        sumdisplay.value = "Error"
    }
}

const deleteLast = () =>{
    display.value = display.value.slice(0, -1);
}

// function for scientific calculations
let sciFunc = document.getElementById('sciFunc')
let changeBtn = document.getElementById('changeBtn')
let changeValue = document.querySelectorAll('.changeValue')
let valueArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
changeBtn.addEventListener('click', ()=>{
    console.log(changeValue[0]);
    
    changeValue[0].innerHTML = `<button class="changeValue">&xfr;<sup>3</sup></button>` 
    changeValue[1].innerHTML = `<button><small>&yopf;&Sqrt;&xfr;</small></button>` 
    changeValue[2].innerHTML = `<button><small>sin<sup><small>-1</small></sup></small></button>` 
    changeValue[3].innerHTML = `<button><small>cos<sup><small>-1</small></sup></small></button>` 
    changeValue[4].innerHTML = `<button><small>tan<sup><small>-1</small></sup></small></button>` 
    changeValue[5].innerHTML = `<button>&frac12;</button>` 
    changeValue[6].innerHTML = `<button><small>e<sup>&xfr;</sup></small></button>` 
    changeValue[7].innerHTML = `<button><small>ln</small></button>` 
    changeValue[8].innerHTML = `<button><small>dms</small></button>` 
    changeValue[9].innerHTML = `<button><small>deg</small></button>` 
})

sciFunc.addEventListener('click', ()=>{
    document.querySelector('.sciCal').classList.add("sciCalShow")
})

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
            console.log('Service Worker registered with scope:', registration.scope);
        }, function(err) {
            console.log('Service Worker registration failed:', err);
        });
    });
}

// Handle Install Prompt
let deferredPrompt;
let installBtn = document.getElementById('installBtn')
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = 'block';

    installBtn.addEventListener('click', () => {
        installBtn.style.display = 'none';
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
        });
    });
});
