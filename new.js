// console.log("This is js file");

// document.getElementById("run").classList.add("out");
// console.log(document.getElementById("run").className);

var sum = 0;
var ocount = 0;
var ccount = 0;
var remainder = 1;

      document.getElementById("openned").classList.add("opends");
      document.getElementById("openned").disabled = true;
      document.getElementById("closed").classList.add("closeds");
      document.getElementById("closed").disabled = true;

document.querySelector(".start").addEventListener("click",function(){

  document.getElementById("openned").classList.remove("opends");
  document.getElementById("openned").disabled = false;

  var aud = new Audio("start.wav");
  aud.play();

  document.addEventListener("keydown",function(e){


    //  console.log(e);

    if((e.key=='o' || e.key=='O') && ocount==0 && remainder!=0){
      var aud = new Audio("pageflip.mpeg");
      aud.play();
      ocount = 1;
      ccount = 0;
      document.querySelector(".page6").classList.add("page6js");
  document.querySelector(".page5").classList.add("page5js");
  document.querySelector(".page4").classList.add("page4js");
  document.querySelector(".page3").classList.add("page3js");
  document.querySelector(".page2").classList.add("page2js");
  document.querySelector(".page1").classList.add("page1js");
  document.querySelector(".front").classList.add("frontjs");
  document.querySelector(".back").classList.add("backjs");

  var num = Math.floor(Math.random() * 300);

   remainder = num % 10;
  // console.log(remainder);

  document.getElementById("demo").innerHTML = `<div class="page6" id="demo">
${num}
<hr />
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odio qui
  magnam unde eligendi molestiae adipisci voluptatibus neque quaerat
  quia soluta omnis sint, consequuntur natus voluptatem ab ipsum
  necessitatibus delectus nesciunt quae nemo
</p>
</div>`;

  if (remainder == 0) {
    setTimeout(() => {

      var aud1 = new Audio("gameover.wav");
      aud1.play();
      document.getElementById("run").innerText = remainder;
      document.getElementById("fifty").innerText = "OUT";
      document.getElementById("openned").classList.add("opends");
      document.getElementById("openned").disabled = true;
      document.getElementById("closed").classList.add("closeds");
      document.getElementById("closed").disabled = true;
      document.querySelector('.start').innerText = "RELOAD";


      document.querySelector(".start").addEventListener("click",function(){

        // document.querySelector(".page6").classList.remove("page6js");
        // document.querySelector(".page5").classList.remove("page5js");
        // document.querySelector(".page4").classList.remove("page4js");
        // document.querySelector(".page3").classList.remove("page3js");
        // document.querySelector(".page2").classList.remove("page2js");
        // document.querySelector(".page1").classList.remove("page1js");
        // document.querySelector(".front").classList.remove("frontjs");
        // document.querySelector(".back").classList.remove("backjs");

        // document.getElementById("openned").classList.remove("opends");
        // document.getElementById("openned").disabled = false;
        // document.getElementById("fifty").innerText = "";
        // document.getElementById("run").innerText = "";

        // sum = 0;
        // document.getElementById("currScore").innerText = "SCORE=" + sum;

        window.location.reload();
      
      });

    }, 300);
  } else {
    setTimeout(() => {
      document.getElementById("run").innerText = remainder;
    }, 300);
  }

  sum = scoreCalculation(sum, remainder);

  

 

  setTimeout(() => {
    document.getElementById("currScore").innerText = "SCORE=" + sum;
  }, 400);

  document.getElementById("openned").classList.add("opends");
  document.getElementById("openned").disabled = true;

  document.getElementById("closed").classList.remove("closeds");
  document.getElementById("closed").disabled = false;

    }



    if((e.key=='c' || e.key=='C')  && ccount == 0 && remainder!=0){

      var aud = new Audio("pageflip.mpeg");
      aud.play();
      ocount = 0;
      ccount = 1;
      document.querySelector(".page6").classList.remove("page6js");
      document.querySelector(".page5").classList.remove("page5js");
      document.querySelector(".page4").classList.remove("page4js");
      document.querySelector(".page3").classList.remove("page3js");
      document.querySelector(".page2").classList.remove("page2js");
      document.querySelector(".page1").classList.remove("page1js");
      document.querySelector(".front").classList.remove("frontjs");
      document.querySelector(".back").classList.remove("backjs");

      document.getElementById("openned").classList.remove("opends");
      document.getElementById("openned").disabled = false;

      document.getElementById("closed").classList.add("closeds");
      document.getElementById("closed").disabled = true;



    }


});


});






document.querySelector(".open").addEventListener("click", function () {
  var aud = new Audio("pageflip.mpeg");
      aud.play();
  document.querySelector(".page6").classList.add("page6js");
  document.querySelector(".page5").classList.add("page5js");
  document.querySelector(".page4").classList.add("page4js");
  document.querySelector(".page3").classList.add("page3js");
  document.querySelector(".page2").classList.add("page2js");
  document.querySelector(".page1").classList.add("page1js");
  document.querySelector(".front").classList.add("frontjs");
  document.querySelector(".back").classList.add("backjs");

  var num = Math.floor(Math.random() * 300);

   remainder = num % 10;
  // console.log(remainder);

  document.getElementById("demo").innerHTML = `<div class="page6" id="demo">
${num}
<hr />
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odio qui
  magnam unde eligendi molestiae adipisci voluptatibus neque quaerat
  quia soluta omnis sint, consequuntur natus voluptatem ab ipsum
  necessitatibus delectus nesciunt quae nemo
</p>
</div>`;

  if (remainder == 0) {
    setTimeout(() => {
      var aud1 = new Audio("gameover.wav");
      aud1.play();
      document.getElementById("run").innerText = remainder;
      document.getElementById("fifty").innerText = "OUT";
      document.getElementById("openned").classList.add("opends");
      document.getElementById("openned").disabled = true;
      document.getElementById("closed").classList.add("closeds");
      document.getElementById("closed").disabled = true;
      document.querySelector('.start').innerText = "RESTART";


      document.querySelector(".start").addEventListener("click",function(){

        // remainder = 1;
        // document.querySelector(".page6").classList.remove("page6js");
        // document.querySelector(".page5").classList.remove("page5js");
        // document.querySelector(".page4").classList.remove("page4js");
        // document.querySelector(".page3").classList.remove("page3js");
        // document.querySelector(".page2").classList.remove("page2js");
        // document.querySelector(".page1").classList.remove("page1js");
        // document.querySelector(".front").classList.remove("frontjs");
        // document.querySelector(".back").classList.remove("backjs");

        // document.getElementById("openned").classList.remove("opends");
        // document.getElementById("openned").disabled = false;
        // document.getElementById("fifty").innerText = "";
        // document.getElementById("run").innerText = "";

        window.location.reload();
      
        sum = 0;
        document.getElementById("currScore").innerText = "SCORE=" + sum;
      
      });

    }, 300);
  } else {
    setTimeout(() => {
      document.getElementById("run").innerText = remainder;
    }, 300);
  }

  sum = scoreCalculation(sum, remainder);

  

 

  setTimeout(() => {
    document.getElementById("currScore").innerText = "SCORE=" + sum;
  }, 400);

  document.getElementById("openned").classList.add("opends");
  document.getElementById("openned").disabled = true;

  document.getElementById("closed").classList.remove("closeds");
  document.getElementById("closed").disabled = false;
});

document.querySelector(".close").addEventListener("click", function () {
  var aud = new Audio("pageflip.mpeg");
      aud.play();
  document.querySelector(".page6").classList.remove("page6js");
  document.querySelector(".page5").classList.remove("page5js");
  document.querySelector(".page4").classList.remove("page4js");
  document.querySelector(".page3").classList.remove("page3js");
  document.querySelector(".page2").classList.remove("page2js");
  document.querySelector(".page1").classList.remove("page1js");
  document.querySelector(".front").classList.remove("frontjs");
  document.querySelector(".back").classList.remove("backjs");

  document.getElementById("openned").classList.remove("opends");
  document.getElementById("openned").disabled = false;

  document.getElementById("closed").classList.add("closeds");
  document.getElementById("closed").disabled = true;
});

function scoreCalculation(sumTillNow, rem) {
  sumTillNow += rem;
  return sumTillNow;
}
