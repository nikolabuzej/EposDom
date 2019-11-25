var date=new Date();
var hours=date.getHours();
var minutes=date.getMinutes();
var day=date.getDay();

if(day<5){
    if(hours>7 && hours<20){
        document.querySelector("header").innerHTML="DOŠLO JE I TO DOBA DA SE CEDI SOKOVA MORA";
        document.querySelector("header").style.backgroundColor="rgb(178, 245, 102)";
    }
    else{
        document.querySelector("header").innerHTML="KAO I SVEMU LEPOME U ŽIVOTU I NAŠEM RADNOM VREMENU DOĐE KRAJ";
        document.querySelector("header").style.backgroundColor="rgb(255, 51, 51)";
    }
}
else{
    if(hours>7 && hours<15){
        document.querySelector("header").innerHTML="ČAK I KADA RADNI DAN NIJE KOD NAS ŽURCI KRAJ NIJE";
        document.querySelector("header").style.backgroundColor="rgb(178, 245, 102)";
        }
        else{
            document.querySelector("header").innerHTML="NAŠA DUŠA IZDRŽALA NIJE PA ODOSMO KUĆI RANIJE";
            document.querySelector("header").style.backgroundColor="rgb(255, 51, 51)";
        }
}

var meni=document.querySelector('.nav');
meni.addEventListener('mousemove',function(e){
    meni.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",100)";
    
})

   
    
    document.querySelector('.dugme').addEventListener('click',function(e){
       
        var godine=document.querySelector('.godine').value;
        var visina=document.querySelector('.visina').value;
        var tezina=document.querySelector('.tezina').value;
        var rezultat=tezina/(visina*visina);
        console.log(+rezultat);
        var rez=document.querySelector('.rezultat')
        rez.innerHTML=rezultat;
        var omotac=document.querySelector('.omotacRez');
        omotac.className="omotacRez2";
      
        e.preventDefault;
        return false;
       


    })
    
    





