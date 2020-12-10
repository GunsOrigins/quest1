//Array for the list of foods
var FoodList = ["ข้าวกะเพราไก่", "ไข่เจียวหมูสับ", "ก๋วยเตี๋ยว", "บะหมี่", "คะน้าหมูกรอบ", "หมูทอดกระเทียม", "ข้าวผัด", "ผัดผัก", "ตำไทย", "ไก่ย่าง", "หมูแดดเดียว", "เนื้อทอด", "เนื้อแดดเดียว", "ผัดซีอี้ว", "ราดหน้า", "ไข่ดาว", "เป็ดย่าง", "ข้าวมันไก่", "ข้าวขาหมู", "ต้มยำกุ้ง", "แกงส้ม", "ผัดไทย", "สุกี้", "ผัดผงกะหรี่", "ผัดพริกแกง"]
//Random function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getRndFood() {
  return FoodList[getRndInteger(0, 24)];
}
document.getElementById("FoodList").innerHTML = FoodList;

console.log(getRndFood())

// Create var for elements 
var element = document.getElementById("RndFood");