document.addEventListener('DOMContentLoaded', function () {
    const resizable = function (resizer) {
        const direction = resizer.getAttribute('data-direction') || 'horizontal';
        const prevSibling = resizer.previousElementSibling;
        const nextSibling = resizer.nextElementSibling;

        // The current position of mouse
        let x = 0;
        let y = 0;
        let prevSiblingHeight = 0;
        let prevSiblingWidth = 0;

        // Handle the mousedown event
        // that's triggered when user drags the resizer
        const mouseDownHandler = function (e) {
            // Get the current mouse position
            x = e.clientX;
            y = e.clientY;
            const rect = prevSibling.getBoundingClientRect();
            prevSiblingHeight = rect.height;
            prevSiblingWidth = rect.width;

            // Attach the listeners to document
            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        };

        const mouseMoveHandler = function (e) {
            // How far the mouse has been moved
            const dx = e.clientX - x;
            const dy = e.clientY - y;

            switch (direction) {
                case 'vertical':
                    const h =
                        ((prevSiblingHeight + dy) * 100) /
                        resizer.parentNode.getBoundingClientRect().height;
                    prevSibling.style.height = h + '%';
                    break;
                case 'horizontal':
                default:
                    const w =
                        ((prevSiblingWidth + dx) * 100) / resizer.parentNode.getBoundingClientRect().width;
                    prevSibling.style.width = w + '%';
                    break;
            }

            const cursor = direction === 'horizontal' ? 'col-resize' : 'row-resize';
            resizer.style.cursor = cursor;
            document.body.style.cursor = cursor;

            prevSibling.style.userSelect = 'none';
            prevSibling.style.pointerEvents = 'none';

            nextSibling.style.userSelect = 'none';
            nextSibling.style.pointerEvents = 'none';
        };

        const mouseUpHandler = function () {
            resizer.style.removeProperty('cursor');
            document.body.style.removeProperty('cursor');

            prevSibling.style.removeProperty('user-select');
            prevSibling.style.removeProperty('pointer-events');

            nextSibling.style.removeProperty('user-select');
            nextSibling.style.removeProperty('pointer-events');

            // Remove the handlers of mousemove and mouseup
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        };

        // Attach the handler
        resizer.addEventListener('mousedown', mouseDownHandler);
    };

    // Query all resizers
    document.querySelectorAll('.resizer').forEach(function (ele) {
        resizable(ele);
    });

    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');
    const drawingBoard = document.querySelector('.drawing-board');
    const canvas = document.querySelector('canvas');
    const toolBtns = document.querySelectorAll('.tool');
    const fillColor = document.querySelector('#fill-color');
    const sizeSlider = document.querySelector('#size-slider');
    const colorsBtns = document.querySelectorAll('.colors .option');
    const colorPicker = document.querySelector('#color-picker');
    const clearCanvasBtn = document.querySelector('.clear-canvas');
    const saveImgBtn = document.querySelector('.save-img');
    const ctx = canvas.getContext('2d');

    let prevMouseX, prevMouseY, snapshot, isDrawing = false,
        selectedTool = "brush",
        brushWidth = 8,
        selectedColor = "#000";

    const setCanvasBackground = () => {
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = selectedColor;
    };

    window.addEventListener("load", () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        setCanvasBackground();
    });

    const drawRect = (e) => {
        if (!fillColor.checked) {
            return ctx.strokeRect(prevMouseX, prevMouseY, e.offsetX - prevMouseX, e.offsetY - prevMouseY);
        }
        ctx.fillRect(prevMouseX, prevMouseY, e.offsetX - prevMouseX, e.offsetY - prevMouseY);
    };

    const drawCircle = (e) => {
        ctx.beginPath();
        let radius = Math.sqrt(Math.pow((prevMouseX - e.offsetX), 2) + Math.pow((prevMouseY - e.offsetY), 2));
        ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI);
        fillColor.checked ? ctx.fill() : ctx.stroke();
    };

    const drawTriangle = (e) => {
        ctx.beginPath();
        ctx.moveTo(prevMouseX, prevMouseY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY);
        ctx.closePath();
        fillColor.checked ? ctx.fill() : ctx.stroke();
    };

    const startDraw = (e) => {
        isDrawing = true;
        prevMouseX = e.offsetX;
        prevMouseY = e.offsetY;
        ctx.beginPath();
        ctx.lineWidth = brushWidth;
        ctx.strokeStyle = selectedColor;
        ctx.fillStyle = selectedColor;
        snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
    };

    const drawing = (e) => {
        if (!isDrawing) return;
        ctx.putImageData(snapshot, 0, 0);

        if (selectedTool === "brush" || selectedTool === "eraser") {
            ctx.strokeStyle = selectedTool === "eraser" ? "#fff" : selectedColor;
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
        } else if (selectedTool === "rectangle") {
            drawRect(e);
        } else if (selectedTool === "circle") {
            drawCircle(e);
        } else if (selectedTool === "triangle") {
            drawTriangle(e);
        }
    };

    toolBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.options .selected').classList.remove('selected');
            btn.classList.add('selected');
            selectedTool = btn.id;
        });
    });

    sizeSlider.addEventListener('change', () => brushWidth = sizeSlider.value);

    colorsBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.colors .selected').classList.remove('selected');
            btn.classList.add('selected');
            selectedColor = window.getComputedStyle(btn).getPropertyValue('background-color');
        });
    });

    colorPicker.addEventListener('change', () => {
        colorPicker.parentElement.style.backgroundColor = colorPicker.value;
        colorPicker.parentElement.click();
    });

    clearCanvasBtn.addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setCanvasBackground();
    });

    saveImgBtn.addEventListener('click', () => {
        const link = document.createElement('a');
        link.download = `sketch_${Date.now()}.png`;
        link.href = canvas.toDataURL();
        link.click();
    });

    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mousemove', drawing);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseleave', () => isDrawing = false);

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('active');
        if (menu.classList.contains('active')) {
            drawingBoard.style.marginLeft = '320px';
        } else {
            drawingBoard.style.marginLeft = '20px';
        }
    });
});