$(document).ready(function(){
  var pacman = {y:2, x:9, direction:'right'};
  var map = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  ];

  function displayWorld(){
    $('#screen').html('');
    for (var y = 0; y < map.length; y++){
      for (var x = 0; x < map[y].length; x++) {
        if (map[y][x] == 0){
          $('#screen').append('<div class="zero"></div>');
        }
        if (map[y][x] == 1){
          $('#screen').append('<div class="one"></div>');
        }
        if (map[y][x] == 2){
          $('#screen').append('<div class="'+pacman.direction+'"></div>');
        }
      }
    }
  }

  displayWorld();

  $(document).keydown(function(e){
    if (e.keyCode == 37){
      pacman.direction = 'left';
      if (map[pacman.y][pacman.x-1] != 1){
        map[pacman.y][pacman.x] = 0;
        pacman.x-=1;
        map[pacman.y][pacman.x] = 2;
      }
    }
    if (e.keyCode == 39){
      pacman.direction = 'right';
      if (map[pacman.y][pacman.x+1] != 1){
        map[pacman.y][pacman.x] = 0;
        pacman.x+=1;
        map[pacman.y][pacman.x] = 2;
      }
    }
    if (e.keyCode == 38){
      pacman.direction = 'up';
      if (map[pacman.y-1][pacman.x] != 1){
        map[pacman.y][pacman.x] = 0;
        pacman.y-=1;
        map[pacman.y][pacman.x] = 2;
      }
    }
    if (e.keyCode == 40){
      pacman.direction = 'down';
      if (map[pacman.y+1][pacman.x] != 1){
        map[pacman.y][pacman.x] = 0;
        pacman.y+=1;
        map[pacman.y][pacman.x] = 2;
      }
    }

    displayWorld();
  })

})
