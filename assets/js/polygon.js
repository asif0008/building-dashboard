// Initialize variables
let canvas;
let ctx;
let points = [];
let color = 'rgba(0,0,0,0.5)';
let isAddingText = false;

// Function to handle color selection
function handleColorSelection(event) {
    const rgbColor = window.getComputedStyle(event.target).backgroundColor;
    color = rgbColor.replace(')', ', 0.7)').replace('rgb', 'rgba');
    canvas.style.cursor = 'crosshair'; 
    canvas.style.pointerEvents = 'none';
    isAddingText = false;
}

// Function to initialize canvas
function initCanvas(image) {
    canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    canvas.style.position = 'absolute';
    canvas.style.top = image.offsetTop + 'px';
    canvas.style.left = image.offsetLeft + 'px';
    canvas.style.pointerEvents = 'none'; // Initially disable pointer events
    document.body.appendChild(canvas);

    // Event listener to add text on canvas click
    canvas.addEventListener('click', handleCanvasClick);
}

// Function to handle click on the image
function handleClick(event) {
    const x = event.pageX - canvas.offsetLeft;
    const y = event.pageY - canvas.offsetTop;

    // Check if adding text mode is active
    if (isAddingText) return;

    // Check if the click is near the starting point
    if (points.length > 0 && distanceBetweenPoints(x, y, points[0].x, points[0].y) < 10) {
        completePolygon();
        return;
    }

    points.push({ x, y });

    // Draw point
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI);
    ctx.fill();

    // Draw lines
    if (points.length > 1) {
        ctx.strokeStyle = color; // Set line color to match selected color
        ctx.beginPath();
        ctx.moveTo(points[points.length - 2].x, points[points.length - 2].y); // Start from previous point
        ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y); // Draw line to current point
        ctx.stroke();
    }
}

// Function to calculate distance between two points
function distanceBetweenPoints(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

// Function to complete the polygon
function completePolygon() {
    ctx.fillStyle = color + '80'; // Add transparency to the color
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.closePath();
    ctx.fill();

    // Clear points array for next polygon
    points = [];
}

// Function to handle adding text
function handleCanvasClick(event) {
    if (!isAddingText) return;

    const text = prompt('Enter text:');
    if (text) {
        const x = event.pageX - canvas.offsetLeft;
        const y = event.pageY - canvas.offsetTop;
        ctx.fillStyle = 'white'; // Text color
        ctx.font = '500 13px Arial'; // Font style
        ctx.fillText(text, x, y); // Change position as needed
    }
}

// Function to toggle adding text mode
function toggleAddingText() {
    isAddingText = !isAddingText;
    if (isAddingText) {
        canvas.style.cursor = 'text'; // Change cursor to text cursor
        canvas.style.pointerEvents = 'auto'; // Enable pointer events
    } else {
        canvas.style.cursor = 'crosshair'; // Change cursor to polygon cursor
        canvas.style.pointerEvents = 'none'; // Disable pointer events
    }
}

// Function to initialize app
function initializeApp() {
    const image = document.querySelector('.image-to-draw');
    initCanvas(image);
    image.addEventListener('click', handleClick);

    // Event listener for color selection
    const colorBoxes = document.querySelectorAll('.color-picker');
    colorBoxes.forEach(box => {
        box.addEventListener('click', handleColorSelection);
    });

    // Event listener for adding text
    const addTextButton = document.getElementById('addText');
    addTextButton.addEventListener('click', toggleAddingText);
}

// Initialize the app
initializeApp();
