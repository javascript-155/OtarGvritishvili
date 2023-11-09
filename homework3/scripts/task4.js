/*
  4. შექმენით ფუნქცია, რომელიც დაადგენს მომხმარებლის მიერ შეყვანილი წელი ნაკიანია თუ არა, 
    თუ ნაკიანია უნდა გამოუტანოთ ეკრანზე რომ მოცემული წელი ნაკიანია თუ არა მაგ შემთხვევაში 
    უნდა გამოიტანოთ რომ წელი არ არის ნაკიანი
*/

let year = prompt("Enter the year");

function checker (year) {
    if(year % 4 > 0 || year % 400 > 0) {
        return("This year is't a leap year");
    } else {
        return("This year is a leap year");
    };
};

alert(checker(year));