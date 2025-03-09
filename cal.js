const display = document.getElementById('display')
        const sumdisplay = document.getElementById('displayy')
        const sunBtn = document.getElementById('sunBtn')
        const moonBtn = document.getElementById('moonBtn')
        const calContainer = document.querySelector('.calContainer')
        sunBtn.addEventListener('click', ()=> {
            calContainer.style.backgroundColor = 'white'
            calContainer.style.boxShadow = '0px 0px 10px 5px rgb(224, 224, 224)'
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