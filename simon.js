let buttons=document.querySelectorAll(".bb");
let string="";
let ustring="";
let level=0;
let idx=0;
let start=false;
let con=true;
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
let audioelement= new Audio('1.m4a');
let audioelement2= new Audio('2.weba');
async function levelup()
{
  level++;
   let upp=document.getElementById("di");
   upp.innerText="Level  " + level;
   
   let option=["a","b","c","d"];
   let rand=Math.floor(Math.random() * 4)
   string=string + option[rand];

   
   
          let e=document.getElementById(string[string.length-1])
          console.log(string[string.length-1]);
          await sleep(800);
          e.classList.add("active");
          audioelement.play()
          await sleep(800);
          e.classList.remove("active");
          await sleep(800);

}
buttons.forEach(bb=>
{
   bb.addEventListener("click",async()=>
{  

    let idd=bb.getAttribute("id");
     
    if(idd=="start" && con==true)
    { audioelement.play()

       if(!start)

      {   start=true;
       await levelup();
    }
    }

 if(idd =="a"||idd =="b" ||idd =="c"||idd =="d" ) 
{    let  e=document.getElementById(idd);
     e.classList.add("active");
      audioelement.play()
          await sleep(500);
          e.classList.remove("active");
          await sleep(500);
      console.log(idd)    
    ustring= ustring + idd;
    
if(ustring[idx]!==string[idx])
{
    console.log("game over");
    con=false;
    document.body.style.backgroundColor="red";
    let upp=document.getElementById("di");
   upp.innerText= "game over";
   audioelement2.play();

   
    
    start = false;
    string = "";
    ustring = "";
    level = 0;
    idx = 0;
    return;
  
    

}
idx ++;
if(ustring.length === string.length)
{    ustring="";
    idx=0;
    
  await  levelup();
    
}

    
}
}
);


});

