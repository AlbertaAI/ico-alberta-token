# migration
```bash
$ npm i
$ truffle compile
$ testrpc
$ truffle migrate --network dev
```
# ABI
Abi can be found in **build/contracts** directory. Pick a json file and find the **abi : []** section. Example:
```json
[
    {
      "constant": true,
      "inputs": [],
      "name": "rate",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "endTime",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
]
```
# contract interaction
open console
```bash
$ truffle console
```
Work with contract
```js
//// get the account address: 
account1 = web3.eth.accounts[1]
//// get token address:
AlbertaTokenCrowdsale.deployed().then(inst => {crowdsale = inst})
crowdsale.token().then(addr => { tokenAddress = addr})
tokenAddress
// '0x........'
//// get amount of tokens
albertaTokenInstance = AlbertaToken.at(tokenAddress)
albertaTokenInstance.balanceOf(account1).then(balance => balance.toString(10))
// '0'
//// get tokens
AlbertaTokenCrowdsale.deployed().then(inst => inst.sendTransaction({ from: account1, value: web3.toWei(5, "ether")}))
// display tokens in wei
albertaTokenInstance.balanceOf(account1).then(balance => balance.toString(10))
// display tokens in ether
albertaTokenInstance.balanceOf(account1).then(balance => account1AlbTokenBalance = balance.toString(10))
web3.fromWei(account1AlbTokenBalance, "ether")
// '5000'
```