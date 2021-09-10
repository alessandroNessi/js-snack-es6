const splitArray = (array, a, b) => {

    // const newArray = array
    
    const newArray=[]
    array.forEach((element,index) => {
        if(index>=a && index<=b){
            newArray.push(element);
        }
    });
    return newArray;
};
document.getElementById("calculate").addEventListener("click", ()=>{
    const resultDiv=document.getElementById("result");
    const array=document.getElementById("array").value.split(",");
    let ab = document.getElementById("ab").value.split(",");
    const a=parseInt(ab[0]);
    const b=parseInt(ab[1]);
    console.log(`array: ${array}`);
    console.log(`a:${a}`);
    console.log(`b:${b}`);
    if(array.length>b && a<b){
        console.log("chiamo la funzione");
        let result = splitArray(array,a,b);
        resultDiv.innerHTML=result;
    }
});
