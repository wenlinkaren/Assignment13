const bankAccount = function (ownerName) {
    let balance = Number();
    let owner = ownerName;

    const _isPositive = function(amount) {
        let isPositive = amount > 0;
        if (!isPositive) {
            console.error('Amount must be positive!');
            return false;
        }
        return true;
    }

    const _isAllowed = function(amount) {
        if (!_isPositive(amount))
        return false;

        let isAllowed = balance - amount >= 0;
        if (!isAllowed) {
            console.error('You have insufficent funds!');
            return false;
        }
        return true;
    }

    return {
        deposit: function(depositAmount) {
            if (_isPositive(depositAmount)) {
                balance += Number(depositAmount);
                console.log(`${ownerName} has deposited $${depositAmount}, new balance is $${balance}.`);
                return true;
            }
            return false;
        },
        withdrawal: function(withdrawalAmount) {
            if (_isAllowed(withdrawalAmount)) {
                balance -= Number(withdrawalAmount);
                console.log(`${ownerName} has withdrawn $${withdrawalAmount}, new balance is $${balance}.`);
                return true;
            }
            return false;
        },
        getBalance: function() {
            return document.getElementById('display').innerHTML = `${ownerName}'s new balance is $${balance}.`;
        },
        getOwnerName: function() {
            //this.owner = prompt('Please enter your name');
            ownerName = prompt('Please enter your name')
            console.log(ownerName);
            return ownerName;
        }
    }

};

window.addEventListener('load', () =>{
    document.getElementById('name').addEventListener('click', () => {
        newBankAccount = bankAccount();
        newBankAccount.getOwnerName();
    
        document.getElementById('deposit').addEventListener('click', () => {
            newBankAccount.deposit(prompt('Please enter the number of deposit'));
            newBankAccount.getBalance();  
        });    
        document.getElementById('withdrawal').addEventListener('click', () => {
            newBankAccount.withdrawal(prompt('Please enter the number of withdrawal'));   
            newBankAccount.getBalance();  
        });
    });
});