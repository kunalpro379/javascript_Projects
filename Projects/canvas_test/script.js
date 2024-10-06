const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let points = [];
let isDrawing = false;

// Handle mouse events
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    points = [];
    addPoint(e);
});

canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        addPoint(e);
    }
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    drawCurve();
});

// Add a point to the points array and redraw
function addPoint(e) {
    const rect = canvas.getBoundingClientRect();
    points.push({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    drawPoints();
}

// Draw all the points
function drawPoints() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
        ctx.fill();
    });
}

// Draw a smoothed Bezier curve
function drawCurve() {
    if (points.length < 2) return;

    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    // Fit curve function
    const smoothedPoints = fitCurve(points, 1.0); // Error tolerance

    // Draw the Bezier curve
    ctx.moveTo(smoothedPoints[0].x, smoothedPoints[0].y);
    smoothedPoints.forEach(point => {
        ctx.lineTo(point.x, point.y);
    });
    ctx.stroke();
}

// Bezier curve smoothing
function fitCurve(d, error) {
    // Dummy function for fitting Bezier curve
    // You might need a more sophisticated algorithm or library for accurate smoothing
    // For now, this function will return the original points for simplicity
    return d;
}
