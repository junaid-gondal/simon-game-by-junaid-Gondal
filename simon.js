let buttons=document.querySelectorAll(".bb");
let string="";
let ustring="";
let level=0;
let idx=0;
let start=false;
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const levelup=async()=>
{
  level++;
   let upp=document.getElementById("di");
   upp.innerText=level;
   let option=["a","b","c","d"];
   let rand=Math.floor(Math.random() * 4)
   string=string + option[rand];

   for(let i=0; i<=string.length-1; i++)
   {
          let e=document.getElementById(string[i])
          console.log(string[i]);
          await sleep(800);
          e.classList.add("active");
          await sleep(800);
          e.classList.remove("active");
          await sleep(800);

   }
 


}
buttons.forEach(bb=>
{
   bb.addEventListener("click",async()=>
{

    let idd=bb.getAttribute("id");

    if(idd=="start")
    {  if(!start)

      {   start=true;
       await levelup();
    }
    }

 if(idd =="a"||idd =="b" ||idd =="c"||idd =="d" ) 
{    let  e=document.getElementById(idd);
     e.classList.add("active");
          await sleep(800);
          e.classList.remove("active");
          await sleep(800);
      console.log(idd)    
    ustring= ustring + idd;
    
if(ustring[idx]!==string[idx])
{
    console.log("game over");
    document.body.style.backgroundColor="red";
    let upp=document.getElementById("di");
   upp.innerText= "game over";

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
