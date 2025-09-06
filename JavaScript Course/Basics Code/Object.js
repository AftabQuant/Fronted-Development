// Object is the kind of like map/dictionary where we have key-value pairs

let obj = {
    name: "Aftab",
    age: 21,
    dept: "CSE-DS",
    roll: "22/cse-ds/032"
}


console.log(obj)
console.log(obj.name)
console.log(obj['name'], "uddin");
console.log(obj.dept)
console.log(obj.roll)

obj.name = "aftab uddin";
console.log(obj.name);

// for in loop

for (const key in obj) {
    console.log(`${key} : ${obj[key]}`);
}