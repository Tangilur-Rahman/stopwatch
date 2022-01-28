let hour = 0;
let min = 0;
let sec = 0;
let mill = 0;

let check = false;

document.getElementById("start").addEventListener("click",function(){

     check = true;
     stopWatch();
});

document.getElementById("stop").addEventListener("click",function(){
 
     check = false;
    
});

document.getElementById("reset").addEventListener("click",function(){

    check = false;

     hour = 0;
     min = 0;
     sec = 0;
     mill = 0;

    document.getElementById("hour").innerText = "00";
    document.getElementById("min").innerText = "00";
    document.getElementById("sec").innerText = "00";
    document.getElementById("mill").innerText = "00";

});


  function stopWatch(){

      if(check == true){
    
        
          mill += 1;
          setTimeout("stopWatch()",10);
          
          if(mill == 100){
              sec +=1;
              mill = 0;
          }

          if(sec == 60){
              min +=1;
              sec = 0;
             
          }
          if(min == 60){
              hour +=1;
              min = 0;
             
             
          }


          let hourString = hour;
          let minString = min;
          let secString = sec;
          let millString = mill;

          if(hour < 10){
              hourString = "0" + hourString;
          }
          if(min < 10){
              minString = "0" + minString;
          }

          if(sec <10){
              secString = "0" + secString;
          }

          if(mill < 10){
              millString = "0" + millString;
          }
          document.getElementById("hour").innerText = hourString;

          document.getElementById("min").innerText = minString;

          document.getElementById("sec").innerText = secString;

          document.getElementById("mill").innerText = millString;
          
      }
  }