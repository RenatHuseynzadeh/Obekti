const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]


for(let i = 0; i < n.length; i++){
    if(i%3==0 && i%5==0){
        console.log("fizzbuzz");
    } else if(i%3==0){
        console.log("fizz");
    } else if(i%5==0){
        console.log("buzz");
    } else{
        console.log(i);
    }
    
    
}