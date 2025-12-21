function copyEmail() {
  const part1 = "stevencheng";
  const part2 = "926";
  const part3 = "@gmail";
  const part4 = ".com";
  const emailAddress = part1 + part2 + part3 + part4;

  navigator.clipboard
    .writeText(emailAddress)
    .then(() => {
      const copyText = document.getElementById("copyText");
      const originalText = copyText.textContent;
      const copyIcon = '<i class="fas fa-copy"></i>';
      copyText.innerHTML = 'Email Copied!<i class="fas fa-check"></i>';

      const button = document.querySelector(".emailcopy");
      button.style.transform = "scale(1.05)";

      setTimeout(() => {
        copyText.innerHTML = originalText + copyIcon;
        button.style.backgroundColor = "";
        button.style.transform = "";
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy email: ", err);
    });
}

document.querySelectorAll(".mobile-nav-item").forEach((link) => {
  link.classList.remove("active");
  if (link.getAttribute("href") === `#${current}`) {
    link.classList.add("active");
  }
});

function toggleMobileContact() {
  const popup = document.getElementById("mobileContactPopup");
  const toggleBtn = document.querySelector(".contact-toggle-mobile"); 

  popup.classList.toggle("show");
  if (toggleBtn) {
    toggleBtn.classList.toggle("active"); 
  }
}


document.addEventListener("click", (e) => {
  const popup = document.getElementById("mobileContactPopup");
  const toggleBtn = document.querySelector(".contact-toggle-mobile");


  const clickedInsidePopup = popup && popup.contains(e.target);
  const clickedOnToggleBtn = toggleBtn && toggleBtn.contains(e.target);


  if (!clickedInsidePopup && !clickedOnToggleBtn) {
    popup.classList.remove("show");
    if (toggleBtn) {
      toggleBtn.classList.remove("active"); 
    }
  }
});
