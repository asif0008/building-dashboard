// fire.js

let canvas;
let ctx;
let fireIcon;

function initCanvas(image) {
    canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    canvas.style.position = 'absolute';
    canvas.style.top = image.offsetTop + 'px';
    canvas.style.left = image.offsetLeft + 'px';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);
}

function handleCanvasClick(event) {
    const x = event.pageX - canvas.offsetLeft;
    const y = event.pageY - canvas.offsetTop;
    ctx.drawImage(fireIcon, x, y, 30, 35); // Set the size to 120x120 pixels
}

function handleIconSelection() {
    // Extract SVG code from icon picker
    const svg = document.querySelector('.icon-picker svg');
    const svgString = new XMLSerializer().serializeToString(svg);
    
    // Replace fill color with #F98069
    const filledSvgString = svgString.replace(/fill="#\w+"/g, 'fill="#F98069"');
    
    // Convert SVG string to data URL
    const svgUrl = 'data:image/svg+xml;base64,' + btoa(filledSvgString);

    // Create new image element
    fireIcon = new Image();
    fireIcon.src = svgUrl;
}

function initializeApp() {
    const image = document.querySelector('.fire-to-draw');
    initCanvas(image);
    image.addEventListener('click', handleCanvasClick);
    
    // Event listener for icon
    const iconPicker = document.querySelector('.icon-picker');
    iconPicker.addEventListener('click', handleIconSelection);
}

// Initialize the app
initializeApp();
