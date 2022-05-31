/* routines for the contact form */

document.getElementById("btnSend").addEventListener("click",function(){

    /* Retrive contact details from the user */
    var strFirstName = document.getElementById("firstName").value;
    var strLastName = document.getElementById("surName").value;
    var strStreet = document.getElementById("streetAddress").value;
    var strTown = document.getElementById("TownAddress").value;

    var strPhoneNumber = document.getElementById("mobileNumber").value;
    var strEmail = document.getElementById("emailAddress").value;
    
    const NOT_FOUND = -1;

    /*
     *  A first and last name is required
     */
    if(strFirstName.length == 0 || strLastName.length == 0){
        alert("Please enter you first and last name,\nso as we can contat you.");
        return false;
    }

    /*
     *  A valid phone number if one is given. 
     *  A valid phone number is area code a number together.
     */
    if(isNaN(strPhoneNumber)){
        alert("Please Enter a valid phone number.");
        return false;
    }

    /*
     *  validate email address. 
     *  Email address is required for contact.
     */
    if(strEmail.length == 0 || strEmail.indexOf("@") == NOT_FOUND ||
        strEmail.indexOf(".") == NOT_FOUND){
        alert("Please enter a valid email address, so as we can contact you.");
        return false;
    }

    //save the data on our local machine
    localStorage.setItem("firstName", strFirstName);
    localStorage.setItem("lastName", strLastName);
    localStorage.setItem("streetName", strStreet);
    localStorage.setItem("townName", strTown);
    localStorage.setItem("phoneNumber", strPhoneNumber);
    localStorage.setItem("Email", strEmail);

    //Declare a contact object and retrive the saved value of first name
    var objContact = new Object();
    objContact.firstName = localStorage.getItem("firstName");

    //acknowledge the user 
    alert("Thanks for your contact details " + objContact.firstName + " . Someone will contact you shortly.");
    return false;
})