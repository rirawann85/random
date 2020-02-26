var pages = [ 

"https://saldogojek.blogspot.com/",
"https://videobayar.blogspot.com/",

]; 
function randomPage() { 
return pages[Math.round(Math.random() * (pages.length - 1))]; 
} 
location.href= randomPage();
