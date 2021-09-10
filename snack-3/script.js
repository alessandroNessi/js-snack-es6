const splitArray = (array, a, b) => {
    if(a>=b){
        return;
    }
    const newArray=[]
    array.forEach(element => {
        newArray.push(element);
        a++;
        if(a==b){
            return newArray;
        }
    });
};
document.getElementById()
const result=document.getElementById("result");
const array=document.getElementById("array").value;
let ab = document.getElementById("ab").value.split(",");
const a=parseInt(ab[0]);
const b=parseInt(ab[1]);
console.log(`array: ${array}`);
console.log(`a:${a}`);
console.log(`a:${b}`);