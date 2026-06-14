// 告訴電腦：當有人點擊「開始計算」按鈕時，要做這些事
document.getElementById("calcBtn").addEventListener("click", function() {
    
    // 1. 去把格子裡的身高跟體重拿出來
    let h = document.getElementById("height").value;
    let w = document.getElementById("weight").value;

    // 2. 檢查一下，如果格子是空的，就跳出警告提醒
    if (h === "" || w === "") {
        alert("還沒輸入身高跟體重喔！");
        return; 
    }

    // 3. 開始算 BMI：把公分換算成公尺，然後套用公式
    let heightInMeters = h / 100;
    let bmi = w / (heightInMeters * heightInMeters);
    
    // 4. 把小數點修剪一下，只留一位數 (例如 20.7)
    bmi = Math.round(bmi * 10) / 10;

    // 5. 把算出來的數字，顯示在畫面的結果區
    document.getElementById("result").innerText = bmi;
});