document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");
  let mouseX = 0;
  let mouseY = 0;
  let clientX = 0;
  let clientY = 0;
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  function MouseMove() {
    clientX += (mouseX - clientX) * 0.05;
    clientY += (mouseY - clientY) * 0.05;

    cursor.style.top = clientY + "px";
    cursor.style.left = clientX + "px";

    requestAnimationFrame(MouseMove);
  }
  MouseMove();

  AOS.refresh();
});
window.onload = function () {
  const loader = document.querySelector(".loader-wrapper");
  const content = document.querySelector(".page-wrpr");

  // Keep loader for 3 seconds
  setTimeout(() => {
    loader.classList.add("fade-out");

    setTimeout(() => {
      loader.style.display = "none";
      content.classList.remove("hidden");
      content.classList.add("show");
    }, 500); // wait for fade-out transition
  }, 3000);
};
