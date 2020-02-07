
function isArr(arr){
    if(typeof arr === Array){
        return true
    }
    else {
        return false
    }
}

function firstElements(arr, n){
    newarr = arr.slice(0, n)
    return newarr
}

function joinElements(arr){
    newstr = join(arr)
    return newstr
}

function insDashes(num){
    newstr = (num).toString()
    newarr = newstr.split("")
    secstr = newarr.join("-")
    return secstr

}

function sortArr(arr){
    newarr = arr.sort();
    return newarr
}

function mostCom(arr){

    let result,  
    best = -1,   
    lookup = {}; 
    
    for(let i = 0; i < arr.length; i++){ 
       
       
       if (lookup[arr[i]] === undefined){
          lookup[arr[i]] = 0;
       } 
       lookup[arr[i]]++; 
       if(lookup[arr[i]] > best){ 
          best = lookup[arr[i]];
          result = arr[i]
       }
    }
    
    return result; 
 };

function swapString(str){
 newstr = ""
 str.forEach(function{
     if(str === str.toLowerCase(){
          newstr.push(str.toUpperCase())
     })
     else{
         newstr.push(str.toUpperCase())
     }
 })
}
    





 function removeDupes(arr){
    let newarr = []
    for (let i = 0; i < arr.length; i++){
        if(newarr.includes(arr[i])){
            continue
        }
        else{
            newarr.push(arr[i])
        }
    }
    return newarr
 }


 
