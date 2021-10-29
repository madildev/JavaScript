// Created parent class Media
class Media {
    constructor(title){
      this._title= title;
      this._isCheckedOut= false;
      this._ratings= [];
    }
    // getter method for the author
    get author(){
      return this._author;
    }
    // getter method for the title
    get title(){
      return this._title;
    }
    // getter method for the Checkout
    get isCheckedOut(){
     return this._isCheckedOut;
    }
    // getter method for the Rating
    get ratings(){
      return this._ratings;
    }
    // setter method for isCheckedOut
    set isCheckedOut(status){
      this._isCheckedOut= status;
    }
    // method for Togle status
    toggleCheckOutStatus(){
       this._isCheckedOut= !(this._isCheckedOut);
    }
    // method for add rating
    addRating(rate){
       this._ratings.push(rate);
    }
    // method for average rating
    getAverageRating() {
     const sum = this._ratings.reduce((accumulator,currentvalue => {
     return accumulator + currentvalue}));
     const avg = sum / this._ratings.length;
    return avg;  
    } 
  }
  
  // create a child class Book
  
  class Book extends Media {
    constructor(title,author,pages){
      super(title);
      this._author= author;
      this._pages= pages;
    }
    // getter method for the author
    get author(){
      return this._author;
    }
    // getter method for the pages
    get pages(){
      return this._pages;
    }
  
  }
  const historyOfEverything = new Book('A Short History of Nearly Everything','Bill Bryson',544);
  // Changing status of book
  historyOfEverything.toggleCheckOutStatus();
  // adding the rating to the book
  historyOfEverything.addRating(4);
  // checking books info
  console.log(historyOfEverything);
  
  // create a child class Movies
  
  class Movie extends Media{
    constructor (title,director,runTime)
    {
     super(title);
     this._director = director;
     this._runTime = runTime;
    }
    // getter method for the director
    get director(){
      return this._director;
    }
    // getter method for the runTime
    get runTime(){
      return this._runTime;
    }
  }
  const speed = new Movie('Speed','Jan de Bont',116)
  // Changing status of movie
  speed.toggleCheckOutStatus();
  // adding the rating to the movie
  speed.addRating(3);
  // checking movie info
  console.log(speed);
  
  
  // create the child class CD
  
  class CD extends Media {
    constructor(title,artist,songs){
      super(title);
      this._artist= artist;
      this._songs= songs;
    }
    // getter method for the artist 
    get artist(){
      return this._artist;
    }
    // getter method for the songs
    get songs(){
      return this._songs;
    }
  }