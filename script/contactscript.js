document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
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
  // Form Validation
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const email = document.getElementById("ename").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("text-area").value.trim();

    // --- Name Checks ---
    const namePattern = /^[A-Za-z]{3,}$/;
    if (!namePattern.test(fname)) {
      alert(
        "First name must be at least 3 letters and contain only alphabets."
      );
      return;
    }

    if (!namePattern.test(lname)) {
      alert("Last name must be at least 3 letters and contain only alphabets.");
      return;
    }

    // --- Email Checks ---
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{3,10}$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (email.includes(" ")) {
      alert("Email should not contain spaces.");
      return;
    }

    // --- Phone Checks ---
    const phonePattern = /^[0-9]{9}$/;
    if (!phonePattern.test(phone)) {
      alert("Phone number must be 10–15 digits and contain only numbers.");
      return;
    }

    // --- Message Checks ---
    if (message.length < 10) {
      alert("Message must be at least 10 characters long.");
      return;
    }

    // prevent spammy text like '!!!!!'
    const repeatedCharPattern = /(.)\1{4,}/; // same char repeated 5 times
    if (repeatedCharPattern.test(message)) {
      alert("Message contains too many repeated characters.");
      return;
    }

    if (!message.trim()) {
      alert("Message cannot be empty.");
      return;
    }

    alert("Form submitted successfully!");
  });
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
  }, 2000);
};
