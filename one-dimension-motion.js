var balls = [];
var numberOfBalls = 7; // Add more balls
var initialBallSize = 25;
var toggledBallSize = 35;
var colors = [
  'rgb(241, 60, 15)',  // Ball 1
  'rgb(248, 151, 33)', // Ball 2
  'rgb(250, 234, 52)', // Ball 3
  'rgb(190, 247, 144)',// Ball 4
  'rgb(39, 210, 45)',  // Ball 5
  'rgb(41, 183, 254)', // Ball 6
  'rgb(154, 86, 232)', // Ball 7 
];
var velocities = [3, 3.5, 4, 4.5, 5, 5.5, 6]; // Different speeds for each ball

function createBalls() {
    var container = document.getElementById('balls-container');
    for (var i = 0; i < numberOfBalls; i++) {
        var ball = document.createElement('div');
        ball.className = 'ball';
        ball.style.top = (i * 50) + 'px';
        ball.style.left = '0px';
        ball.style.background = colors[i % colors.length]; // Assign a rainbow color
        container.appendChild(ball);
        balls.push({ element: ball, velocityX: velocities[i % velocities.length], positionX: 0, directionX: 1, size: initialBallSize });
    }
}

function changeBallSize(ball) {
    var newSize = ball.size === initialBallSize ? toggledBallSize : initialBallSize; // Toggle size between 25px and 35px
    ball.element.style.width = newSize + 'px';
    ball.element.style.height = newSize + 'px';
    ball.size = newSize;
}

function moveBall(ball) {
    ball.positionX += ball.velocityX * ball.directionX;
    ball.element.style.left = ball.positionX + 'px';

    if (ball.positionX >= window.innerWidth - ball.element.offsetWidth || ball.positionX <= 0) {
        ball.directionX *= -1; // Change direction when hitting the edge
        changeBallSize(ball); // Change size when hitting the edge
    }
}

function animateBalls() {
    balls.forEach(moveBall);
}

createBalls();
setInterval(animateBalls, 20);
