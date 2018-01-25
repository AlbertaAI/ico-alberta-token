const AlbertaCrowdsale = artifacts.require("./AlbertaCrowdsale.sol")

module.exports = function(deployer, network, accounts) {
  // const startTime = web3.eth.getBlock(web3.eth.blockNumber).timestamp + 1 // one second in the future
  const startTime = 1516836882
  const endTime = startTime + (86400 * 20) // 20 days
  // const startTime = Date.now()
  // const endTime = 1616835247
  const rate = new web3.BigNumber(1000)
  const wallet = accounts[0]

  deployer.deploy(AlbertaCrowdsale, startTime, endTime, rate, wallet)
};
