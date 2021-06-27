
document.addEventListener("keydown",function(event)
{var returnString;
removekey(event.key);
});
function removekey(key,returnAlp)
{if(key=="Backspace")
{var t=document.querySelector("h1").textContent;
var lengthOfString=t.length;
t=t.slice(0,lengthOfString-1);
document.querySelector("h1").textContent=t;
}
else{var n = key.charCodeAt(0);
if(key.length<=1)
  {document.querySelector("h1").classList.add("myname");
document.querySelector("h1").textContent+=key;
}

else
{alert("only Alphabets Allowed Try Again Please");}
}
}
