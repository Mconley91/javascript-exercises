const removeFromArray = function(arr,...toBeRemoved) {
    //return arr.filter((item)=> item != toBeRemoved); passes first test
    let newarr = [];
    outer: for (let i = 0; i < arr.length; i++){
    for(let j = 0; j < toBeRemoved.length; j++){
        if(arr[i] === toBeRemoved[j]){
            continue outer;
        };
    };
    newarr.push(arr[i]);
   }
   console.log(newarr);
   return newarr;
};


// Do not edit below this line
module.exports = removeFromArray;
