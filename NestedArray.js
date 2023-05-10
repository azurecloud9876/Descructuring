const array = ["paaaaaa", ["keeeeee", "jeeeeeeeee", "gaeeeeeeee"]];
const [x, [y, z]] = array;
console.log(x); //paaaaaa
console.log(y); //keeeeee
console.log(z);//jeeeeeeeeee


const array1 = ["honey", "kitty", "jeev", "uriiii"];
const [a, ...b] = array1;
console.log(a);
console.log(b);
