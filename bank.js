var account_details={
    1000:{name:"ajay", accno:1000, password:"testone",amount:5000},
    1001:{name:"vijay", accno:1001, password:"testtwo",amount:3000},
    1002:{name:"ram", accno:1002, password:"testthree",amount:7000},
    1003:{name:"ravi", accno:1003, password:"testfour",amount:10000},

}

function authenticate(accno,password){
    if(accno in account_details){
        if(password==account_details[accno]["password"]){
            return 1;
        }
        else{
            return -1;
        }
    }
    else{
        return 0;
    }

}

var accno=1000;//document.querySelector('#accnotext').value;
var pwd="testone";//document.querySelector('#pwdtext').value;
var user=authenticate(accno,pwd);
if(user==1){
    console.log("Login success");
}
else if(user==-1){
    console.log("Incorrect Password");
}
else{
    console.log("Invalid Account Number");
}