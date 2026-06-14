let timeLeft = 30; // 預設倒數 30 秒
let timerId = null; // 用來放計時器機關的骨董時鐘

const display = document.getElementById('display');

// 💡 魔法 1：把「總秒數」換算成「00:00」畫面的功能
function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    
    // 如果數字小於 10，前面自動補個 "0" (例如 5 秒變成 05)
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    
    display.innerText = minutes + ":" + seconds;
}

// 💡 魔法 2：開始計時
document.getElementById('startBtn').addEventListener('click', function() {
    // 如果已經在倒數了，就不要重複啟動
    if (timerId !== null) return;

    // 叫電腦每隔 1000 毫秒 (也就是 1 秒) 就執行一次裡面的事
    timerId = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--; // 時間少 1 秒
            updateDisplay(); // 更新畫面
        } else {
            // 時間到了！
            clearInterval(timerId);
            timerId = null;
            alert("時間到！辛苦了，動一動身體吧！🧘‍♂️");
        }
    }, 1000);
});

// 💡 魔法 3：暫停計時
document.getElementById('pauseBtn').addEventListener('click', function() {
    clearInterval(timerId); // 叫時鐘停下來
    timerId = null; // 把機關清空
});

// 💡 魔法 4：重設
document.getElementById('resetBtn').addEventListener('click', function() {
    clearInterval(timerId);
    timerId = null;
    timeLeft = 30; // 回到預設的 30 秒
    updateDisplay();
});

// 💡 魔法 5：點擊 30秒/1分鐘/2分鐘 快捷鍵切換時間
let presetBtns = document.querySelectorAll('.preset-btn');
presetBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        clearInterval(timerId); // 切換時先停下目前的計時
        timerId = null;
        
        // 讀取按鈕上設定的秒數 (data-time)
        timeLeft = parseInt(btn.getAttribute('data-time')); 
        updateDisplay();
    });
});