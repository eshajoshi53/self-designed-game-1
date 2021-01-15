var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["59511ede-163f-4aae-964c-ae5ade04c17a","078f576d-1aa4-470f-af73-c34107dbdb6a","8356ca13-f631-4cce-a733-cb5dc21d2ab8"],"propsByKey":{"59511ede-163f-4aae-964c-ae5ade04c17a":{"name":"soccer_bw_1","categories":["sports"],"frameCount":1,"frameSize":{"x":393,"y":394},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:36:33 UTC","pngLastModified":"2021-01-05 19:36:30 UTC","version":"KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG","sourceUrl":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png","sourceSize":{"x":393,"y":394},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png"},"078f576d-1aa4-470f-af73-c34107dbdb6a":{"name":"pupilportrait_03_1","categories":["faces"],"frameCount":1,"frameSize":{"x":282,"y":399},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:03:40 UTC","pngLastModified":"2021-01-05 19:03:39 UTC","version":"FW0CI4iuqpnTrc1d6kSj3miix6MgU7I6","sourceUrl":"assets/api/v1/animation-library/gamelab/FW0CI4iuqpnTrc1d6kSj3miix6MgU7I6/category_faces/pupilportrait_03.png","sourceSize":{"x":282,"y":399},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/FW0CI4iuqpnTrc1d6kSj3miix6MgU7I6/category_faces/pupilportrait_03.png"},"8356ca13-f631-4cce-a733-cb5dc21d2ab8":{"name":"kidportrait_07_1","categories":["faces"],"frameCount":1,"frameSize":{"x":264,"y":370},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:03:18 UTC","pngLastModified":"2021-01-05 19:03:20 UTC","version":"DK8.stYcZlziAImCg36Fa7yHu1S4LUhW","sourceUrl":"assets/api/v1/animation-library/gamelab/DK8.stYcZlziAImCg36Fa7yHu1S4LUhW/category_faces/kidportrait_07.png","sourceSize":{"x":264,"y":370},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/DK8.stYcZlziAImCg36Fa7yHu1S4LUhW/category_faces/kidportrait_07.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var g1 = createSprite(200, 28, 100, 20);
g1.shapeColor = "white";
var g2 = createSprite(200, 372, 100, 20);
g2.shapeColor = "white";
var ball = createSprite(200, 200, 10, 10);
ball.shapeColor = "white";
ball.setAnimation("soccer_bw_1");
ball.scale = 0.05;
var playerMallet = createSprite(200, 20, 50, 10);
playerMallet.setAnimation("kidportrait_07_1");
playerMallet.scale = 0.1;
var computerMallet = createSprite(200, 350, 50, 10);
computerMallet.setAnimation("pupilportrait_03_1");
computerMallet.scale = 0.1;
function draw() {
  background("green");
  if (keyDown("left")) {
    playerMallet.x=playerMallet.x-2;
  }
  if (keyDown("up")) {
    if (playerMallet.y>25) {
      playerMallet.y=playerMallet.y-10;
    }
  }
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
