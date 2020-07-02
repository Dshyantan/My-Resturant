(function() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
        current = names[i];
        var firstletter = current.charAt(0).toLocaleLowerCase();
        if (firstletter === 'j') {
            byeSpeaker.speak(current);
        } else {
            helloSpeaker.speak(current);
        }
    }
})();