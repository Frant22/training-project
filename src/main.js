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
resultString = `${n} ${m}!`;

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
} else { 
    console.log('You can drive a car')
}

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
    } else if (amount <= 10) {
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
    } 
    if (a / b > result) {
        result = a / b;
    } 
    return result ;
} 
console.log(getLargestExpressionResult(20,4))

// ARRAYS
/*
ЗАДАНИЕ №16
Создай массив countries и в квадратных скобках перечисли 3 страны, которые хочешь посетить.
Выведи массив на экран с помощью console.log.
*/
let countries = ["China" , "Germany" , "USA"];
console.log(countries)
/*
ЗАДАНИЕ №17
Используй свойство length и выведи в консоль количество элементов в массиве distances.
*/
let distances = [3, 20, 34, 56, 1];
console.log(distances.length)
/*
ЗАДАНИЕ №18
Мы создали массив flowers, который содержит названия цветов. Выведи в консоль второй элемент этого массива.
💡 Помни, что индексы элементов начинаются с 0.
*/
let flowers = ['rose', 'tulip', 'sunflower', 'daisy', 'lily', 'lilac', 'orchid'];
console.log(flowers[1])
/*
ЗАДАНИЕ №19
Замени второй элемент массива на 'peony' по индексу. Выведи массив на экран с помощью console.log.
💡 Помни, что индексы элементов начинаются с 0.
*/
let flowersSecond = ['rose', 'tulip', 'sunflower', 'daisy', 'lily', 'lilac', 'orchid'];
flowersSecond[1] = "peony";
console.log(flowersSecond)
/*
ЗАДАНИЕ №20
Используй метод push и добавь в конец массива fruits названия любых двух фруктов. Выведи массив на экран с помощью console.log.
*/
let fruits = ['apple', 'orange', 'pineapple', 'mango'];
fruits.push('banana')
fruits.push('watermelon')
console.log(fruits)
// LOOPS
/*
ЗАДАНИЕ №21
Однажды ведущий на свадьбе решил развлечь гостей и установил правило: каждый гость произносит тост, и все присутствующие пьют за здоровье молодоженов.
Например:
Когда приходит первый гость, он пьёт в одиночестве.
Когда приходит второй — пьют вдвоём.
Третий — пьют втроём и так далее.
Если гостей 5, то всего потребуется 15 порций (1 + 2 + 3 + 4 + 5).
Если 10, то 55 порций (1 + 2 + 3 + ... + 10).
Реализуй функцию getDrinks, которая принимает numberOfGuests — сколько всего будет гостей,
и возвращает необходимое количество порций.
Примеры:
getDrinks(0); // 0 - нет гостей - нет и порций
getDrinks(2); // 1 + 2 = 3
getDrinks(6); // 1 + 2 + 3 + 4 + 5 + 6 = 21
Подсказка:
Если numberOfGuests === 0, верни 0.
Если нет, создай переменную для подсчёта количества порций, например, let numberOfPortions = 0.
Создай цикл for от 1 до numberOfGuests включительно.
На каждой итерации цикла увеличивай numberOfPortions на текущее количество гостей.
После цикла верни полученную сумму.
*/
function getDrinks(numberOfGuests) {
    // write code here
   let sum = 0;

    for (let i = 1; i <= numberOfGuests; i++) {
        sum += i;
    } 
    return sum;

} 
console.log(getDrinks(6))
console.log(getDrinks(11))
/*
ЗАДАНИЕ №22
А теперь напишем цикл с шагом 😎
Как ты уже знаешь, для конкурса с напитками понадобилось множество порций. Поэтому ведущий решил изменить правила.
Молодожёны выбирают целое положительное число step, и теперь тост говорит не каждый гость, а только первый и каждый,
кто приходит через выбранное количество (step) гостей после предыдущего тоста. При этом, как и раньше, пьют все присутствующие.
Например:
Если step = 1, то, как и раньше, тост говорит каждый пришедший гость.
Если step = 2, то 1-й, 3-й, 5-й и так далее.
Если step = 3, то 1-й, 4-й, 7-й, 10-й и так далее.
Реализуй функцию getDrinksWithStep, которая принимает numberOfGuests и step и возвращает нужное количество порций.
Примеры:
getDrinksWithStep(10, 3); // 1 + 4 + 7 + 10 = 22
getDrinksWithStep(0, 5);  // 0 - нет гостей — нет и порций
getDrinksWithStep(5, 3);  // 1 + 4 = 5
getDrinksWithStep(18, 10); // 1 + 11 = 12
Подсказка:
В функции создай переменную, которая будет хранить сумму необходимых порций для гостей, например, sum.
Создай цикл for от 1 до numberOfGuests с шагом step.
На каждой итерации цикла увеличивай sum на текущее количество гостей.
После цикла верни полученную сумму.
*/
function getDrinksWithStep(numberOfGuests, step) {
    // write code here
    let sum = 0;

    for ( i = 1; i <= numberOfGuests  ; i += step){
        sum += i;
    }

    return sum;
}
console.log(getDrinksWithStep(10, 3))
/*
ЗАДАНИЕ №23
В Mono bank есть возможность положить деньги на депозит под определённый процент и получить прибыль через некоторое время.
Например, если положить 10000 на 3 года под 4% годовых, получим:
Первый год: 10000 + 4% = 10400 (10000 + 10000 * 0.04);
Второй год: 10400 + 4% = 10816 (10400 + 10400 * 0.04);
Третий год: 10816 + 4% = 11248.64 (10816 + 10816 * 0.04);
Чистая прибыль: 11248.64 - 10000 = 1248.64.
Твоя задача:
Напиши функцию calculateProfit, которая принимает 3 параметра:
amount — начальная сумма, которую мы кладём на депозит;
percent — годовая процентная ставка;
period — количество лет (время, на которое деньги кладутся на депозит).
Функция должна рассчитать и вернуть сумму чистой прибыли за весь срок.
Примеры (проверяем только целую часть):
calculateProfit(1000, 5, 1); // 50
calculateProfit(12500, 3, 12); // 5322
Подсказка:
Создай переменную total и присвой ей значение amount.
Создай цикл от 1 до period (включительно).
На каждой итерации увеличивай total на total * percent / 100.
Верни разницу между total и amount.
*/
function calculateProfit(amount, percent, period) {
    // write code here
    let total = amount;
    for(i = 1; i <= period; i++){
        total += total*percent / 100;
    }
    return total - amount;

}console.log(calculateProfit(1000, 5, 1))
/*
ЗАДАНИЕ №24
А теперь допишем условие остановки цикла.
Дополни код в редакторе так, чтобы он выводил в консоль числа от 1 до N включительно.
Для этого вместо комментария 'stop condition' напиши правильное условие остановки цикла.
Проверь:
начальное значение,
условие остановки,
шаг цикла.
*/
function printNumbersWithStop(N) {
    let result = 0;
    for( i = 1; i <= N; i++) {

        result += i;
    } 
    return result
}
const result = (4);
console.log(printNumbersWithStop(10))

/*
ЗАДАНИЕ №25
В этом задании дана функция printNumbers, которая должна выводить в консоль числа от start до end включительно.
Добавь, пожалуйста, шаг цикла, чтобы исправить это.
*/
function printNumbersGap (start, end) {
    for(let i = start; i <= end; i++){
        console.log(i)
    }
}
console.log(printNumbersGap(1,4))
/*
ЗАДАНИЕ №25
Усложним предыдущее задание.
Допиши код в редакторе так, чтобы он выводил в консоль числа от 1 до N включительно, но с шагом step.
Пример: Если N = 7 и step = 3, то в консоли мы увидим такие числа:
1
4
7
Обрати внимание: тебе нужно дополнить начальное значение 'start value',
условие остановки цикла 'stop condition' и шаг цикла 'loop step' вместо комментариев.
*/
function printNumbersWithStep(N, step) {
    for (i = 1; i <= N; i += step) {
        console.log(i);
    }
}printNumbersWithStep(7, 3)
/*
ЗАДАНИЕ №25
В этом задании реализуй функцию printNumbersBackwards, которая принимает положительное число N и выводит в консоль числа от N до 1 включительно.
Пример: Если N = 5, функция должна вывести такие числа:
5
4
3
2
1
Подсказка:
Тебе нужно создать цикл, который начинается с N и заканчивается на 1. Значение i должно уменьшаться на 1 в шаге цикла.
*/
function printNumbersBackwards(N) {
    // write code here
 for (let i = N; i >= 1; i--) {
        console.log(i);
    }
}
printNumbersBackwards(5)
// STRING ITERATIONS
let mainString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
/*
ЗАДАНИЕ №26
Переменная title содержит строку.
Используй цикл и выведи в консоль все символы title от первого до последнего по одному за итерацию.
*/
const title = 'Strings';
//  Write code here
for (let i = 0; i < title.length; i++){
    console.log(title[i])
}
/*
ЗАДАНИЕ №27
Напиши функцию printFromTo, которая:
    -принимает строку input и индексы start и end;
    -выводит в консоль по одному все символы строки input, начиная с индекса start и заканчивая индексом end включительно.
    Вызови фукцию и выведи результат в консоль, в качестве input используй переменную mainString.
*/
function printFromTo(input, start, end) {
    for(let i = start; i <= end; i++){
        console.log(input[i])
    }
}
printFromTo(mainString, 0, 4);

/*
ЗАДАНИЕ №28
Напиши функцию printBackwards, которая:
    -принимает параметры input, start и end;
    -выводит в консоль по одному символу строки input в обратном порядке, начиная с индекса end и заканчивая индексом start включительно.
Вызови фукцию и выведи результат в консоль, в качестве input используй переменную mainString.
*/
function printBackwards(input, start, end) {
    for(i = end; i >= start; i--){
        console.log(input[i])
    }
}
printBackwards(mainString, 0, 6)
/*
ЗАДАНИЕ №29
Внутри функции replaceSpaces, которая принимает строку input, добавь цикл for, чтобы заменить каждый пробел в input на -.
Возврати полученный результат из функции.
Вызови фукцию и выведи результат в консоль, в качестве input используй переменную mainString.
*/
function replaceSpaces(input) {
    let result = '';
    // Write code here
    for(i = 0; i < input.length; i++){
        if (input[i] === ' '){
            result += '-';
        } else {
            result += input[i]
        }
    }
    return result;
}
console.log(replaceSpaces(mainString))
/*
ЗАДАНИЕ №30
Напиши функцию replaceA, которая принимает строку input, заменяет все буквы a и A на * и возвращает полученную строку.
Вызови фукцию и выведи результат в консоль, в качестве input используй переменную mainString.
*/
function replaceA(input) {
    let result = '';
    for(let i = 0; i < input.length; i++){
        if (input[i] === 'a' || input[i] === 'A'){
            result += '*';
        }
        else {
            result += input[i]
        }
    }
    return result;
} const fifthMainString = 'Atalanta in Italy';
console.log(replaceA(fifthMainString))
/*
ЗАДАНИЕ №31
Напиши функцию countMs, которая принимает строку text и возвращает количество букв m (как больших, так и маленьких) в ней.
Вызови фукцию и выведи результат в консоль, в качестве input используй переменную mainString.
*/
function countMs(text) {
let count = 0;
for(let i = 0; i < text.length; i++){
    if (text[i].toLowerCase() === 'm') {
        count++
    }
}
return count;
} const sixthMainString = 'My motorbike was in museum';
console.log(countMs(sixthMainString));
/*
const newNumbers = [25, 89, 65, 35, 99, 55];
newNumbers.forEach(number => {
    console.log(number+2)
}) 
let table = newNumbers.includes(99);
console.log(newNumbers.includes(99))
const mainString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
*/
let reversed = [1, 2, 3, 4, 5, 6];
console.log(reversed.filter(number => {
    return number%2 === 0;
}));