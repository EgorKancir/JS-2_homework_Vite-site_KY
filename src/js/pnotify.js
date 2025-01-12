// import '@pnotify/core/dist/BrightTheme.css';
// // HW

// // 1
// let gameMarke = document.getElementById("game-marke");
// const gameKey = document.getElementById("game-key");
// let gameConsol = document.getElementById("game-status");
// const newGameBtn = document.getElementById("new-game_btn");
// const gameList = ['t', 'D', 'h', 'L', 'p', 'Y', 'g', 'u', 'Q', 'E', 'N', 'D'];
// let currentKeyIndex = 0;

// function showStackModal(type) {
//     if (typeof window.stackModal === 'undefined') {
//         window.stackModal = new PNotify.Stack({
//             dir1: 'up',
//             firstpos1: 25,
//             push: 'top',
//             modal: true,
//             maxOpen: Infinity
//         });
//     }

//     const opts = {
//         title: 'Over Here',
//         text: "Check me out. I'm in a different stack.",
//         stack: window.stackModal,
//         modules: new Map([
//             ...PNotify.defaultModules,
//             [
//                 PNotifyConfirm,
//                 {
//                     confirm: true,
//                     buttons: [{
//                         text: 'Another',
//                         primary: true,
//                         click: () => showStackModal(type)
//                     }]
//                 }
//             ]
//         ])
//     };
//     switch (type) {
//         case 'error':
//             opts.title = 'Oh No';
//             opts.text = 'Watch out for that water tower!';
//             opts.type = 'error';
//             break;
//         case 'info':
//             opts.title = 'Breaking News';
//             opts.text = 'Have you met Ted?';
//             opts.type = 'info';
//             break;
//         case 'success':
//             opts.title = 'Good News Everyone';
//             opts.text = "I've invented a device that bites shiny metal asses.";
//             opts.type = 'success';
//             break;
//     }

//     PNotify.alert(opts);
// }

// document.addEventListener("keydown", (event) => {
//     if (event.key === "Shift" || event.key === "Control" || event.key === "Alt" || event.key === "CapsLock") {
//         return; 
//     }
//     let rightKey = gameList[currentKeyIndex];
//     let nextKey = gameList[currentKeyIndex + 1] || 'немає'; 
//     gameMarke.textContent = `Наступна клавіша >>> ${nextKey} <<<`;
//     if (rightKey === event.key) {
//         currentKeyIndex += 1;
//         gameConsol.textContent = 'Чудово так тримати!!!';
//         gameConsol.style.color = 'green';
//     } else {
//         currentKeyIndex = 0;
//         gameConsol.textContent = 'УПС! Все спочатку...';
//         gameConsol.style.color = 'red';
//         showStackModal('error');
//     }
//     if (currentKeyIndex >= gameList.length) {
//         gameConsol.textContent = 'Вітаємо, ти пройшов гру!';
//         gameConsol.style.color = 'blue';
//         currentKeyIndex = 0; 
//         showStackModal('error');
//     }
// });

// gameKey.textContent = gameList.join(', '); 
// gameConsol.textContent = ' ';
// newGameBtn.addEventListener('click', () => {
//     currentKeyIndex = 0;
//     gameConsol.textContent = 'Нова гра розпочата!';
//     gameConsol.style.color = 'black';
//     gameMarke.textContent = `Наступна клавіша >>> ${gameList[currentKeyIndex]} <<<`;
// });