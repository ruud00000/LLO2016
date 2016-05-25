'use strict';

app.factory('myFactoryWithState', function() {
    return function(naam) {
        this.naam = naam;

        this.hello = function() {
            return "Hello " + this.naam;
        };
    };
});
