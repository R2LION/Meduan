// SCROLL ANIMATION
const elements = document.querySelectorAll(".fade-up");

const showOnScroll = () => {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", showOnScroll);
showOnScroll();


// SLIDER BEFORE / AFTER
const sliders = document.querySelectorAll(".slider");

sliders.forEach(slider => {
  const handle = slider.querySelector(".handle");
  const after = slider.querySelector(".after");

  let down = false;

  const move = (x) => {
    const rect = slider.getBoundingClientRect();
    let pos = x - rect.left;

    pos = Math.max(0, Math.min(pos, rect.width));

    after.style.width = pos + "px";
    handle.style.left = pos + "px";
  };

  handle.addEventListener("mousedown", () => down = true);
  window.addEventListener("mouseup", () => down = false);

  window.addEventListener("mousemove", (e) => {
    if (!down) return;
    move(e.clientX);
  });

  // TOUCH
  handle.addEventListener("touchstart", () => down = true);
  window.addEventListener("touchend", () => down = false);

  window.addEventListener("touchmove", (e) => {
    if (!down) return;
    move(e.touches[0].clientX);
  });
});