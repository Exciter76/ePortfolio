
/* A script intended for social messaging */

/* Social Media Collection */
var strMessages = ["Good time in Aroma - Kate", "Enjoying my americano - Pat", "Great place to sit, enjoy a coffe and read a paper - simon",
    "Can't get enough of Aroma - Jane ", "Enjoying the arouma in here - Joan", "Great Expresso here - Nigal",
    "Wonderfull staff and great coffee - Adrian", "I come here to meet friends and chat over a Americano - Liz",
    "Great coffe and great crack here - Jim", "Simply the best - Susan"];

/* Pointer to the current social media message */
var index = 0;

/* post a social message to any calling js thread */
function getSocialMessages() {

    /* evaluate index. if its greater than the strTest lenght then set index to 0 */
    if (index == strMessages.length) {
        index = 0;
    }

    /* post the current social message */
    self.postMessage(strMessages[index]);

    /* increment index */
    index++;    

}

/* call the messaging function every 3 seconds */
setInterval(getSocialMessages, 3000);