const elements = document.querySelectorAll('.magnetic');
const magneticRange = 100;
function moveElement(event) {
const mouseX = event.clientX;
const mouseY = event.clientY;
elements.forEach(element => {
const rect = element.getBoundingClientRect();
const elementX = rect.left + rect.width / 2;
const elementY = rect.top + rect.height / 2;
const distanceX = mouseX - elementX;
const distanceY = mouseY - elementY;
const distance = Math.hypot(distanceX, distanceY);
if (distance < magneticRange) {
const attraction = (1 - distance / magneticRange) * 50;
const moveX = (distanceX / distance) * attraction;
const moveY = (distanceY / distance) * attraction;
element.style.transform = `translate(${moveX}px, ${moveY}px)`;
} else {
element.style.transform = 'translate(0, 0)';
}
});
}
document.addEventListener('mousemove', moveElement);
