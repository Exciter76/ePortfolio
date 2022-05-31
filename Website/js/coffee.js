/*
]* Get prices and populate the coffee list from a remote server
 *
 */

var xhttp = new XMLHttpRequest();											
    
xhttp.onreadystatechange = function () {									
    if (this.readyState == 4 && this.status == 200) {						
                                                                            
        var values = this.responseText;	
        
        var parser, xmlDoc;

        parser = new DOMParser();
        xmlDoc = parser.parseFromString(values,"text/xml");

        for(x = 0; x < 12; x++){
            document.getElementById("price" + (x +1)).innerHTML =
            xmlDoc.getElementsByTagName("price")[x].childNodes[0].nodeValue;
        }
        
        
    }																	
};
xhttp.open("GET", "../Inventory.xml", true);									
xhttp.send();


/* show the price when the user mouse moves out of a zoom image */
function Show(handle) {
    document.getElementById("price" + handle).hidden = false;
}

/* Hide the price when the user mouse moves over a zoom image */
function Hide(handle) {
    document.getElementById("price" + handle).hidden = true;
}