const ironhack = new Promise(function(resolve, reject) {  
  if (/* condition */) {
     resolve(/* value */);  // fulfilled successfully
  }
  else {
     reject(/* reason */);  // error, rejected
  }
});

const ironhack = Promise.resolve(42);

const p = new Promise((resolve, reject) => resolve("Ironhack"));  
p.then((val) => console.log(val)); // Ironhack  

p.then((val) => console.log("fulfilled:", val),  
       (err) => console.log("rejected: ", err));

 p.then((val) => console.log("fulfilled:", val))  
 .catch((err) => console.log("rejected:", err));

p.then((val) => console.log("fulfilled:", val))  
 .then(null, (err) => console.log("rejected:", err));

 const p1 = new Promise((resolve, reject) => {  
  if (true)  
    throw new Error("rejected!"); 
  else
    resolve(4);
});

p1.then((val) => val + 2)  
 .then((val) => console.log("got", val))
 .catch((err) => console.log("error: ", err.message));
// => error: rejected!


const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
}); 

Promise.all([p1, p2, p3]).then(values => { 
  console.log(values); // [3, 1337, "foo"] 
});

Promise.all([
  new Promise(resolve => setTimeout(resolve, 1500)),
  new Promise(resolve => setTimeout(resolve, 900)),
  new Promise(resolve => setTimeout(resolve, 2200))
])
.then(results => results.length.b.c)
.then(c => console.info(c))
.catch(err => console.error(err))