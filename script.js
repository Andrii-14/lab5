// Отримання інформації про браузер і ОС
const browserInfo = {
  appName: navigator.appName,
  appVersion: navigator.appVersion,
  userAgent: navigator.userAgent,
  platform: navigator.platform,
  language: navigator.language,
  cookieEnabled: navigator.cookieEnabled,
};

// Збереження в localStorage
localStorage.setItem('browserInfo', JSON.stringify(browserInfo));

// Відображення у футері
const footer = document.getElementById('footerInfo');
const savedInfo = JSON.parse(localStorage.getItem('browserInfo'));

if (savedInfo) {
  let infoHTML = "<strong>Інформація про браузер та ОС:</strong><br>";
  for (const key in savedInfo) {
    infoHTML += `${key}: ${savedInfo[key]}<br>`;
  }
  footer.innerHTML = infoHTML;
} else {
  footer.textContent = "Немає збереженої інформації.";
}
const comments = document.getElementById("comments");
      fetch("https://jsonplaceholder.typicode.com/posts/12/comments")
        .then((response) => response.json())
        .then((data) => {
          comments.innerHTML = data
            .map(
              (comments) => `
                <div class="comments">
                  <strong>${comments.name}</strong> (${comments.email}):<br>
                  ${comments.body}
                </div>
              `
            )
            .join("");
        });
  setTimeout(() => {
        document.getElementById("feedback-modal").style.display = "flex";
      }, 60000);

// 5. Перемикання теми
      const toggleBtn = document.querySelector(".theme-toggle");
      const applyTheme = (theme) => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
      };

      toggleBtn.addEventListener("click", () => {
        const currentTheme = document.body.classList.contains("light") ? "light" : "dark";
        const newTheme = currentTheme === "light" ? "dark" : "light";
        applyTheme(newTheme);
      });

      // 6. Авто-вибір теми залежно від часу
      const hour = new Date().getHours();
      const autoTheme = hour >= 7 && hour < 21 ? "light" : "dark";
      const savedTheme = localStorage.getItem("theme") || autoTheme;
      applyTheme(savedTheme);