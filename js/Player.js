var mycar = cars[player.index - 1];

class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
	this.isJumping = false;
	this.score = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
  
  
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
	  isJumping:this.isJumping,
	  score:this.score
    });
  }
  
   clockTick(){
    var clockIndex = "clock";
    database.ref(clockIndex).set({
      clock:clock+1
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  static getClockInfo(){
    var clockRef = database.ref('clock');
    playerInfoRef.on("value",(data)=>{
      clock = data.val();
    })
  }
}
