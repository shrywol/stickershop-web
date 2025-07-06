// Демо данные для отображения ника
const userData = {
  username: "shrywol",
};

// Вставляем данные пользователя в хедер (если есть)
const usernameElem = document.getElementById("username");
if (usernameElem) {
  usernameElem.textContent = userData.username;
}

// Навигация по коллекциям
const navButtons = document.querySelectorAll(".nav-btn");
const collections = document.querySelectorAll(".collection");

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Снимаем класс active у всех кнопок
    navButtons.forEach((b) => b.classList.remove("active"));
    // Скрываем все коллекции
    collections.forEach((c) => c.classList.remove("active"));

    // Добавляем active на кликнутую кнопку и показываем нужную коллекцию
    btn.classList.add("active");
    const target = btn.getAttribute("data-tab");
    const targetCollection = document.getElementById(target);
    if (targetCollection) {
      targetCollection.classList.add("active");
    }
  });
});


// Клик по карточке — переключаем видимость кнопок оплаты внутри неё
const cards = document.querySelectorAll(".sticker-card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const payment = card.querySelector(".payment-buttons");
    if (!payment) return;

    // Скрываем кнопки оплаты во всех карточках кроме текущей
    document.querySelectorAll(".payment-buttons").forEach((el) => {
      if (el !== payment) el.classList.add("hidden");
    });

    // Переключаем видимость кнопок оплаты в текущей карточке
    payment.classList.toggle("hidden");
  });
});
