// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let min3 = (num1,num2,num3) => {
    let min = num1;
        if (min>num2){
            min = num2;
        }
        if(min>num3){
            min = num3;
        }
    console.log(min);
}
min3(40,35,20);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let max3 = (num1,num2,num3) => {
    let max = num1;
        if (max<num2){
            max = num2;
        }
        if(max<num3){
            max = num3;
        }
    console.log(max);
}
max3(20,35,50);

// - створити функцію яка повертає найбільше число з масиву
let arrForMax = [1,2,3];
let maxArr = (arr1) =>{
    let max = arr1[0];
    for (let i = 0; i < arr1.length; i++){
        if(arr1[i] > max){
            max = arr1[i];
        }
    }
    return max;
}
console.log(maxArr(arrForMax));

// - створити функцію яка повертає найменьше число з масиву
let arrForMin = [10,20,3.3];
let minArr = (arr1) => {
    let min = arr1[0];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] < min) {
            min = arr1[i];
        }
    }
    return min;
}
console.log(minArr(arrForMin));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arrForSum = [3,30,22];
function sumArr(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(sumArr(arrForSum));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arrForMiddle = [33,30,222,40];
let middleArr = (arr) => {
    let middle = 0;
    for (let i = 0; i < arr.length; i++){
        middle = middle + arr[i];
    }
    return middle/arr.length;
}
console.log(middleArr(arrForMiddle));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let arrMinMax = [1,1,1,2,2,2,3,3,3];
let minMax = (arr) => {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]){
            min = arr[i];
        }
        if (max < arr[i]){
            max = arr[i];
        }
    }
    console.log(max);
    return min;
}
console.log(minMax(arrMinMax));

// - створити функцію яка заповнює масив рандомними числами
let random = (length) =>     {
    let mas = [];
    for (let i = 0; i < length; i++){
        mas.push(Math.floor(Math.random()*100));
    }
return mas;
}
console.log(random(5));

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let hzArr = (a,b) => {
    let arr = [];
    for (let i = 0; i < a; i++) {
        arr.push(Math.round(Math.random() * b));
    }
    return arr;
}
console.log(hzArr(5, 100));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let arrr = [1,2,3];
let arrRevers = (arr) => {
    arr.reverse();
    return arr;
}
console.log(arrRevers(arrr));