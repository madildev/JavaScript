// Created a Parent class of HospitalEmployee
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}
// Created Child class Nurse of the HospitalEmployee 
class Nurse extends HospitalEmployee {
  constructor(name,certifications){
    super(name);
    this._certifications= certifications;
  }
}
// created an oject of the Class nurse 
const nurseOlynyk= new Nurse('Olynyk',['Trauma', 'Pediatrics']);
console.log(nurseOlynyk);
