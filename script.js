//array of clients
let clients = [
    {
        name: 'Bill Llib Inc',
        type: 'license',
        number: 101,
        addresses: ['123 fake street', '456 desk street'],
        accounts : [1,3],
        phone: 1234567890
    },

    {
        name: 'Spoon Noops Co',
        type: 'license',
        number: 202,
        addresses: ['321 fork street'],
        accounts: [2,3],
        phone: 0987654321
    },

    {
        name: 'Pen Nep Inc',
        type: 'license',
        number: 303,
        addresses: ['543 real street'],
        accounts: [4],
        phone: 0001112222
    }
];

//array of clients' accounts 
let accounts = [
    {
        number : 1,
        owners : [101],
        date_issued: '01/15',
        type: 'Credit Card',
        expiry: '07/18',
        ccv: 021
    },
    {
        number : 2,
        owners : [202],
        date_issued: '01/15',
        type: 'Checking',
        bank_issued: 'NY Bank',
        routing: 123456789
    },
    {
        number : 3,
        owners : [101, 202],
        date_issued: '03/15',
        type: 'Saving',
        bank_issued: 'NJ Bank',
        routing: 123456789,
        balance: 99999
    },
    {
        number : 4,
        owners : [303],
        date_issued: '05/15',
        type: 'Checking',
        bank_issued: 'PA Bank',
        routing: 12345321
    }
];

//A. function that retrieves the first address of a client
function getFirstAddress(name){
    let client = clients.find(client => client.name === name );
    return client.addresses[0];
}

console.log(getFirstAddress('Bill Llib Inc'));

//B. function that returns all Checking accounts & D. generic version
function getAccountByType(type){
    let bankTypes = accounts.filter(acct => acct.type === type );
    return bankTypes;
}

console.log(getAccountByType('Checking'));

//C. function that copies and replaces all info from one acct to another
function copyAccount(arr,x){
    let copy = Object.assign({}, arr[x]);
    return copy;
}

accounts.push(copyAccount(accounts,1));

console.log(accounts);

