/*
შექმენით ობიექტი სახელით "calculator" შესაბამისი ატრიბუტებით სახელად. num1, num2, ანუ რაღაც ესეთი {num1: 10, num2: 5}, 
დაამატეთ ამ ობიექტში ახალი ატრიბუტები სახელით add, substract, multiply, divide, მათი მთავარი მიზანი უნდა იქნეს, 
რომ გამოიანგარიშოს ამ ორი რიცხვის ჯამი, სხვაობა, ნამრავლი, განაყოფი. ეს ყველაფერი მოახდინეთ this საკვანძო სიტყვის მეშვეობით.
*/

const calculator = {
    num1: Number(prompt("შეიყვანე პირველი რიცხვი!")),
    num2: Number(prompt("შეიყვანე მეორე რიცხვი!")),
    add: function () {
        return this.num1 + this.num2;
    },
    substract: function () {
        return this.num1 - this.num2;
    },
    multiply:function () {
        return this.num1 * this.num2;
    },
    divide: function () {
        return this.num1 / this.num2;
    }
};

alert(`შეყავნილი რიცხვების ჯამი შეადგენს ${calculator.add()}, სხვაობა ${calculator.substract()}, ნამრავლი ${calculator.multiply()}, ხოლო განაყოფი ${calculator.divide()}.`);