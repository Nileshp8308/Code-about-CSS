function xyz(){
    let a=['nilesh','shubham','sonu','prachi'];
    let b=[];
    a.forEach(items=>{
        if(items !='sonu'){
            b.push(items);
        }
        console.log(b);
    })
}