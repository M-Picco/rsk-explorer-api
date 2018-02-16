const Web3 = require('web3')


function web3Connect () {
  return new Web3(
    new Web3.providers.HttpProvider(
      'http://165.227.190.130:4444'
    )
  )
}

const web3 = web3Connect()

if (web3.isConnected()) {
  console.log('web3 is connected')
  web3.eth.isSyncing(function (err, sync) {
    console.log('callback')
    console.log(err, sync)
  })
} else {
  console.log('web3 is not connected')
}