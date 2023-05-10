const person = {
  name: "priya",
  age: 10,
  hobbies: {
    read: true,
    playGame: true,
  },
};
const {
  name,
  hobbies: { read, playGame },
} = person;
console.log(name);
console.log(read);
