function digitSum(k){
    if(k>0){
        k=k%10+digitSum(Math.floor(k/10));
    }
    return k;
}
console.log(digitSum(234));