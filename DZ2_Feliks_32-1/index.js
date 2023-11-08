// Температура
var temperature = parseFloat(prompt("Введите значение температуры:"));

let feeling = "";

switch (true) {
  case temperature < -10:
    feeling = "Морозно";
    break;
  case temperature >= -10 && temperature < 0:
    feeling = "Очень холодно";
    break;
  case temperature >= 0 && temperature < 10:
    feeling = "Холодно";
    break;
  case temperature >= 10 && temperature < 21:
    feeling = "Прохладно";
    break;
  case temperature >= 21 && temperature < 26:
    feeling = "Облачно";
    break;
  case temperature >= 26 && temperature < 33:
    feeling = "Тепло";
    break;
  default:Ы
    feeling = "Жарко";
}

console.log(`Ощущение при температуре ${temperature}°C: ${feeling}`);

// БЕНЗИН
var cardType = prompt("Введите тип карты (SILVER, GOLD, PLATINUM):").toUpperCase();
var liters = parseFloat(prompt("Введите количество литров бензина:"));

let pointValue = 0;
switch (cardType) {
  case "SILVER":
    pointValue = 0.5;
    break;
  case "GOLD":
    pointValue = 0.75;
    break;
  case "PLATINUM":
    pointValue = 1;
    break;
  default:
    console.log("Некорректный тип карты.");
    break;
}

var earnedPoints = pointValue * liters;

if (pointValue > 0) {
  console.log(`Вы получили ${earnedPoints} баллов лояльности.`);
}
