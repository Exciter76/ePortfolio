
/*
*   Geo Location Function
*/

function geoLocation(){
    
    var xDisplay = document.getElementById("geoLocation");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
       
    }else{
        xDisplay.innerHTML = "request denied or this browser does not support geo location."
    }

    function showPosition(position) {
        xDisplay.innerText = "Your current location is: " + position.coords.latitude+ " latitude, " + position.coords.longitude + " longitude.";
       
    }
}

/*
 *  Draw the company logo on a canvas
 */
function drawCompanyIcon(){

    var canvas = document.getElementById("MainPageCanvas");
    var ctx = canvas.getContext("2d");

    ctx.font = "30px Brush Script MT";
    ctx.textAlign = "center";

    display = "Aroma Coffee";
    ctx.fillText(display, canvas.width / 2, (canvas.height / 3));

    //draw an underline
    var displayLength = ctx.measureText(display);
    const TICKNESS = 2;
    ctx.fillRect(80, ((canvas.height) / 3) + 5, displayLength.width + 5, TICKNESS );
    
}

/*
 *  Infrom the web user that a response will be 
 *  sent to their mail box if they provided
 *  an email.
 */
function Send() {

    //get the users email
    var strEmail = document.getElementById("emailAddress").value;

    /*
     *  Only inform the user of a email if they provide
     *  an email address.
     */
    if ((strEmail.length > 0) && (strEmail.indexOf("@") > 0)) {
        alert("Thank you. A response will be sent to your mailbox: " + strEmail);
        return 0;
    }
}
