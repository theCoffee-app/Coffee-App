
/*var myrandom;
var coffee;*/

function randomcoffee() {
    "use strict"; //Don't know why
   var myrandom = Math.round(Math.random() * 22);
    //creates a random whole number in between 0-11
   var coffee = [];
    coffee[0] = "espresso.html";
    coffee[1] = "espresso1.html";
    coffee[2] = "latte.html";
    coffee[3] = "cappu.html";
    coffee[4] = "flatwhite.html";
    coffee[5] = "mocha.html";
    coffee[6] = "cortado.html";
    coffee[7] = "french.html";
    coffee[8] = "americano.html";
    coffee[9] = "cubano.html";
    coffee[10] = "cortadito.html";
    coffee[11] = "cafeleche.html";
    coffee[12] = "chemex.html";
    coffee[13] = "moka.html";
    coffee[14] = "cafeaulait.html";
    coffee[15] = "espmacc.html";
    coffee[16] = "aeropress.html";
    coffee[17] = "espressoBlnd.html";
    coffee[18] = "latteMacc.html";
    coffee[19] = "breve.html";
    coffee[20] = "coldbrew.html";
    coffee[21] = "coldbrewNitro.html";
    coffee[22] = "chorreador.html";
    
    //changes the current window to the random number generated
    window.location = coffee[myrandom];
    
}

        function showDesc() {
            var x = document.getElementById("info-card");
            if (x.style.display === "block") {
                x.style.display = "none";
            }
            else {
                x.style.display = "block";
            }
        }

//Search Function

function searchFunction() {
                var input, filter, ul, li, a, i;
                input = document.getElementById("myInput");
                filter = input.value.toUpperCase();
                ul = document.getElementById("myUL");
                li = ul.getElementsByTagName("a");
                for (i = 0; i < li.length; i++) {
                    a = li[i].getElementsByTagName("a")[0];
                    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                        li[i].style.display = "";
                    } else {
                        li[i].style.display = "none";

                    }
                }
            }


        
