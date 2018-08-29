userCard = (key) => {
    let balance = 100;
    let transactionLimit = 100;
    let historyLog = [];
    let tax = 5;
    let percent = 100;
    let fullTax = tax / percent;
    let _date = new Date().toLocaleString('en-GB');
    
historyLogFunc = (operType, number) => {
    historyLog.push({
        operationType: operType,
        credits: number,
        operationTime: _date
    });
}
    return{
        getCardOptions(){
            return{
                key, 
                balance, 
                transactionLimit,
                historyLog
            };
        },
        putCredits(numberToAdd){
            balance += numberToAdd;
            historyLogFunc('Recived Credits', numberToAdd);
        },
        takeCredits(numberToMinus){
            if(numberToMinus <= balance && numberToMinus <= balance){
            balance -= numberToMinus;
            } else {
                console.error(`Error, your transaction limit or balance should be greater than ${numberToMinus}`);
            } 
        },
        setTransactionLimit(numberToSet){
            transactionLimit = numberToSet;
            historyLogFunc('Transaction limit change', numberToSet);
        },
        transferCredits(numberToTransfer, reciever){
            let numberToTransferWithTax = numberToTransfer * fullTax + numberToTransfer;
            
            if(numberToTransferWithTax > balance && numberToTransferWithTax > transactionLimit){
                console.error('Number to transfer more than balance or limit exhausted');
            } else{
                this.takeCredits(numberToTransferWithTax);
                reciever.putCredits(numberToTransfer);
                historyLogFunc('Withdrawal with credits', numberToTransferWithTax);
            }
            
        }
    }
}

class UserAccount{
    constructor(name = 'User'){
        this.name = name;
        this.keysMax = 3;
        this.cardsArr = [];
    }
    addCard(){
        if(this.cardsArr.length > this.keysMax){
            console.error(`You already used maximum of creating cards - ${this.keysMax}`);
        } else{
            this.cardsArr.push(userCard(this.cardsArr.length + 1));
        }
    }
    getCardByKey(keyNumber){
        return this.cardsArr[keyNumber - 1];
        
    }
}

