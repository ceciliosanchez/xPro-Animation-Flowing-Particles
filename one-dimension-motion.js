var balls = [];
var numberOfBalls = 50; // Increase the number of balls
var initialBallSize = 25;
var toggledBallSize = 35;

// Generate a rainbow color based on position
function getRainbowColor(position, total) {
    var hue = Math.floor((position / total) * 360);
    return 'hsl(' + hue + ', 100%, 50%)';
}

function getRandomVelocity() {
    return (Math.random() * 4) + 2; // Random velocity between 2 and 6
}

function createBalls() {
    var container = document.getElementById('balls-container');
    for (var i = 0; i < numberOfBalls; i++) {
        var ball = document.createElement('div');
        ball.className = 'ball';
        ball.style.top = (i * window.innerHeight / numberOfBalls) + 'px'; // Evenly distribute top positions
        ball.style.left = (Math.random() * window.innerWidth) + 'px';
        ball.style.background = getRainbowColor(i, numberOfBalls); // Rainbow color based on position
        container.appendChild(ball);
        balls.push({ 
            element: ball, 
            velocityX: getRandomVelocity(), 
            positionX: parseFloat(ball.style.left), 
            directionX: Math.random() < 0.5 ? 1 : -1, // Random initial direction
            size: initialBallSize 
        });
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

    if (ball.positionX >= window.innerWidth - ball.element.offsetWidth) {
        ball.positionX = window.innerWidth - ball.element.offsetWidth; // Prevent overshooting
        ball.directionX *= -1; // Change direction
        changeBallSize(ball); // Change size
    } else if (ball.positionX <= 0) {
        ball.positionX = 0; // Prevent overshooting
        ball.directionX *= -1; // Change direction
        changeBallSize(ball); // Change size
    }
}

function animateBalls() {
    balls.forEach(moveBall);
}

createBalls();
setInterval(animateBalls, 20);
