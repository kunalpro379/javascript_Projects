const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let points = [];
let isDrawing = false;

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    points = [];
});

canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        const rect = canvas.getBoundingClientRect();
        points.push({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        drawPoints();
    }
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    const smoothedPoints = fitCurve(points, 1.0); // Adjust error tolerance as needed
    drawCurve(smoothedPoints);
});

function drawPoints() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    for (let point of points) {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
        ctx.fill();
    }
}

function drawCurve(points) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.stroke();
}
