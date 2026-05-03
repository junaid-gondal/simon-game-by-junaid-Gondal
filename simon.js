let a=document.getElementById('b1');
let b=document.getElementById('b2');
let c=document.getElementById('b3');
let d=document.getElementById('b4');
let div=document.getElementById('di');
let start=document.getElementById('start');
 let aa=0;
 let startcond=false;
const buttons = document.querySelectorAll('button');
arr=Array.from(buttons)
let string="";
let bb;
let m;
let new_string="";
let third_string="";
function bigcod()
{  while(startcond=true)
{for(let i=0; i<=aa; i++)
{ 
    let r=Math.floor(Math.random() * 4)
        string=string + r;
}
  for(let j=0; j<=string.length(); j++)
{    m=string[j];
    if(m=="0")
    {
        bb="a";
    }
    if(m=="1")
    {
        bb="b";
    }
    if(m=="2")
    {
        bb="c";
    }
    if(m=="3")
    {
        bb="c";
    }
    new_string[j]=bb;
    
  }

  for(let k=0; k<=new_string.length(); k++)
  {
    let o=new_string[k];
    let button=document.getElementsByName(o)[k];
    if (button)
{
    button.click();

setTimeout(() => 
{

}, 2000);
}

}
 while(third_string.length()<= new_string.length())
 { 
a.addEventListener('click',handler);
b.addEventListener('click',handler);
c.addEventListener('click',handler);
d.addEventListener('click',handler);

if((third_string.length()== new_string.length()) && (third_string==new_string))
{ div.innerHTML=`level ${ aa }`;
aa++;
    break;
}
 }
}

}
function handler(e)
{   third_string=third_string + e.target.name;
    
}

function hand(e)
{    
    if(aa==0)
{   startcond=true;
bigcod();
}
   
}
start.addEventListener('click',hand)
