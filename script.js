const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

const description = document.getElementById("description");
const charCount = document.getElementById("charCount");
description.addEventListener("input", () => {
  charCount.textContent = `${description.value.length} / 1500`;
});

document.getElementById("serviceForm").addEventListener("submit", event => {
  event.preventDefault();
  const service = document.getElementById("service").value;
  const city = document.getElementById("city").value;
  const count = document.getElementById("count").value;
  const details = description.value.trim();

  if (!service || !city || !count || !details) return;

  const message = [
    "السلام عليكم، أرغب في طلب خدمة من منظومة الإسناد.",
    `نوع الخدمة: ${service}`,
    `المدينة: ${city}`,
    `عدد المصاعد: ${count}`,
    `التفاصيل: ${details}`
  ].join("\n");

  // الرقم مأخوذ من بيانات التواصل المنشورة بالموقع.
  window.open(`https://wa.me/966531180385?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});
