var waitImg, bgimg, popimg
var playbutton, homebutton, aboutbutton;
var beetroot, brinjal, burger, carrot, corn, fries, ham, icecream, cream1, scoop, pumpkin, redfruit
var stickice, veggieburg, jump, bottle, leaf
var gameState = "wait"
var food
var ground
var score = 0
var timer = 15
var junkGroup, foodGroup
var airbg
var knife, knifeImage
var beetroot, brinjal, carrot, corn, pumpkin, leaf, redfruit
var beetrootimg, brinjalimg, carrotimg, cornimg, pumpkinimg, leafimg, redfruitimg

var bacti1, bacti2, bacti3, bacti4, bacti5, bacti6
var score2 = 0
var enemyGroup, goodGroup
var gameOver, resetbutton
var winpic, winimg
var junksound, foodsound, bacteriasound, oversound, winsound
var knowmore
var endbgimg

function preload() {
endbgimg=loadImage("endbg.jpg")
  playbgimg = loadImage("2Ct5.gif")
  logoimg = loadImage("logo.png")
  yumimg = loadImage("yummygif.gif")
  bgimg = loadImage("background.png")
  popimg = loadImage("popup.png")
  beetrootimg = loadImage("beetRoot.png")
  brinjalimg = loadImage("Brinjal.png")
  burgerimg = loadImage("Burger.png")
  carrotimg = loadImage("Carrot.png")
  cornimg = loadImage("Corn.png")

  friesimg = loadImage("frenchFries.png")
  hamimg = loadImage("hamBurger.png")
  icecreamimg = loadImage("iceCream.png")
  cream1img = loadImage("icecream1.png")
  scoopimg = loadImage("icecreamScoop.png")
  pumpkinimg = loadImage("Pumpkin.png")
  redfruitimg = loadImage("redFruit.png")
  stickiceimg = loadImage("stickIce.png")
  veggieburgimg = loadImage("veggieBurger.png")
  walk = loadAnimation("a1.png", "a2.png", "a3.png", "a4.png", "a5.png", "a6.png")
  jumpimg = loadAnimation("jump.png", "jump.png", "jump.png", "jump.png","jump.png", "jump.png", "jump.png", "jump.png")
  bottleimg = loadImage("bottle.png")
  leafimg = loadImage("leaf.png")
  font = loadFont("fontsG/myfont.ttf")
  winimg = loadImage("winner.png")

  knifeImage = loadImage("knife.png")
  beetrootimg = loadImage("beetRoot.png")
  brinjalimg = loadImage("Brinjal.png")
  carrotimg = loadImage("Carrot.png")
  cornimg = loadImage("Corn.png")
  pumpkinimg = loadImage("Pumpkin.png")
  redfruitimg = loadImage("redFruit.png")
  leafimg = loadImage("leaf.png")
  airbg = loadImage("airbg.jpeg")
  bacti1 = loadImage("bacti1.png")
  bacti2 = loadImage("bacti2.png")
  bacti3 = loadImage("bacti3.png")
  bacti4 = loadImage("bacti4.png")
  bacti5 = loadImage("bacti5.png")
  bacti6 = loadImage("bacti6.png")
  gameOver = loadImage("gameOver.gif")
  resetImage = loadImage("reset.png")
  junksound = loadSound("junk.mp3")
  foodsound = loadSound("foodsound.mp3")
  bacteriasound = loadSound("bacteriasound.mp3")
  oversound = loadSound("gameover.mp3")
  winsound = loadSound("win.mp3")
  knifesound = loadSound("knifesound.mp3")

  gamesound = loadSound("gamesound.mp3")
  introsound= loadSound("intro.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  textFont(font)

  winpic = createSprite(windowWidth / 2, windowHeight / 2)
  winpic.addImage(winimg)
  winpic.visible = false
  winpic.scale = 1.5

  logo = createSprite(windowWidth / 2, windowHeight / 2)
  logo.addImage(logoimg)
  logo.scale = 1.4
  logo.visible = false

  yum = createSprite(windowWidth / 2, windowHeight / 2)
  yum.addImage(yumimg)
  yum.visible = false
  //used dom library to create image buttons   p5.dom.min.js

  home = createImg("homeButton.png")
  home.position(80, 80)
  home.size(100, 100)

  playbutton = createImg("playButton.png");
  playbutton.position(80, 180);
  playbutton.size(100, 100)

  about = createImg("aboutButton.png");
  about.position(80, 280)
  about.size(100, 100)

  knowmore = createImg("know.png")
  knowmore.position(75, 380)
  knowmore.size(100, 100)
  knowmore.hide()

  resetbutton = createImg("reset.png")
  resetbutton.position(80, 380)
  resetbutton.size(100, 100)
  resetbutton.hide()

  popbox = createSprite(windowWidth / 2, windowHeight / 2)
  popbox.addImage(popimg)
  popbox.visible = false
  popbox.scale = 1.63

  player = createSprite(100, windowHeight - 150)
  player.addAnimation("walking", walk)
  player.addAnimation("jumping", jumpimg)
  player.visible = false


  knife = createSprite(40, 200, 30, 30)
  knife.addImage(knifeImage)
  //knife.scale = 0.7
  knife.visible = false

  player.debug = false
  player.setCollider("circle", 0, 0, player.width / 2)

  goodGroup = new Group()
  enemyGroup = new Group()

  ground = createSprite(windowWidth / 2, windowHeight - 120, windowWidth, 60);
  ground.visible = false

  junkGroup = new Group()
  foodGroup = new Group()

}


function draw() {
  player.collide(ground)
  if (home.mousePressed(() => {
    gameState = "wait"
    introsound.loop()
  }))

    if (gameState === "wait") {
      background(bgimg)
      popbox.visible = false
      player.visible = false
      logo.visible = true
      playbutton.show()
      resetbutton.hide()
      home.show()
      about.show()
      yum.visible = false
      winpic.visible = false
      knife.visible = false
      knowmore.show()
      


    }

  if (about.mousePressed(() => {
    gameState = "about"
    gamesound.pause()
    introsound.loop()


  }))

    if (gameState === "about") {
      popbox.visible = true
      player.visible = false
      logo.visible = false
      playbutton.show()
      yum.visible = false


    }
  if (knowmore.mousePressed(() => {
    gameState = "know"
    introsound.loop()

  }))

    if (gameState === "know") {
      popbox.visible = true
      player.visible = false
      logo.visible = false
      about.visible = false
      playbutton.show()
      yum.visible = false


    }


  if (playbutton.mousePressed(() => {
    gameState = "Level 1"
    gamesound.loop()
    introsound.stop()

  }))
 

    if (gameState === "Level 1") {
      popbox.visible = false
      logo.visible = false
      player.visible = true
      knowmore.hide()

      playbutton.hide()
      home.hide()
      about.hide()
      resetbutton.hide()
      background(playbgimg)
      //player.addAnimation("walking", walk)
      player.visible = true
      //yum.visible = false

      spawnhealthyfood()
      spawnjunkfood()
      for (var i = 0; i < foodGroup.length; i++) {
        if (player.isTouching(foodGroup.get(i)) && gameState === "Level 1") {
          foodGroup.get(i).destroy();
          score = score + 1;

          for (i = 0; i < 50; i++) {
            yum.visible = true
            foodsound.play()
          }

        }


      }

      for (var i = 0; i < junkGroup.length; i++) {
        if (player.isTouching(junkGroup.get(i))) {
          junkGroup.get(i).destroy();
          gameState = "Pause"
          score = score - 2;
          yum.visible = false
          junksound.play()

        }
      }

      if (score <= -6) {
        gameState = "end"
        foodGroup.destroyEach()
        player.visible = false
        junkGroup.destroyEach()
        yum.visible = false
        introsound.stop()


      }

      if (score >= 8) {
        gameState = "Level 2"
        knife.visible = true
        player.visible = false
        yum.visible = false
        introsound.stop()

      }


      if (keyDown("UP_ARROW") && player.y >= windowHeight - 250) {
        player.velocityY = -19
        player.changeAnimation("jumping", jumpimg)
        player.scale = 2
      }
      else{ player.changeAnimation("walking", walk)
    player.scale=1}
      player.velocityY += 0.8
    }


  if (gameState === "Pause") {
    background(playbgimg)
    foodGroup.destroyEach()
    popbox.visible = false
    logo.visible = false
    playbutton.hide()
    home.hide()
    about.hide()
    // player.Pause()
    //resetbutton.show()
    // playbgimg.Pause()
    introsound.pause()

    textSize(50)
    fill(0)
    stroke("white")
    strokeWeight(3)
    text("OH NO!", windowWidth /2, windowHeight / 3)
    text("It's taking time to digest", windowWidth / 2.6, windowHeight / 2)
    text("Digestion Time Left : " + timer, 100, 100)

    if (World.frameCount % 10 === 0) {
      timer = timer - 1;
    }

    if (timer === 0) {
      gameState = "Level 1";
      timer = 15;
    }
  }



  /*if (gameState === "reset"){
    player.changeAnimation("walking",walk)
    gameState = "Level 1"
  }*/


  if (gameState === "Level 2") {
    background(airbg)
    player.visible = false
    foodGroup.destroyEach()
    junkGroup.destroyEach()
    knife.visible = true
    spawnBacti()
    spawnFood()
    knife.x = mouseX
    knife.y = mouseY
    knowmore.hide()
    winimg.visible=false


    for (i = 0; i < goodGroup.length; i++)
      if (goodGroup.get(i).isTouching(knife)) {
        goodGroup.get(i).destroy()
        score2 = score2 + 1
        knifesound.play()
      }
      else {
        for (a = 0; a < enemyGroup.length; a++) {
          if (enemyGroup.get(a).isTouching(knife)) {
            enemyGroup.get(a).destroy()
            gameState = "end"
            bacteriasound.play()
          }
        }
      }
    if (score2 >= 15) {
      background(endbgimg)
      player.visible = false
      goodGroup.destroyEach()
      enemyGroup.destroyEach()
      resetbutton.show()
      winpic.visible = true
      knife.visible = false
gamesound.pause()    }

  }

  if (gameState === "end") {
    resetbutton.show()
    knowmore.hide()
gamesound.pause()
    background(gameOver)
    goodGroup.destroyEach();
    enemyGroup.destroyEach();

    knife.visible = false
    enemyGroup.setVelocityXEach(0);
    goodGroup.setVelocityXEach(0);


    goodGroup.destroyEach()
    enemyGroup.destroyEach()
    knife.visible = false
    player.visible = false



  }

  if (resetbutton.mousePressed(() => {
    resetgame()
    gamesound.pause()
    introsound.pause()

  }))


  
    drawSprites()


  if (gameState === "Level 1" || gameState === "Level 2" || gameState === "Pause") {
    textSize(50)
    fill("black")
    stroke("white")
    strokeWeight(5)
    text(gameState, windowWidth / 2 - 50, 57);
  }

  if (gameState === "Level 2") {
    textSize(50)
    fill("black")
    stroke("white")
    strokeWeight(5)
    text("Score : " + score2, windowWidth - 230, 70);
  }



  if (gameState === "about") {
    textSize(35)
    stroke("red")
    strokeWeight(2)
    fill("yellow")
    text(" Hey There!", (popbox.x - (popbox.width/5)), 50)
    text("\n  The Game Is About Healthy Eating Habits.", (popbox.x- (popbox.width/1.3))+30, 60)
    text("\n\n Level 1", (popbox.x- (popbox.width/7))+30, 62)
    text("\n\n1) The player jumps if you press the Up \n  Arrow Key.", (popbox.x- (popbox.width/1.36))+30, 100)
    text("\n\n\n2) Try your best to make the player eat \n the healthy food rather than the junk.", (popbox.x- (popbox.width/1.4))+30, 150)
    text("\n\n\nLevel 2", (popbox.x- (popbox.width/7))+30, 245)
    text("\n\n  You have the power to control the player \n    with the help of your mouse. Try your \n    best not to touch the bacteria. \n         Your health is your real wealth.", (popbox.x- (popbox.width/1.36))+30, 330)
  }


  if (gameState === "know") {
    textSize(32)
    stroke("red")
    strokeWeight(2)
    fill("yellow")
    text("FACTS !!!",(popbox.x-(popbox.width/6)), 50)
    text("\n  1) Processed food is designed to get you addicted.",(popbox.x-(popbox.width/1.3))+30, 55)
    text("\n\n  2) There are insect secretions in your candy.",(popbox.x-(popbox.width/1.3))+30, 60)
    text("\n\n\n  3) Natural Flavors aren't really that natural.",(popbox.x-(popbox.width/1.3))+30, 65) 
    text("\n\n\n\n   4) Pizza Hut uses over 300 million pounds of\n      cheese per year.",(popbox.x-(popbox.width/1.3))+30, 70)  
    text("\n\n\n\n\n\n    5) Cancer-causing chemicals keep your meat\n       looking wonderful.",(popbox.x-(popbox.width/1.3))+30, 75) 
    text("\n\n\n\n\n\n\n\n     6) Junk Foods can cause memory and \n         learning problems.",(popbox.x-(popbox.width/1.3))+30, 80)   
    text("\n\n\n\n\n\n\n\n\n\n       7) The high fat content in the ice cream\n         actually warms up the body.",(popbox.x-(popbox.width/1.3))+30, 85)           
    
  }

  if (gameState === "Level 1" || gameState === "Pause") {
    textSize(50)
    fill("black")
    stroke("white")
    strokeWeight(5)
    text("Score : " + score, windowWidth - 230, 70)
  }
}



function resetgame() {

  gameState = "wait"
  score = 0
  score2=0
  winpic.visible = false

  // timer = 0

}

function spawnhealthyfood() {

  if (frameCount % 200 === 0) {

    food = createSprite(windowWidth, windowHeight - 250)
    food.y = Math.round(random(windowHeight - 250, 90))
    food.velocityX = -3
    food.scale = 0.4
    var rand1 = Math.round(random(1, 7))
    player.depth = food.depth + 1
    food.debug = false
    food.setCollider("circle", 0, 0, 50)

    switch (rand1) {

      case 1: food.addImage(beetrootimg);
        break;
      case 2: food.addImage(brinjalimg);
        break;
      case 3: food.addImage(carrotimg);
        break;
      case 4: food.addImage(cornimg);
        break;
      case 5: food.addImage(pumpkinimg);
        break;
      case 6: food.addImage(redfruitimg);
        break;
      case 7: food.addImage(leafimg);
        break;

      default: break;
    }
    foodGroup.add(food)

  }
}

function spawnjunkfood() {

  if (frameCount % 180 === 0) {

    junk = createSprite(windowWidth, windowHeight - 250)
    junk.y = Math.round(random(windowHeight - 250, 90))
    junk.velocityX = -3
    junk.scale = 0.65
    var rand = Math.round(random(1, 9))
    player.depth = junk.depth + 1
    junk.debug = false
    junk.setCollider("circle", 0, 0, 40)

    switch (rand) {

      case 1: junk.addImage(burgerimg);
        break;
      case 2: junk.addImage(friesimg);
      junk.scale=0.35
        break;
      case 3: junk.addImage(hamimg);
        break;
      case 4: junk.addImage(icecreamimg);
        break;
      case 5: junk.addImage(cream1img);
        break;
      case 6: junk.addImage(scoopimg);
        break;
      case 7: junk.addImage(stickiceimg);
        break;
      case 8: junk.addImage(veggieburgimg);
        break;
      case 9: junk.addImage(bottleimg);
        break;

      default: break;
    }
    junkGroup.add(junk)
  }
}

function spawnBacti() {

  if (frameCount % 180 === 0) {

    bacti = createSprite(windowWidth, windowHeight - 250)
    bacti.y = Math.round(random(windowHeight - 250, 90))
    bacti.velocityX = -17
    bacti.scale = 0.8
    bacti.setLifetime = 50
    var rand2 = Math.round(random(1, 6))
    knife.depth = bacti.depth + 1

    switch (rand2) {

      case 1: bacti.addImage(bacti1);
        break;
      case 2: bacti.addImage(bacti2);
        break;
      case 3: bacti.addImage(bacti3);
        break;
      case 4: bacti.addImage(bacti4);
        break;
      case 5: bacti.addImage(bacti5);
        break;
      case 6: bacti.addImage(bacti6);
        break;


      default: break;
    }
    enemyGroup.add(bacti)
  }
}

function spawnFood() {

  if (frameCount % 100 === 0) {

    food1 = createSprite(windowWidth, windowHeight - 250)
    food1.y = Math.round(random(windowHeight - 250, 90))
    food1.velocityX = -10
    food1.scale = 0.35
    //time = distance/speed
    food1.setLifetime = (windowWidth / food1.velocityX)
    var rand1 = Math.round(random(1, 7))
    knife.depth = food1.depth + 1

    switch (rand1) {

      case 1: food1.addImage(beetrootimg);
        break;
      case 2: food1.addImage(brinjalimg);
        break;
      case 3: food1.addImage(carrotimg);
        break;
      case 4: food1.addImage(cornimg);
        break;
      case 5: food1.addImage(pumpkinimg);
        break;
      case 6: food1.addImage(redfruitimg);
        break;
      case 7: food1.addImage(leafimg);
        break;

      default: break;
    }
    goodGroup.add(food1)
  }
}
