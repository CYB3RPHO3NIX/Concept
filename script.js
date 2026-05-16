const themeToggle = document.getElementById("themeToggle");
const densityRange = document.getElementById("densityRange");
const densityValue = document.getElementById("densityValue");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const toast = document.getElementById("toast");
const toastButton = document.getElementById("showToast");

const tabs = Array.from(document.querySelectorAll("[data-tab-target]"));
const tabPanels = Array.from(document.querySelectorAll(".tab-panel"));
const accordionButtons = Array.from(document.querySelectorAll(".accordion-item"));

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

densityRange.addEventListener("input", (event) => {
  densityValue.textContent = `${event.target.value}%`;
});

const setModalState = (isOpen) => {
  modalBackdrop.hidden = !isOpen;
};

openModalButton.addEventListener("click", () => setModalState(true));
closeModalButton.addEventListener("click", () => setModalState(false));
modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) {
    setModalState(false);
  }
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tabTarget;

    tabs.forEach((item) => item.classList.toggle("active", item === tab));
    tabPanels.forEach((panel) => panel.classList.toggle("active", panel.id === target));
  });
});

accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isActive = button.classList.contains("active");

    accordionButtons.forEach((item) => {
      item.classList.remove("active");
      item.querySelector("strong").textContent = "+";
      item.nextElementSibling.classList.remove("open");
    });

    if (!isActive) {
      button.classList.add("active");
      button.querySelector("strong").textContent = "−";
      button.nextElementSibling.classList.add("open");
    }
  });
});

toastButton.addEventListener("click", () => {
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setModalState(false);
  }
});
