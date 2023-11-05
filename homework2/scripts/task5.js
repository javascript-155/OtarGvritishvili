/*
5. შექმენით პროგრამა, რომელიც შექმნის ობიექტს სტუდენტზე,
 რომელშიც იქნება ისეთი გასაღებები, როგორიცაა: სახელი, გვარი,
 ა.შ მაგ: {sakheli: ‘mate’, ‘gvari’: ‘gotua’}, მოახდინეთ ამ ობიექტზე მანიპულირება,
 მაგ. დაამატეთ ახალი მონაცემი გარდა ამისა წაშალეთ რაიმე მონაცემი და ასევე არსებულ ობიექტში ჩაანაცვლეთ რაიმე ერთი მონაცემი მეორეთი,
 ეს მოქმედებები განახორციელეთ თანმიმდევრულად.
*/

let object = {
  name: "Otar",
  lastName: "Gvritishvili",
  workplace: "Skyz",
  professionalActivity: "CEO of Skyz"
};

object.nickname = "O.G.";

delete object.workplace;

object.professionalActivity = "Frontend developer";

console.log(object);
