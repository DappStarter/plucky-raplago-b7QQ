require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name rice magic assault gesture derive slot gauge'; 
let testAccounts = [
"0x08a45d8de4b02580ee4c0e00c9a3c758a24fb62a875951868a591037bb7c9f5f",
"0x493119191bcde0de841f375319f5a72a095b45a5484cfe07afe0214e3aba9b85",
"0x58201d445f20c7bb713e30d2a9d9aedb298cbd836a574ef346cbf45f1a35bdd8",
"0xb06e952ac71cbf8719167b4ca4ff1d2d057e0be23da16b19be66f85675678df7",
"0x4d489c6e25ecb8dbf1e9012f05bd5c8215ae21d009695034368aacece05c2ff6",
"0xd420a89d3281b500112caccc48ed8eae619194003b085a5401c3c177b55b1675",
"0x4976ef1a9ba882f0254bf79a103ef1411e54781275bf8e75294d23952237c8f2",
"0x9424331a4f504580606ffc547334ee91577ce6897bc53be20df5b8fc3fa394ac",
"0x3b8a97988509fdd98e25c3716f3107080b16cc14ba2253ef5c453cdac9ce5178",
"0x5d68bdd1d7cd687f497639e69f229a375a0d2be834ab970cc780d762e32baee6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

