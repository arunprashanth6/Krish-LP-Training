var Person = function(name, street, city, state) {
    this.name = name;
    this.street = street;
    this.city = city;
    this.state = state;
}
 
Person.prototype = {
 
    hydrate: function() {
        var memento = JSON.stringify(this);
        return memento;
    },
 
    dehydrate: function(memento) {
        var m = JSON.parse(memento);
        this.name = m.name;
        this.street = m.street;
        this.city = m.city;
        this.state = m.state;
    }
}

var MedicalTracker = function() {
    this.mementos = {};
 
    this.add = function(key, memento) {
        this.mementos[key] = memento;
    },
 
    this.get = function(key) {
        return this.mementos[key];
    }
}
 
function run() {
    var mike = new Person("Mike", "11 Albert Street", "Wegas", "TX");
    var john = new Person("John", "48th Street", "San Jose", "CA");
    var medicalTracker = new MedicalTracker ();
 
    // save state
    medicalTracker.add(1, mike.hydrate());
    medicalTracker.add(2, john.hydrate());
 
    // Change name
    mike.name = "King Kong";
    john.name = "Superman";
 
    // restore original state
 
    mike.dehydrate(medicalTracker.get(1));
    john.dehydrate(medicalTracker.get(2));
 
    console.log(mike.name);
    console.log(john.name);
}

