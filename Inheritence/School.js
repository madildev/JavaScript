// craete parent class School
class School{
  constructor(name,level,numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name(){
    return this._name;
  }
  get level(){
    return this._level;
  }
  get numberOfStudents(){
    return this._numberOfStudents;
  }
  set numberOfStudents(students){
    if(typeof students === 'number'){
    this._numberOfStudents= students;
  }else {
    console.log('Invalid input: numberOfStudents must be set to a Number.');
  }
} 
  quickFacts(){
  console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }
static pickSubstituteTeacher(substituteTeachers){
   const random = Math.floor(Math.random() * substituteTeachers*length - 1);
   return  substituteTeachers[random];
 }

}
// create the child class low
class Primary extends School {
  constructor(name,numberOfStudents,pickupPolicy){
    super(name,'Primary',numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
}
const lorraineHansbury = new Primary('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
console.log(lorraineHansbury);

// create a child class Middle

class Middle extends School{
  constructor(name,numberOfStudents){
    super(name,"Middle",numberOfStudents);
  }
}

// Create a child class High

class High extends School{
  constructor(name,numberOfStudents,sportsTeams){
    super(name,"High",numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
}
const alSmith = new High('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith);
 