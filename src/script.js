document.addEventListener("DOMContentLoaded", () => {
  const menuMessages = {
    "game-start": "GAME START 버튼이 정상적으로 눌렸습니다!",
    collection: "도감 버튼이 정상적으로 눌렸습니다!",
    records: "기록 버튼이 정상적으로 눌렸습니다!",
    settings: "설정 버튼이 정상적으로 눌렸습니다!",
    help: "게임 방법 버튼이 정상적으로 눌렸습니다!"
  };

  const menuButtons = document.querySelectorAll(".start-menu-button");

  menuButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const menuName = button.dataset.menu;
      const message = menuMessages[menuName];

      if (message) {
        alert(message);
      }
    });
  });
});
