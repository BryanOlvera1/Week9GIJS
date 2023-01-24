class Person {
    name;
    job;
    age;
    constructor(name, job, age) {
      this.name = name;
      this.job = job;
      this.age = age;
    }

    exercise() {
        console.log("Coding is awesome");
    }

    fetchJob() {
        console.log(`${this.name} is a ${this.job}`);
    }
}

const person1 = new Person("Harry", "Frontend Engineer", 20);

person1.fetchJob();


class Programmer extends Person {
    languages;
    busy = true;
    constructor(name, job, age, languages) {
        super (name, job, age)
        this.languages = languages;
    }

    completeTask() {
        return this.busy = false;
    }

    
    acceptNewTask() {
        if (this.busy) { 
            return this.busy = false;
        } else { 
            return this.busy = true;
        }
    }

    offerNewTask() {
        if (this.acceptNewTask()) {
             console.log(`${this.name} can't accept any new tasks right now.`);
        } else {
            console.log(`${this.name} can do a new task`);
        }
    }

    learnLanguage(newLanguage) {
        this.languages.push(newLanguage);
    }

    listLanguages() {
        return (this.languages);
    }
}

const programmer1 = new Programmer("Theo", "DevOps", 18, ["HTML", "C#", "LUA"]);

const programmer2 = new Programmer("Edgar", "janitor", 34, ["HTML", "SASS", "Ruby"]);

const programmer3 = new Programmer("Bryan", "SysOps", 24, ["HTML", "CSS", "JS", "R"]);

programmer1.offerNewTask();
console.log(programmer1);

programmer1.completeTask();
console.log(programmer1);

programmer1.learnLanguage("CSS");
console.log(programmer1);

programmer2.learnLanguage("C++");
console.log(programmer2);

programmer3.learnLanguage("JAVA");
console.log(programmer3);

programmer1.listLanguages();
console.log(programmer1.listLanguages());

programmer2.listLanguages();
console.log(programmer2.listLanguages());

programmer3.listLanguages();
console.log(programmer3.listLanguages());

console.log(person1);

console.log(programmer1);

console.log(programmer2);

console.log(programmer3);

person1.exercise();

person1.fetchJob();



programmer3.completeTask();
console.log(programmer3);

programmer3.acceptNewTask();
console.log(programmer3);

