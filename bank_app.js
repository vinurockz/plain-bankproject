class Bank {

    static getAccountDetails() {
        var account_details = {
            1000: { name: "ajay", accno: 1000, password: "testone", amount: 5000 },
            1001: { name: "vijay", accno: 1001, password: "testtwo", amount: 3000 },
            1002: { name: "ram", accno: 1002, password: "testthree", amount: 7000 },
            1003: { name: "ravi", accno: 1003, password: "testfour", amount: 10000 },

        }
        return account_details
    }
    static authenticate(accno, password) {
        let account_details = Bank.getAccountDetails();
        if (accno in account_details) {
            if (password == account_details[accno]["password"]) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else {
            return 0;
        }

    }

    static login() {
        var accno = document.querySelector('#accnotext').value;
        var pwd = document.querySelector('#pwdtext').value;
        var user = Bank.authenticate(accno, pwd);
        if (user == 1) {
            // swal("Click on either the button or outside the modal.")
            //     .then((value) => {
            //         window.location.href="account.html";
            //     });
            // swal("Login Success!", "You clicked the button!", "success");
            alert("Login Success");
            window.location.href="account.html";
        }
        else if (user == -1) {
            alert("Incorrect Password");
        }
        else {
            alert("Invalid Account Number");
        }
    }
    static deposit (){
        var acno = document.querySelector('#log').value
        var pwd = document.querySelector('#pass').value
        var amt=document.querySelector('#amo').value
        var user = Bank.authenticate(acno, pwd)
        let account_details = Bank.getAccountDetails();
        if (user==1){
            var bal=account_details[acno]['amount']+Number(amt);
            
            alert('Deposit successfully '+amt+'\n'+'Available balance='+bal);
        }
        else if (user == -1) {
            alert('invalid password');

        }
        else {
            alert('invalid account');
        }
    }
    static withdraw (){
        var acno = document.querySelector('#log').value
        var pwd = document.querySelector('#pass').value
        var user = Bank.authenticate(acno, pwd)
        let account_details = Bank.getAccountDetails();
        var amt=Number(document.querySelector('#amo').value)
        if (user==1){
            if (account_details[acno]['amount']>=amt) {
                var bal=account_details[acno]['amount']-Number(amt);
                alert('Withdrawal successfully '+amt+'\n'+'Available balance='+bal);
            }
            else {
                alert('insufficient balance')
            }
          
        }
        else if (user == -1) {
            alert('invalid password');

        }
        else {
             alert('invalid account');
        }
        
        
    }   
}