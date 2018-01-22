/*jslint browser:true, devel:true, white:true, vars:true, eqeq:true */
/*global $:false, intel:false*/
/*
 * This function runs once the page is loaded, but the JavaScript bridge library is not yet active.
 */
var init = function () {
    
    var b1= document.getElementById("buttonone");
    b1.addEventListener("touchstart", touchstarthandler,false);
    b1.addEventListener("touchend", touchendhandler,false);

    var b2= document.getElementById("buttontwo");
    b2.addEventListener("touchstart", touchstarthandler, false);
    b2.addEventListener("touchend", touchendhandler, false);
};

window.addEventListener("load", init, false);  

 // Prevent Default Scrolling 
/*var preventDefaultScroll = function(event) 
{
    event.preventDefault();
    window.scroll(0,0);
    return false;
};*/
    
window.document.addEventListener("touchmove", preventDefaultScroll, false);

/**
 * Device ready code.  This event handler is fired once the JavaScript bridge library is ready.
 */
function onDeviceReady()
{
    if( window.Cordova && navigator.splashscreen ) {     // Cordova API detected
        navigator.splashscreen.hide();                 // hide splash screen
    }

}

document.addEventListener("deviceready",onDeviceReady,false); 
/**
 * We use the target from the event to add the pressed class name to the selected button
 */     

// Touch start functionality for the buttons
function touchstarthandler(event)
{
    var button= event.target;
    button.className ="pressed";
}


// Touch end functionality for the buttond
function touchendhandler(event)
{
    var button= event.target;
    button.className ="";
    window.location.replace("espresso.html");
}


//Random Coffee Function
/* function randomcoffee(){
            var myrandom=Math.round(Math.random()*16)
    //creates a random whole number in between 0-11
            var coffee=new Array()
            coffee[0]="espresso.html"
            coffee[1]="espresso1.html"
            coffee[2]="latte.html"
            coffee[3]="cappu.html"
            coffee[4]="flatwhite.html"
            coffee[5]="mocha.html"
            coffee[6]="cortado.html"
            coffee[7]="french.html"
            coffee[8]="americano.html"
            coffee[9]="cubano.html"
            coffee[10]="cortadito.html"
            coffee[11]="cafeleche.html"
            coffee[12]="chemex.html"
            coffee[13]="moka.html"
            coffee[14]="cafeaulait.html"
            coffee[15]="espmacc.html"
            coffee[16]="aeropress.html"
    
    //changes the current window to the random number generated
        window.location=coffee[myrandom]    
 }
 */