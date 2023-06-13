console.clear();

console.log(`labas`);

// let a = Math.floor(Math.random() * (max - min + 1) + min);

// 1 uzdavinys
console.log(`====1 uzdavinys=====`);

let walletlenght = Math.floor(Math.random() * (30 - 10 + 1) + 10);

let wallet = [];

for (let i =0; i < walletlenght; i++){
    wallet.push(Math.floor(Math.random() * (10 - 0 + 1) + 0));
}

console.log(wallet);

console.log(`====2 uzdavinys=====`);

let sum = 0;
for (let i =0; i < wallet.length; i++){
    sum += wallet[i];
}
console.log(sum);

console.log(`====3 uzdavinys=====`);

let sumWithoutOne = 0;
for (let i =0; i < wallet.length; i++){
    if(wallet[i]<=2){
        continue;
    }
    sumWithoutOne += wallet[i];
}

console.log(sumWithoutOne);

console.log(`====4 uzdavinys=====`);

for (let i =0; i < wallet.length; i++){
    if(wallet[i]<=2){
        wallet[i] = 0;
    }
}

console.log(wallet);

console.log(`====5 uzdavinys=====`);

let bigest = -Infinity;
let countTime = 0;


for (let i =0; i < wallet.length; i++){
    if(wallet[i] > bigest){
        bigest = wallet[i];
    }
}

for (let i =0; i < wallet.length; i++){
    if(wallet[i]=== bigest){
        countTime++;
    }
}

console.log(`Didziausias skaicius `+ bigest + ` ir kartojasi ` +  countTime + ' kartu');



