# testnet 

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