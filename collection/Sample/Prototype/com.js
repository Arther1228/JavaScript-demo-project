function Person(name, age){
    this.name = name;
    this.age = age;
    
    this.getInfo = function(){
        console.log(this.name + " is " + this.age + " years old");
    };
}

var will = new Person("Will", 28);