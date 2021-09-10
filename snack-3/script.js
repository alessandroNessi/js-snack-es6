/**returns the element between the position a and the position b, b not included */
const splitArray = (array, a, b) => {
    //filter
    let newArray = array.filter((element,index)=>{
        if(index>=a && index<b){
            return element;
        }
    });
    
    //foreach
    // const newArray=[];
    // array.forEach((element,index) => {
    //     if(index>=a && index<b){
    //         newArray.push(element);
    //     }
    // });
    return newArray;
};
document.getElementById("calculate").addEventListener("click", ()=>{
    const resultDiv=document.getElementById("result");
    const array=document.getElementById("array").value.split(",");
    let ab = document.getElementById("ab").value.split(",");
    const a=parseInt(ab[0]);
    const b=parseInt(ab[1]);
    if(array.length>b && a<b){
        let result = splitArray(array,a,b);
        console.log(result);
        resultDiv.innerHTML=result;
    }else{
        alert(`c'è qualche errore nell'input`);
    }
});
