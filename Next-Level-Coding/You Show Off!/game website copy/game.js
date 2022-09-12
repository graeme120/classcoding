$(document).ready(function () {
  $("#scrap1").click(function () {
    $("#paper2").show();
    $("#scrap2").show();
    $("#scrap1").hide();
  });
  $("#scrap2").click(function () {
    $("#paper3").show();
    $("#scrap3").show();
    $("#scrap2").hide();
  });
  $("#scrap3").click(function () {
    $("#paper4").show();
    $("#scrap4").show();
    $("#scrap3").hide();
  });
  $("#scrap4").click(function () {
    $("#paper5").show();
    $("#scrap5").show();
    $("#scrap4").hide();
  });
  $("#scrap5").click(function () {
    $("#paper6").show();
    $("#scrap6").show();
    $("#scrap5").hide();
  });
  $("#scrap6").click(function () {
    $("#paper7").show();
    $("#scrap6").hide();
  });
  $("#paper7").click(function () {
    $("#fullpaper").show();
    $("#paper7").hide();
    $("#paper6").hide();
    $("#paper5").hide();
    $("#paper4").hide();
    $("#paper3").hide();
    $("#paper2").hide();
    $("#paper1").hide();
  });

  var character = document.querySelector(".character");
  var map = document.querySelector(".map");

  //start in the middle of the map
  var x = 90;
  var y = 34;
  var held_directions = []; //State of which arrow keys we are holding down
  var speed = 0.9; //How fast the character moves in pixels per frame

  const placeCharacter = () => {
    var pixelSize = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--pixel-size"
      )
    );

    const held_direction = held_directions[0];
    if (held_direction) {
      if (held_direction === directions.right) {
        x += speed;
      }
      if (held_direction === directions.left) {
        x -= speed;
      }
      if (held_direction === directions.down) {
        y += speed;
      }
      if (held_direction === directions.up) {
        y -= speed;
      }
      character.setAttribute("facing", held_direction);
    }
    character.setAttribute("walking", held_direction ? "true" : "false");

    //  var camera_left = pixelSize * 66;
    //  var camera_top = pixelSize * 42;

    character.style.transform = `translate3d( ${x * pixelSize}px, ${
      y * pixelSize
    }px, 0 )`;
  };

  //Set up the game loop
  const step = () => {
    placeCharacter();
    window.requestAnimationFrame(() => {
      step();
    });
  };
  step(); //kick off the first step!

  /* Direction key state */
  const directions = {
    up: "up",
    down: "down",
    left: "left",
    right: "right",
  };
  const keys = {
    38: directions.up,
    37: directions.left,
    39: directions.right,
    40: directions.down,
  };
  document.addEventListener("keydown", (e) => {
    var dir = keys[e.which];
    if (dir && held_directions.indexOf(dir) === -1) {
      held_directions.unshift(dir);
    }
  });

  document.addEventListener("keyup", (e) => {
    var dir = keys[e.which];
    var index = held_directions.indexOf(dir);
    if (index > -1) {
      held_directions.splice(index, 1);
    }
  });

  let modifier = 50;

  window.addEventListener("keydown", (event) => {
    const { style } = block;
    switch (event.key) {
      case "ArrowUp":
        style.top = `${parseInt(style.top) - modifier}px`;
        break;
      case "ArrowDown":
        style.top = `${parseInt(style.top) - modifier}px`;
        break;
      case "ArrowLeft":
        style.left = `${parseInt(style.top) - modifier}px`;
        break;
      case "ArrowRight":
        style.left = `${parseInt(style.top) - modifier}px`;
        break;
    }
  });

  function boxCollision(object1, object2) {
    if (
      object1.x + object1.width >= object2.x &&
      object1.x <= object2.x + object2.width &&
      object1.y + object1.height >= object2.y &&
      object1.y <= object2.y + object2.height
    )
      return true;
  }
});
