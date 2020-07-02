(function(window) {
    var byeSpeaker = {};
    byeSpeaker.speak = names;
    var speakWord = "Good Bye";
    byeSpeaker.saybye = function() {
        console.log(speakWord + " " + byeSpeaker.speak)
    };
    window.byeSpeaker = byeSpeaker;
})();