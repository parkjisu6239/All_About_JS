function Person(name){
    this.name = name
}

Person.prototype.greeting = function(){
    console.log(`hi. ${this.name}`)
}

function Teacher(name, subject){
    Person.call(this, name)
    this.subject = subject
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Object.getOwnPropertyNames(Teacher.prototype)

const teacher1 = new Teacher('jisu','math')
teacher1.greeting()