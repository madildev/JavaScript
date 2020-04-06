// Declared the main team Object
let team = {
    // Created _players and _games proprety
       _players:[  // Players to the array
         {
         firstName: 'Pablo',
        lastName: 'Sanchez',
         age: 18
         } ,
         {
            firstName: 'Haider',
            lastName: 'Sultan',
            age: 19
          } ,
          {
               firstName: 'Meer',
               lastName: 'Hamza',
               age: 20
           }
       ],
       _games:[  // added games to the array
         {
         opponent: 'Broncos',
         teamPoints: 42,
         opponentPoints: 27
        } ,
        {
          opponent: 'Uet Hammers',
          teamPoints: 41,
          opponentPoints: 23
         } ,
         {
             opponent: '  Ucp Lions',
             teamPoints: 23,
             opponentPoints: 27
          }
       ] ,
       // define the getter method for _players
       get players(){  
            return this._players;
       } ,
       // define the getter method for the _games
       get games(){
           return this._games;
       } ,
       // function to add Players to the team
       addPlayer(firstName,lastName,age){
         const player={
           firstName,
           lastName,
           age
         };
         // add player to the array
         this._players.push(player);
       } ,
       // function to add games to the games array
       addGame(opponent,teamPoints,opponentPoints) {
           let game ={
               opponent,
               teamPoints,
               opponentPoints
           };
        // add game to the array
        this._games.push(game);   
       } ,
  };
  team.addPlayer('Steph','Curry', 20); // added a player to the team
  console.log(team._players);
  team.addGame('PU Hunters', 32, 21); // added a game 
  console.log(team._games);
  