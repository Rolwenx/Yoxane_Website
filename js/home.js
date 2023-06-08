// We take the artist text element from the HTML
var artist_element = document.querySelector('.artist_text');

var initial_text = 'Artists';
var replacement_text = 'Engineers';

// We create a function to replace the original text
function replaceText() {
    /* We want the text to be replaced 5s after the loading of the page
    so we set a timeout*/

    setTimeout(function(){
        var current_text = artist_element.textContent;
        // If the value of current_text = initial_text => new_text = replacement_text
        // If the value of current_text = replacement_text => new_text = initial_text
        var new_text = current_text === initial_text ? replacement_text : initial_text;
        var textLength = new_text.length;
        var currentIndex = 0;

        // We set a 0.1 typing speed with the setInterval
    var timer = setInterval(function() {
        // From here we print the letters 1 by 1, with the 0.1 typing speed
        if (currentIndex < textLength) {
            artist_element.textContent = new_text.slice(0, currentIndex + 1);
            currentIndex++;
        } else {
        clearInterval(timer);
        setTimeout(replaceText, 2000); // We wait 5s before re-printing a text
        }
        }, 100); 
    }, 2000);

}
// We call the replace function
replaceText();
