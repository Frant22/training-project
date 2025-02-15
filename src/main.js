// NUMBERS

/*
ЗАДАНИЕ №1

В коде есть переменные a и b.

Твоя задача: объяви 2 новые переменные:

exp должна содержать результат возведения a в степень b;
mod должна содержать остаток от деления a на b.

Обрати внимание: не изменяй значения переменных a и b и не удаляй их.
Результат выведи в console.log().

Подсказка:
Для выполнения необходимых вычислений используй операторы ** и %.
*/

const a = 7;
const b = 2;
// Менять код ниже этой строки
let exp = a**b;
let mod = a % b;
console.log(exp); /*Выведи результат сюда и посмори в вкладке console в Dev Tools*/
console.log(mod); /*Выведи результат сюда и посмори в вкладке console в Dev Tools*/

/*
ЗАДАНИЕ №2

Теперь поработаем с приоритетом вычислений.

В нашем примере расставь скобки так, чтобы в результате переменная expression была равна 10.

Обрати внимание: тебе не нужно объявлять новую переменную. Расставь скобки в существующем выражении.
*/

// Менять код ниже этой строки
const expression = 10 * (7 + 8 - 11) / 4;

console.log(expression); /*Выведи результат сюда и посмори в вкладке console в Dev Tools*/


/*
ЗАДАНИЕ №3

В коде есть переменные x и y. Твоя задача: объяви 4 новые переменные:

addition должна содержать сумму x и y;
subtraction должна содержать результат вычитания x и y;
division должна содержать результат деления x на y;
multiplication должна содержать произведение x и y.
Обрати внимание: не изменяй значения переменных x и y и не удаляй их.
Выведи результат всех новых переменных в console.log().
*/
const x = 10;
const y = 2;

// Менять код ниже этой строки
let addition = x + y;
let subtraction = x - y;
let division = x / y;
let multiplication = x * y;
console.log(addition);
console.log(subtraction);
console.log(division);
console.log(multiplication);


// STRINGS
/*
ЗАДАНИЕ №4

А теперь применим конкатенацию — «склеивание» строк с помощью +.

Объяви новую переменную resultString. Ее значение «склей» из уже объявленных переменных q, w и e,
чтобы в результате получилась строка 'Concatenation'.

Выведи результат на экран с помощью console.log.
*/

const q = 'Con';
const w = 'catenat';
const e = 'ion';

// Менять код ниже этой строки
let resultString = q + w + e;
console.log(resultString);
/*ЗАДАНИЕ №5

А теперь воспользуемся интерполяцией — вставкой переменных в строку в обратных кавычках.

Объяви новую переменную resultString. Чтобы записать ей значение, используй уже объявленные переменные n и m,
а также обратные кавычки (``). В результате должна получиться строка:
Hello, world!

Обрати внимание на пробел, запятую и восклицательный знак, которые должны присутствовать в результате.

Выведи результат на экран с помощью console.log.
*/

const n = 'Hello';
const m = 'world';

// Менять код ниже этой строки
resultString = `${n}`+ `${m}!`;

console.log(resultString)
// BOOLEAN

/*
ЗАДАНИЕ №6

В этом задании ты научишься работать с логическим оператором OR.

Тебе дан код с объявленными переменными. Измени значение одной из них (isHoliday или isVacation),
чтобы canStayHome получила значение true.

Выведи canStayHome в консоль.
*/

const isHoliday = true;
const isVacation = false;

const canStayHome = isHoliday || isVacation; // Обрати внимание: эту строку кода изменять не нужно.
console.log(canStayHome)

/*
ЗАДАНИЕ №7

В этом задании ты научишься работать с логическим оператором AND.

Тебе дан код с объявленными переменными. Измени значение одной из них (isWaterHot или haveTea),
чтобы canMakeTea получила значение false.

Выведи canMakeTea в консоль.
*/

const isWaterHot = true;
const haveTea = false;

const canMakeTea = isWaterHot && haveTea; // Обрати внимание: эту строку кода изменять не нужно.
console.log(canMakeTea)
/*
ЗАДАНИЕ №8

А теперь измени значения констант так, чтобы canMakeCake получила значение true,
и мы могли приступить к приготовлению торта.
*/

const hasEggs = true;
const hasFlour = true;
const hasSugar = true;

const canMakeCake = hasEggs && hasFlour && hasSugar; // Обрати внимание: эту строку кода изменять не нужно.

console.log(canMakeCake)
/*
let cities = ['Kyiv', 'London', 'Paris', 'Tokyo', 'New York'];
for (let index = cities.length-1; index >= 0; index--) {
    console.log(cities[index])
}
*/


// FUNCTIONS

/*
ЗАДАНИЕ №9

А теперь создай функцию greeter, которая:

принимает параметр name;
возвращает строку-приветствие в виде Hi, ${name}! (используй ключевое слово return).
Выведи результат на экран с помощью console.log.

Например:
// параметр: name = 'Anna'
greeter('Anna'); // возвращает 'Hi, Anna!'
*/
function greeter(name) {
    return `Hi, ${name}!`;
}

console.log(greeter('Lee'));

/*
ЗАДАНИЕ №10

Улучшим функцию greeter 😎.

Теперь она должна принимать 2 параметра: name и partOfTheDay, и возвращать строку-приветствие, как в примере:

greeter('Paul', 'night'); // 'Good night, Paul!'
greeter('John', 'day'); // 'Good day, John!'
greeter('Alex', 'morning'); // 'Good morning, Alex!'

Выведи результат на экран с помощью console.log.

Подсказка:
Ты можешь использовать интерполяцию, записав строку
Good ${partOfTheDay}, ${name}!
в обратных кавычках.
*/
function greeter2(partOfTheDay, name) {
    return `Good ${partOfTheDay}, ${name}!`;}


console.log(greeter2('night',"Alex"))


/*
ЗАДАНИЕ №11

В этом задании создай функцию double, которая:

принимает параметр num;
возвращает значение num, умноженное на 2.
Например:

// параметр: num = 5
double(5); // возвращает 10

// параметр: num = 24
double(24); // возвращает 48

Выведи результат на экран с помощью console.log.
*/
function double(num) {
    return num*2;
}
console.log(double(24))
// Conditional operators

/*
ЗАДАНИЕ №12

А теперь поработаем с условными операторами.

По закону только совершеннолетние могут ездить на машине.

Создай функцию canDrive, которая принимает в качестве параметра целое число age:

если age больше или равно 18, то функция вернёт строку 'You can drive a car';
в противном случае функция вернёт строку 'You can not drive a car'.
Чтобы вернуть нужную строку из функции, используй ключевое слово return.
Выведи результат на экран с помощью console.log.

Например:
canDrive(17); // вернёт 'You can not drive a car'
canDrive(18); // вернёт 'You can drive a car'
canDrive(50); // вернёт 'You can drive a car'
*/
let age = 18
if (age < 18) {
    console.log("You can not drive a car");
} else if (age === 18) {
    console.log('You can drive a car')
}

else { console.log('You can drive a car')}

/*
ЗАДАНИЕ №13

Все официанты любят чаевые! А один из них поделился с нами секретным рейтингом.

Реализуй функцию getTipsRating, которая принимает сумму чаевых amount и возвращает строку-оценку в зависимости от оставленной суммы:

'terrible', если amount равно 0 грн;
'poor', если amount от 1 до 10 грн включительно;
'good', если amount от 11 до 20 грн включительно;
'great', если amount от 21 до 50 грн включительно;
'excellent', если amount больше 50 грн.

getTipsRating(0); // 'terrible'
getTipsRating(1); // 'poor'
getTipsRating(10); // 'poor'

Например:
*/

function getTipsRating(amount){
    if (amount === 0) {
        return 'terrible';
    }

    else if (amount <= 10) {
        return 'poor';
// добавь остальные условия и выведи результат на экран с помощью console.log.

    } else if (amount <= 20) {
        return 'good';
    } else if  (amount <= 50) {
        return 'great';
    } else if (amount > 50) {
        return 'excellent';
    
    }}
   
    console.log(getTipsRating(2));
console.log(getTipsRating(15));
console.log(getTipsRating(30));
console.log(getTipsRating(60));
    


/*
ЗАДАНИЕ №14

Продолжим работать с условными операторами.

Никто не любит платить налоги, но мы все обязаны!

Создай функцию calculateTaxes, которая принимает целое число income (твой доход) и возвращает налог, который ты заплатишь. Сумма налога зависит от твоего дохода:

до 1000 грн включительно — налог 2% от дохода;
от 1001 грн до 10000 грн включительно — налог 3% от дохода;
больше 10000 грн — налог 5% от дохода.

Например:
calculateTaxes(900); // 18 (900 * 0.02), так как 900 < 1000
calculateTaxes(5000); // 150 (5000 * 0.03), так как 5000 < 10000 и 5000 > 1001
calculateTaxes(10500); // 525 (10500 * 0.05), так как 10500 > 10000

Выведи результат на экран с помощью console.log.
*/
function calculateTaxes(income) {
    if (income <= 1000) {
        return income*0.02
    } else if (income <= 10000) {
        return income*0.03
    } else if (income > 10000) {
        return income*0.05
    }}

    console.log(calculateTaxes(250))
    console.log(calculateTaxes(252000))
    console.log(calculateTaxes(15000))
/*
ЗАДАНИЕ №15

В этом задании создай функцию getLargestExpressionResult, которая принимает 2 числа: a и b. Эта функция должна сравнить результаты следующих вычислений и вернуть наибольший из них:

a + b
a - b
a * b
a / b

Обрати внимание:
числа a и b могут быть отрицательными;
не используй тернарный оператор или ключевое слово else.
Например, если a = 10 и b = 5, то:

a + b = 15
a - b = 5
a * b = 50 — наибольший результат
a / b = 2
Но если a = 10 и b = -5, то:

a + b = 5
a - b = 15 — наибольший результат
a * b = -50
a / b = -2

getLargestExpressionResult(10, 5); // 50
getLargestExpressionResult(10, -5); // 15

Подсказка:
Создай переменную result и присвой ей значение a + b.
Проверь, больше ли a - b, чем result. Если да, то присвой result значение a - b.
Создай аналогичные проверки для a * b и a / b.
После всех проверок верни result — он должен содержать наибольший возможный результат среди выражений.
*/
function getLargestExpressionResult(a,b) {
    let result = a + b ;
    if (a - b > result ){
        result = a - b;
    } 
    if (a * b > result){
        result = a * b;
    } if (a / b > result) {
        result = a / b;
    } return result ;
} 
console.log(getLargestExpressionResult(20,4))