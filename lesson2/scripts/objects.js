let person = {
    name: "Jhon",
    age: 30,
    isMarried: true,
    children: [
        {
            name:"Luke",
            age: 5
        },
        {
            name:"George",
            age: 3
        },
        {
            name: "Marry",
            age: 1
        }
    ]
};

// console.log(person.children[2].name);


person.profession = "Developer"; //ობიექტში გასაღების და მნიშველობის (ელემენტის) დამატება
person["hobbies"] = ['Reading', 'Running', "Swimming"];
// console.log(person);


delete person.name; //ობიექტებში გასარების და მისი მნიშვნელობის წაშლა
console.log(person);