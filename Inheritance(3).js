// Created the parent class
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  // the getter method for name 
  get name() {
    return this._name;
  }
  // getter method for remainingVacationDays 
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  // the method for  takeVacationDays
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}
// created the child class of Nurse
class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
  // added getter method for the certifications 
  get certifications(){
    return this._certifications;
  }
  // added a method for adding certifications
  addCertification(newCertification){
       this._certifications.push(newCertification);
  }
}
// created the instance of the Nurse class
const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
// calling the new added method
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk);