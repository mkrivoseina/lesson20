console.log("The perfect numbers between 1 and 500 are:");
for (let i = 1; i <= 500; i++) {
    let perfectNum = 0;
    for(let j = 1; j < i; j++){
           if( i % j === 0 ){
                  perfectNum += j;
           }
    }  
    if(perfectNum === i){
           console.log(i);
    }
}