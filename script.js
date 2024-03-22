var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

names.forEach(function(name) {
    if (name.charAt(0) === 'J' || name.charAt(0) === 'j') {
        console.log("Good Bye " + name);
    } else {
        console.log("Hello " + name);
    }
});