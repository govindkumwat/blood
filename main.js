
const btnclose = document.querySelector('.close');
const data = document.querySelector('.completedata');
const searchresult = document.querySelector('.selctcity');

console.log(data);








searchresult.addEventListener('click', function(){
if(searchresult === Jaipur){
    console.log("this is available")
}
})









btnclose.addEventListenerAll('click', function(){
    data.classList.add('hidden');
})


function bloodGroup(){
    document.querySelectorAll('.completedata')[0].classList.add('hidden');
    document.querySelectorAll('.selectcity')[0].classList.remove('hidden'); 
    document.querySelectorAll('.findonmap')[0].classList.add('hidden'); 
    document.querySelectorAll('.findadonar')[0].classList.add('hidden'); 
    document.querySelectorAll('.becomeadonar')[0].classList.add('hidden');  
    document.querySelectorAll('.contact')[0].classList.add('hidden');
}

function search(){
     document.querySelectorAll('.completedata')[0].classList.remove('hidden'); 

    // document.querySelectorAll('.selectcity')[0].classList.add('hidden'); 
}

function findadonar(){
    document.querySelectorAll('.completedata')[0].classList.add('hidden');
    document.querySelectorAll('.findadonar')[0].classList.remove('hidden');  
    document.querySelectorAll('.findonmap')[0].classList.add('hidden'); 
    document.querySelectorAll('.becomeadonar')[0].classList.add('hidden');
    document.querySelectorAll('.contact')[0].classList.add('hidden');
    document.querySelectorAll('.selectcity')[0].classList.add('hidden');
    document.querySelectorAll('.findblood')[0].classList.add('hidden'); 
}


function mapomap(){
    document.querySelectorAll('.completedata')[0].classList.add('hidden');
    document.querySelectorAll('.findonmap')[0].classList.remove('hidden'); 
    document.querySelectorAll('.findadonar')[0].classList.add('hidden'); 
    document.querySelectorAll('.becomeadonar')[0].classList.add('hidden');
    document.querySelectorAll('.selectcity')[0].classList.add('hidden');
    document.querySelectorAll('.contact')[0].classList.add('hidden');
    document.querySelectorAll('.findblood')[0].classList.add('hidden'); 
}

function finddonarclose(){
    
    document.querySelectorAll('.findadonar')[0].classList.add('hidden'); 
    document.querySelectorAll('.findblood')[0].classList.remove('hidden');
    
}

function bdonarclose(){
    
    document.querySelectorAll('.becomeadonar')[0].classList.add('hidden'); 
    document.querySelectorAll('.findblood')[0].classList.remove('hidden');
    
}

function becomeadonar(){
    document.querySelectorAll('.completedata')[0].classList.add('hidden');
    document.querySelectorAll('.becomeadonar')[0].classList.remove('hidden'); 
    document.querySelectorAll('.findonmap')[0].classList.add('hidden'); 
    document.querySelectorAll('.findadonar')[0].classList.add('hidden'); 
    document.querySelectorAll('.contact')[0].classList.add('hidden');
    document.querySelectorAll('.selectcity')[0].classList.add('hidden');
    document.querySelectorAll('.findblood')[0].classList.add('hidden'); 
}

function contact(){
    document.querySelectorAll('.completedata')[0].classList.add('hidden');
    document.querySelectorAll('.contact')[0].classList.remove('hidden'); 
    document.querySelectorAll('.becomeadonar')[0].classList.add('hidden'); 
    document.querySelectorAll('.findonmap')[0].classList.add('hidden'); 
    document.querySelectorAll('.findadonar')[0].classList.add('hidden'); 
    document.querySelectorAll('.selectcity')[0].classList.add('hidden')
    document.querySelectorAll('.findblood')[0].classList.add('hidden'); 
}

function closealldata(){
    document.querySelectorAll('.completedata')[0].classList.add('hidden');
    document.querySelectorAll('.selectcity')[0].classList.add('hidden')
}

function mapclosecross(){
    document.querySelectorAll('.findonmap')[0].classList.add('hidden');
    document.querySelectorAll('.findblood')[0].classList.remove('hidden');
    
}

function contactclose(){
    document.querySelectorAll('.contact')[0].classList.add('hidden');
    document.querySelectorAll('.findblood')[0].classList.remove('hidden');
    
}





