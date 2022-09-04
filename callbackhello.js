//call back hell
let sanju = ()=>{
    setTimeout(() => {
        console.log("display in 2 sec")
        let roll_no = [1,2,3,4,5];
        console.log(roll_no);
    
       setTimeout(()=>{
    
        console.log("display Name")
       },2000, roll_no[1])
    
    },2000);
    }
    sanju();
    
    // sanju();
    // const cart = ["shoes", "Pants", "kurta"];
    // api.createorder(cart, function(){
    //     api.proceedToPayment(function () {
    //         api.showOrdersummary(function(){
    //             api.updateWallet()
    //             });
    //         });
    // });
    