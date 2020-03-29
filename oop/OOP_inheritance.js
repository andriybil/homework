/**
 * Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя),
 *  surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).
 *  Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
 *  Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
 * Вот так должен работать наш класс:
 */

class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  getSalary() {
    return this.rate * this.days;
  }
}
var worker = new Worker("John", "Doe", 10, 31);

// console.log(worker.name); //выведет 'John'
// console.log(worker.surname); //выведет 'Doe'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

/***************************************************************************************************************************/

/**
 *  Реализуйте класс Student (Студент), который будет наследовать от класса User.
 *  Этот класс должен иметь следующие свойства: name (имя, наследуется от User),
 *  surname (фамилия, наследуется от User), year (год поступления в вуз).
 *  Класс должен иметь метод getFullName() (наследуется от User), с помощью
 *  которого можно вывести одновременно имя и фамилию студента. Также класс
 *  должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5).
 *  Курс вычисляется так: нужно от текущего года отнять год поступления в вуз.
 *  Текущий год получите самостоятельно.
 * Вот так должен работать наш класс:
 */

 class User {

   constructor(name, surname) {
     this.name = name;
     this.surname = surname;
   }

   getFullName() {
     return `${this.name} ${this.surname}`;
   }
 }

 class Student extends User {

   constructor(name, surname, year) {
     super(name, surname);
     this.year = year;
   }

   getCourse() {
    const currentYear = new Date().getFullYear();
    if(currentYear < this.year) return 'Are you from future? :)';
    if(currentYear === this.year) return 1;
    const currentCourse = currentYear - this.year;
    return currentCourse > 5 ? 'Are you a student?' : currentCourse;
   }
 }

var student = new Student("Petro", "Salivan", 2020);

// console.log(student.name); //выведет 'Petro'
// console.log(student.surname); //выведет 'Salivan'
// console.log(student.getFullName()); //выведет 'Petro Salivan'
// console.log(student.year); //выведет 2017
// console.log(student.getCourse()); //выведет 3 - третий курс, так как текущий год 2020


/***************************************************************************************************************************/
/**
 * implement 2 tasks but use constructor functions
 */

function Worker1(name, surname, rate, days) {
  this.name = name;
  this.surname = surname;
  this.rate = rate;
  this.days = days;  
}
Worker1.prototype.getSalary = function () {
  return this.rate * this.days;
}

var worker1 = new Worker1("Иван", "Иванов", 10, 31);

console.log(worker1.name); //выведет 'Иван'
console.log(worker1.surname); //выведет 'Иванов'
console.log(worker1.rate); //выведет 10
console.log(worker1.days); //выведет 31
console.log(worker1.getSalary()); //выведет 310 - то есть 10*31

function User1(name, surname) {
  this.name = name;
  this.surname = surname;
}

User1.prototype.getFullName = function () {
  return `${this.name} ${this.surname}`;
} 

function Student1 (name, surname, year) {
  User1.call(this, name, surname); 
  this.year = year;
}

Student1.prototype = new User1;
Student1.prototype.getCourse = function ()  {
  return new Date().getFullYear() - this.year;
}

var student1 = new Student1("Иван", "Иванов", 2017);

console.log(student1.name); //выведет 'Иван'
console.log(student1.surname); //выведет 'Иванов'
console.log(student1.getFullName()); //выведет 'Иван Иванов'
console.log(student1.year); //выведет 2017
console.log(student1.getCourse()); //выведет 3 - третий курс, так как текущий год 2020

/****************************************************************************************************************************/

/**
 * С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по
 *  следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3
 * (найденное в table), а bed.glasses – значение 1 (найденное в head).
 */

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

// OR
// table.__proto__ = head;
// bed.__proto__ = table;
// pockets.__proto__ = bed;

// console.log(pockets.pen);
// console.log(bed.glasses);

/**
 * Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses?
 * При необходимости составьте цепочки поиска и сравните их.
 */

 `Значення glasses швидше отримати через head.glasses адже властивість glasses знаходиться в обєкті head.
  pockets.glasses спершу буде шукати у власній області далі по ланцюжку [[Prototype]] bed => table => head
  Проте на сучасних машинах цієї різниці майже непомітно.
 `

/****************************************************************************************************************************/

/**
 * У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
 * Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?
 */

 `Це можна випривити тим щоб створити два окремих 'stomach' для кожнога хом'яка адже через прототипне наслідування 
 хом'яки запозичують шлунок з одного батьківського об'єкта humster у якому було збережено їжу через метод push()`

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  stomach:[],
  __proto__: hamster
};

let lazy = {
  stomach:[],
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert(lazy.stomach); // apple
