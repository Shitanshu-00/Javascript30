const dogs = [
  { name: "Snickers", age: 2 },
  { name: "Hugo", age: 8 },
];
const makeGreen = () => {
  const p = document.querySelector("p");
  p.style.color = "#00aa00";
  p.style.fontSize = "50px";
};

//Regular
console.log("Hello");

//Interpolated
console.log("Hello I am a %s string!", "😊");

let val = "❤";
console.log(`Hello I am a ${val} string!`);

//Styled
console.log(
  "%c I am some great text",
  "font-size:50px; background:red; text-shadow: 10px 10px 0 blue"
);

// Warning
console.warn("OH NOOO...");

//Error
console.error(`It's an error!`);

//Info
console.info("Crocodiles eat 3-4 peoples per year");

//Testing
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "Does not contain class ouch"); //Triggers only when case fails

//Clearing
console.clear();

//Viewing DOM Elements
console.log(p);
console.dir(p); //displays an interactive list of the properties of the specified JavaScript object

//Grouping together
dogs.forEach((dog) => {
   console.log(`${dog.name} is ${dog.age} years old`);
   console.log(`${dog.name} is ${dog.age*7} years old`);
});
