// Created the Parent Classs
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  // getter method of namm
  get name() {
    return this._name;
  }
  // getter method of the remainingVacationDays
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  // method of the takeVacationDays
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}
// Created the child Class
class Nurse extends HospitalEmployee {
 constructor(name, certifications) {
   super(name);
   this._certifications = certifications;
 } 
}
// Created instance of the child class
const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
// Called the method using Object
nurseOlynyk.takeVacationDays(5);
// printed the result of the function
console.log(nurseOlynyk.remainingVacationDays);