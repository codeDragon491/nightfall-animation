//create an object to store initial color values
var colors = {top:"#5c4a72", middleTop: "#A3586D", middle: "#F46A4E", middleBottom: "#f4874b", bottom:"#f3b05a"};
// create an animation sequence instance
tl = new TimelineLite();
tl.to("#sun", 5, {y:300, ease: Circ.easeOut, opacity: 0 })
.from("#city", 2, {opacity: 0}, 0.1)
//use ColorPropsPlugin to tween the colors
.to(colors, 7, {colorProps:{top:"#131862", middleTop: "#2e4482", middle: "#546bab", middleBottom: "#87889c", bottom:"#bea9de"}, onUpdate:colorize, onUpdateParams:["body"]}, 0)
.to("#moon", 4, {opacity:1, top:100, ease: Circ.easeOut})
.to( "#hill", 5, {attr:{src:'img/hills-night.svg'}}, 8)
.staggerFrom(["#whiteStar",  "#goldSparkle", "#goldSparkleTwo"], 5, {rotation:"+=360deg", opacity: 0, scale: 0});

//basic gradient demo using webkit gradient + ColorPropsPlugin
var iOS = /iPad|iPhone|iPod/.test(navigator.platform), 
isChrome_iOS = false;

var isChromium = window.chrome,
    vendorName = window.navigator.vendor,
    isOpera = window.navigator.userAgent.indexOf("OPR") > -1,
    isChrome = false;
if(isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false) {
   // is Google chrome on iOS
   //if(iOS){
     //isChrome_iOS = true;
   //} 
  isChrome = true;
}

function colorize(element) {
  //apply the colors to the element
  if(isChrome){
    TweenLite.set(element, {backgroundImage:"-webkit-linear-gradient(top," + colors.top + ", " + colors.middleTop + ", " + colors.middle + ", " + colors.middleBottom + ", " + colors.bottom + ")"});
  } else {
    TweenLite.set(element, {background:"linear-gradient(top," + colors.top  + ", " + colors.middleTop + ", " + colors.middle + ", " + colors.middleBottom + ", " +   colors.bottom + ")"});
  }
  //console.log(colors.top);
}
// restarts the animation
$("#restartBtn").click(function() {
    tl.restart();
});
