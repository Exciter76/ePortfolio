/* Javascript routines for the about page */

/ * invoke social messaging when button play is clicked */

document.getElementById("btnPlay").addEventListener("click", function () {
    console.log("btnPlay is pressed");
    playSocialMessages();
});

/ * Stop playing social messages if the stop button is pressed */

document.getElementById("btnStop").addEventListener("click", function () {
    console.log("btnStop is pressed");
    stopSocialMessages()
});


var socialWorker = null;         //worker pointer to social media messaging thread

function playSocialMessages() {

    /* enable, disable social media buttons on play state */
    document.getElementById("btnPlay").disabled = true;
    document.getElementById("btnStop").disabled = false;

    /* get a handle on the social media display for social messages */
    var strDisplay = document.getElementById("SocialMsgDisplay");

    /* Default comment to tell the web user to wait!*/
    strDisplay.innerHTML = "In 3 seconds...";

    socialWorker = new Worker("js/social.js");

    /* Capture messages from the social media
     * worker and display then on the social
     * media display
     */
    socialWorker.addEventListener("message", function (e) {
        strDisplay.innerHTML = e.data;
    },false);


}

function stopSocialMessages() {
    /* kill the worker thread */
    socialWorker.terminate();

    /* Reset the social media display to the default message */
    document.getElementById("SocialMsgDisplay").innerHTML =
        "Read some kind comments about us!<br /><strong>Press play</strong>";

    /* enable, disable social media buttons on stop state */
    document.getElementById("btnPlay").disabled = false;
    document.getElementById("btnStop").disabled = true;

}