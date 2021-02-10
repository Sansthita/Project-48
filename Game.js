class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();

    }
    back = createSprite(800, 100, 2000, 800);
    back.addImage(b_image);
    back.velocityX = -4;
    back.scale = 4;
    player = createSprite(200, 600, 100, 100);
    player.setCollider('circle', 0, 0, 100);
  player.addAnimation("player_image",player_img);
  player.scale = 1.5;
drawSprites();
   
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    //player.getcarsEnd();
    
  

  if (back.x<0){
    back.x = 800;
  }
  
if (player.x<0 || player.x>400 ){
 edges=createEdgeSprites();
 player.bounceOff(edges) ;

}

    
    if(allPlayers !== undefined){
      
      for(var plr in allPlayers){
       var index = 1;
       
        if (index === player.index){
          if (keyDown("left")){
            player.x = player.x - 10;
          }
          if (keyDown("right")){
            player.x = player.x + 10;
          }
          
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }
    if (player.isTouching(droppingGroup)){
      player.velocityX = 0;
      textSize(50);
      stroke("yellow");
      strokeWeight(5);
      text("GameOver", 800, 400);

      crow.velocityX = 0;
      tree.velocityX = 0;
      back.velocityX = 0;
      player.destroy();
      tree.destroy();
      crowGroup.destroyEach();
      droppingGroup.destroyEach();
      treeGroup.destroyEach();
      stop(all);
    }
    
   
    
    drawSprites();
  }

  end(){
    
  }
}
