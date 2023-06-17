// 2
let aaa = ["alon", 1]
let h = "Hello "
let b = "bye "

if(aaa[1] == 1){
    console.log(h + aaa[0]);
} else if(aaa[1] == 0){
    console.log(b + aaa[0]);

}

// 3
const prob = [1, 2, 3]
const prob11 = [1, 2, 3]
const prob2 = prob.reverse()
const prob3 = prob2.join("")
const prob4 = prob11.join("")

if(prob3 == prob4){
    console.log(true);
} else{
    console.log(false);
}

// 5
let kolvoTrue = 0
let ft = [true, false, true, true, false]
for(let i in ft){
    if(ft[i] == true){
        kolvoTrue += 1
    }
}  

console.log(kolvoTrue);
