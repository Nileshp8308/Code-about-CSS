function abc(){
    let a={
        car:'alto',
        brand:'suzuki',
        model:2008,
        price:100000     
    };
    for(let xyz in a){
        if(xyz=='brand'){
            console.log(a);
        }
    }
}