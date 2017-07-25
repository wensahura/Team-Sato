var snake = new Snake();
var food = new Food();
var scl = 10;
var HEIGHT = 400;
var WIDTH = 600;

function setup() {
    createCanvas(WIDTH, HEIGHT);
    frameRate(10);
}

function draw() {
    background(51);
    snake.update();
    food.show();
    snake.display();
}

function Food() {
    this.x = 0;
    this.y = 0;
    this.show = function() {
        // noStroke();
        fill(255, 159, 25);
        rect(this.x, this.y, scl, scl);
    };
    this.changePosition = function() {
        this.x = Math.floor(random(0, WIDTH/scl)) * scl;
        this.y = Math.floor(random(0, HEIGHT/scl)) * scl;
    };
}

function Snake() {
    this.tail = [];
    this.x = 0;
    this.y = 0;
    this.direction = "RIGHT";
    this.update = function() {
        if(this.direction === "RIGHT") {
            this.x = this.x + scl;
        } else if(this.direction === "LEFT") {
            this.x = this.x - scl;
        } else if(this.direction === "UP") {
            this.y = this.y - scl;
        } else {
            this.y = this.y + scl;
        }

        if(this.x >= WIDTH) {
            this.x = 0;
        }
        if(this.x < 0) {
            this.x = WIDTH;
        }
        if(this.y >= HEIGHT) {
            this.y = 0;
        }
        if(this.y < 0) {
            this.y = HEIGHT;
        }

        if(this.x === food.x && this.y === food.y) {
            this.eat();
        }

        for(var i=this.tail.length-1; i>=1; i--) {
            this.tail[i] = this.tail[i-1];
        }

        this.tail[0] = [this.x, this.y];

    };

    this.eat = function() {
        food.changePosition();
        this.tail.push([this.x, this.y]);
    };

    this.display = function() {
        fill(255, 255, 255);
        // rect(this.x, this.y, scl, scl);
        for(var i=0; i<this.tail.length; i++) {
            rect(this.tail[i][0],this.tail[i][1], scl, scl);
        }
    };
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.direction = "UP";
  } else if (keyCode === DOWN_ARROW) {
    snake.direction = "DOWN";
  } else if (keyCode === RIGHT_ARROW) {
    snake.direction = "RIGHT";
  } else if (keyCode === LEFT_ARROW) {
    snake.direction = "LEFT";
  }
}
