

var goingup;
var player1move = firebase.database().ref('moves/player1/gy');
player1move.on('value', function(snapshot) {
  if(game){
    //console.log(snapshot.val())
    var y = snapshot.val();
    document.getElementById('angle').innerHTML = y;
    y = game.player.y + (5*y);
    if(y>canvas.height){y = canvas.height;}
    if(y<0){y=0;}

    updatePlayer(1,y);

  }
});

//var angle = Math.tan(snapshot.val());
//var adjacent = (canvas.height/2);
//var opposite = adjacent * angle;
//y = opposite;
