/*=============== SHOW MENU ===============*/


/*=============== REMOVE MENU MOBILE ===============*/


/*=============== ATROPOS JS ===============*/


/*=============== ADD SHADOW HEADER ===============*/


/** RIP */
function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRIP() {
    const viewHeight = window.innerHeight;
    const viewWidth = window.innerWidth;
    
    const randomX = randomValue(-1000, viewWidth);
    const randomY = randomValue(-1000, viewHeight);
    const randomRotate = randomValue(0, 360);
    const randomZoom = Math.random();
    const randomImage = randomValue(1, 10)
    const ripTag = `
    <div style="position: absolute; left: ${randomX}px; right: ${randomY}px; transform: scale(${randomZoom}) rotate(${randomRotate}deg);">
        <img src="assets/img/rip${randomImage}.jpg" alt="RIP" />
    </div>
    `
    const bodyTag = document.querySelector('body')
    bodyTag.innerHTML += ripTag
}

setInterval(() => generateRIP(), 100)