const popupContainer = document.querySelector('.popup-container');
const circles = document.querySelectorAll('.circle');

let activePath = null;

circles.forEach((circle, i) => {
    circle.addEventListener('mouseover', (e) => {
        const fillColor = circle.getAttribute('fill');
        let state, color;

        if(fillColor === '#5EFF00') {
            state = 'Unoccupied';
            color = '#5EFF00'
        } else if(fillColor === '#EA0000') {
            state = 'Occupied';
            color = '#EA0000';
        }


        showPopup(e, state, color);
    });
});

const showPopup = (e, state, color) => {
    if(activePath) {
        activePath.popupContainer.style.display = 'none';
    }

    popupContainer.innerHTML = `
        <div class="relative w-[395px] popup">
        <div class="border-badge bg-cover bg-center w-[280px] py-[10px] px-[10px] rounded-ss-[20px] absolute top-[-14%] left-[-6%] text-[${color}] font-semibold text-[18px] text-center">
            ${state}
        </div>
        <div class="bg-[url('assets/images/popup-bg.png')] bg-cover border-2 border-[#8b8b8b] px-5 pt-[40px] pb-5 rounded-ee-[40px]">
            <div class="flex items-center justify-center gap-4">
                <img src="assets/images/popup-img.png" alt="popup-img" class="w-[98px]">
                <span class="bg-white w-[1px] h-[6rem]"></span>
                <div>
                    <div class="flex items-center justify-between gap-6">
                        <h3 class="text-[16px] lg:text-[18px] font-semibold text-white">Unit Status:</h3>
                        <h3 class="text-[14px] text-white">Lorem Ipsum</h3>
                    </div>
                    <div class="flex items-center justify-between gap-6">
                        <h3 class="text-[16px] lg:text-[18px] font-semibold text-white">Alarms:</h3>
                        <h3 class="text-[14px] text-white">Lorem Ipsum</h3>
                    </div>
                    <div class="flex items-center justify-between gap-6">
                        <h3 class="text-[16px] lg:text-[18px] font-semibold text-white">Command:</h3>
                        <h3 class="text-[14px] text-white">Lorem Ipsum</h3>
                    </div>
                    <div class="flex items-center justify-between gap-6">
                        <h3 class="text-[16px] lg:text-[18px] font-semibold text-white">Temperature:</h3>
                        <h3 class="text-[14px] text-white">Lorem</h3>
                    </div>
                    <div class="flex items-center justify-between gap-6">
                        <h3 class="text-[16px] lg:text-[18px] font-semibold text-white">Setpoint:</h3>
                        <h3 class="text-[14px] text-white">Lorem Ipsum</h3>
                    </div>
                    <div class="flex items-center justify-between gap-6">
                        <h3 class="text-[16px] lg:text-[18px] font-semibold text-white">Running Hour:</h3>
                        <h3 class="text-[14px] text-white">Lorem</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    popupContainer.style.left = `${e.pageX}px`;
    popupContainer.style.top = `${e.pageY}px`;

    popupContainer.style.display = 'block';

    activePath = {
        path: e.target,
        popupContainer: popupContainer
    }

    e.stopPropagation();
}

// Add click event listener to the document body to hide the popup
document.body.addEventListener("mouseover", () => hidePopup());

// Function to hide the popup
function hidePopup() {
  if (activePath) {
    activePath.popupContainer.style.display = "none";
    activePath = null;
  }
}

popupContainer.addEventListener('mouseover', (e) => {
    e.stopPropagation();

})


