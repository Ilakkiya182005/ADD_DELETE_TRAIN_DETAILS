function addTrain(){

    let trainname=document.getElementById("name").value;
    let arrivaltime=document.getElementById("arrival").value;
    let departuretime=document.getElementById("departure").value;
   
    if (!trainname || !arrivaltime || !departuretime) {
       alert("Please fill in all fields.");
       return;}
   
    let results=document.getElementById("result")
    
    results.innerHTML +=`
           <p><strong>Train Name:</strong> ${trainname}   <strong>Arrival Time:</strong> ${arrivaltime}   <strong>Departure Time:</strong> ${departuretime}</p>
           
          `; 
   
      
   document.getElementById("name").value = "";
   document.getElementById("arrival").value = "";
   document.getElementById("departure").value = "";
   
   }
   
   
   function deleteTrain() {
      let results = document.getElementById("result");
       if (results.firstElementChild) {
           results.removeChild(results.firstElementChild); 
       } else {
           alert("No train details to delete."); 
       }
   }