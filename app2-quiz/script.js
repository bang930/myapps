// 1. 先把畫面上所有的字卡全部找出來
let cards = document.querySelectorAll('.flashcard');

// 2. 用一個循環 (forEach)，幫每一張卡片都裝上「點擊監聽器」
cards.forEach(function(card) {
    
    card.addEventListener('click', function() {
        // toggle 的意思是：如果沒有 flipped 就加上去，如果有就拿掉
        card.classList.toggle('flipped');
    });
    
});