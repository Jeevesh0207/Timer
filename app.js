
let count=document.getElementById("count")
let stop=document.getElementById("stop")

let audio = new Audio('song.mp3');

function play(){
    audio.play();
}

function myfun2(){
    audio.pause();
    audio = new Audio('song.mp3');
}


function myfun(){
    let data=document.getElementById("timer").value
    document.getElementById("timer").value=""
    if(data!="")
    {
        // while(true){
           let b= setInterval(()=>{
                console.log(data)
                itml=""
                ihtml=`
                    <h1>${data}</h1>
                `
                count.innerHTML=ihtml
                data--;
                if(data==-1) {
                    clearInterval(b);
                    play()
                }
            },100)
            // if(data==0) break;
        // }
    }
}




