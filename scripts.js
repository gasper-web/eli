document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.querySelector("input[type='text']").value;
      const email = document.querySelector("input[type='email']").value;
      const message = document.querySelector("textarea").value;
  
      if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting.");
        return;
      }
  
      alert(
        "Thank you for your message, " + name + "! We will get back to you soon."
      );
      form.reset();
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");
  
    // Full Name Validation
    const fullNameInput = document.getElementById("full-name");
    fullNameInput.addEventListener("input", function () {
      const fullNameRegex = /^[A-Za-z\s]+$/;
      if (!fullNameRegex.test(fullNameInput.value)) {
        showError(
          fullNameInput,
          "Please enter a valid full name (e.g., John Doe)."
        );
      } else {
        clearError(fullNameInput);
      }
    });
  
    // Registration Number Validation
    const regNumberInput = document.getElementById("reg-number");
    regNumberInput.addEventListener("input", function () {
      const regNumberRegex = /^BCS-\d{2}-\d{4}-\d{4}$/;
      if (!regNumberRegex.test(regNumberInput.value)) {
        showError(
          regNumberInput,
          "Please enter a valid registration number (e.g., BCS-00-1234-5678)."
        );
      } else {
        clearError(regNumberInput);
      }
    });
  
    // Email Validation
    const emailInput = document.getElementById("email");
    emailInput.addEventListener("input", function () {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        showError(
          emailInput,
          "Please enter a valid email address (e.g., example@domain.com)."
        );
      } else {
        clearError(emailInput);
      }
    });
  
    // Password Validation
    const passwordInput = document.getElementById("password");
    passwordInput.addEventListener("input", function () {
      const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      if (!passwordRegex.test(passwordInput.value)) {
        showError(
          passwordInput,
          "Password must be at least 8 characters long and include a special character."
        );
      } else {
        clearError(passwordInput);
      }
    });
  
    // Confirm Password Validation
    const confirmPasswordInput = document.getElementById("confirm-password");
    confirmPasswordInput.addEventListener("input", function () {
      if (confirmPasswordInput.value !== passwordInput.value) {
        showError(confirmPasswordInput, "Passwords do not match.");
      } else {
        clearError(confirmPasswordInput);
      }
    });
  
    // Form Submission
    registrationForm.addEventListener("submit", function (event) {
      event.preventDefault();
      if (validateForm()) {
        alert("Registration successful!");
        registrationForm.reset();
      }
    });
  
    // Helper Functions
    function showError(input, message) {
      const errorMessage = input.nextElementSibling;
      errorMessage.textContent = message;
      errorMessage.style.display = "block";
      input.classList.add("error");
    }
  
    function clearError(input) {
      const errorMessage = input.nextElementSibling;
      errorMessage.textContent = "";
      errorMessage.style.display = "none";
      input.classList.remove("error");
    }
  
    function validateForm() {
      let isValid = true;
      if (!fullNameInput.value.match(/^[A-Za-z\s]+$/)) {
        showError(fullNameInput, "Please enter a valid full name.");
        isValid = false;
      }
      if (!regNumberInput.value.match(/^BCS-\d{2}-\d{4}-\d{4}$/)) {
        showError(regNumberInput, "Please enter a valid registration number.");
        isValid = false;
      }
      if (!emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        showError(emailInput, "Please enter a valid email address.");
        isValid = false;
      }
      if (
        !passwordInput.value.match(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        )
      ) {
        showError(
          passwordInput,
          "Password must be at least 8 characters long and include a special character."
        );
        isValid = false;
      }
      if (confirmPasswordInput.value !== passwordInput.value) {
        showError(confirmPasswordInput, "Passwords do not match.");
        isValid = false;
      }
      return isValid;
    }
  });
  
  $(document).ready(function () {
    let currentIndex = 0;
    const items = $(".carousel-item");
    const totalItems = items.length;
  
    // Next Button
    $(".carousel-control-next").click(function () {
      if (currentIndex < totalItems - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateCarousel();
    });
  
    // Previous Button
    $(".carousel-control-prev").click(function () {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = totalItems - 1;
      }
      updateCarousel();
    });
  
    // Update Carousel Position
    function updateCarousel() {
      const offset = -currentIndex * 100;
      $(".carousel-inner").css("transform", `translateX(${offset}%)`);
    }
  
    // Auto Slide (Optional)
    setInterval(function () {
      if (currentIndex < totalItems - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateCarousel();
    }, 5000); // Change slide every 5 seconds
  });
  
  const regions = {
    Arusha: ["Arusha City", "Karatu", "Ngorongoro"],
    "Dar es Salaam": ["Kinondoni", "Ilala", "Temeke"],
    Dodoma: ["Dodoma Mjini", "Chamwino", "Chemba", "Kondoa", "Chamwino", "Mpwapwa"],
    Kigoma: ["Kigoma Mjini", "Kasulu", "Kibondo", "Kakonko", "Kibondo", "Buhingwe"],
    Kilimanjaro: ["Moshi", "Hai", "Rombo"],
    Mara: ["Tarime", "Musoma", "Bunda", "Serengeti"],
    Mbeya: ["Mbeya City", "Chunya", "Rungwe"],
    Mwanza: ["Mwanza City", "Misungwi", "Ilemela"],
  };
  
  document.getElementById("region").addEventListener("change", function () {
    const region = this.value;
    const districtSelect = document.getElementById("district");
    districtSelect.innerHTML = "<option value=''>Select District</option>"; // Reset district options
  
    if (region && regions[region]) {
      regions[region].forEach((district) => {
        const option = document.createElement("option");
        option.value = district;
        option.textContent = district;
        districtSelect.appendChild(option);
      });
    }
  });
  