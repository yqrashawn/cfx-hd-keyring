const Keyring = require('../../');

(async function() {
  console.log('mnemonic,private key, address');

  const keyrings = []
  for (let i = 0; i < 10; i++) {
    const keyring = new Keyring();
    keyring.addAccounts()
    console.log(`${ keyring.mnemonic }, 0x${keyring.wallets[0].privateKey.toString('hex')},0x${keyring.wallets[0].getAddress().toString('hex')}`)
  }
})();