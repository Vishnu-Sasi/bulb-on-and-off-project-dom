const btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    const bulb = document.getElementById('image');

    if(bulb.getAttribute('src').match('off')){
        bulb.setAttribute('src','./images/on.png');
        btn.innerHTML = "TURN OFF";
        document.body.style.backgroundColor = 'blue';
    }else{
        bulb.setAttribute('src','./images/off.png')
        btn.innerHTML = "TURN ON";
        document.body.style.backgroundColor = 'yellow';
    }
});