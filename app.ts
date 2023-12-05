let personName = "ZIA ul haq";
//Turn the string to upper case
console.log(personName.toUpperCase());

//to Lower Case
console.log(personName.toLowerCase());

//for Title case
const newName = personName
  .toLowerCase()
  .split(" ")
  .map((l: string) => l[0].toUpperCase() + l.substr(1))
  .join(" ");
console.log(newName);
