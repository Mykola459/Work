function count(a, b, operation){
    a=Number(a);
    b=Number(b);
    if (a > 0 && b > 0){
    return operation(a,b);
    }
    }
    
    function squad(a, b){
    return a*b;
    }

    function per(a, b){
    return a+a+b+b;
    }
    var squad = count(2,5,squad);
    console.log (squad);
    var per=count(2,5,per);
    console.log(per);