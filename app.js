const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());


app.get('/add-points', (req, res, next) => {
    contract.methods.getPoints().call().then(e => res.send(e))
})

app.get('/get-points', (req, res, next) => {
    const points = req.params.query.points;
    console.log('Player Sent: ', points);
    contract.methods.setPoints(points).send({from:'0x1096bdde267b2016add4d88560da83dc67a47e13'}).then( e => res.send('points sent'))
})


const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');

// web3.eth.getAccounts().then( e => console.log(e));

const contract = new web3.eth.Contract(
    [{"constant":false,"inputs":[{"name":"_points","type":"uint256"}],"name":"addPoints","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getPoints","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],
    '0xb8593dc2dde76515a4226a032e7fb0567fdefb5c',
    {
      from: '0x1096bdde267b2016add4d88560da83dc67a47e13', 
      data: '0x606060405260008055341561001357600080fd5b60db806100216000396000f3006060604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806312fb1cbd14604e578063f4b7095b14606e575b600080fd5b3415605857600080fd5b606c60048080359060200190919050506094565b005b3415607857600080fd5b607e60a6565b6040518082815260200191505060405180910390f35b80600080828254019250508190555050565b600080549050905600a165627a7a723058207fef0175578cd9f41c6df23235140aad241aa4e876f48e4924937dd494b65d770029', 
      gas: '4700000'
    }
)

// contract.deploy().send();
contract.methods.getPoints().call().then(e => console.log(e))
// contract.methods.setGreet('Iam a new setter').send('0xfbDE7a10Db5c9691f41c4366961430312b278F54').then(e => console.log(e))


app.listen(3000)