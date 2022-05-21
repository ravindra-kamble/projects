
// contact form logic below

const form = document.querySelector("form");
let statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e) => {
     e.preventDefault();//preventing from autosubmit 
     statusTxt.style.color = "#2B88D8";
     statusTxt.style.display="inline-block";
    
    let xhr = new XMLHttpRequest(); //creating new XML object
    xhr.open("POST", "message.php", true);//sending post request to message.php file

    xhr.onload = ()=>{ //once ajax loaded  
      if(xhr.readyState == 4 && xhr.status == 200){ //if ajax response code is 400 and ready status 4 means there is no any erro
       let response = xhr.response; //storing ajax response in response variable

      //  if response is an error then we will chnage the color of the response message
      if(response.indexOf("Email and Password feild is required!") != -1 || response.indexOf("enter a valid email address!") != -1 || response.indexOf("Sorry, fialed to send your message!") != -1)
      {
        statusTxt.style.color = "red";
      }
      else {
        form.reset();
        setTimeout(()=>{
          statusTxt.style.display = "none";
        }, 3000);
      }
       console.log(response);
       statusTxt.innerText = response;
      }
    }
    let formData = new FormData(form);
    xhr.send(formData);
    }

