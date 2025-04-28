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
