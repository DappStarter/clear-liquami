require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame tone strategy cruise shift promote hope end army genre'; 
let testAccounts = [
"0x8251945c392c711de0d785b8a2c7de2e5dc0bd1e171096868eee70c71b62eda3",
"0x39ac4d8d8c9c8dacd54ca31033ce6c9270388d3cf82ba1363190c74703dcfe03",
"0xa6c68a2bae0355b7d5fd488f80511852397fdb3c187bd8561f5021bdff9eab9d",
"0x0b0ab24a6c703af4262eb075695a6bbd5b6a3e0eb56a3e48d288ade473844968",
"0x397f47fa8e00cb3922a9e48c4af6d20d2d2e3b715e4e422b67aedd26ef50318d",
"0x6b3f77671abf6ad293e328b0e896b38113dbf438a1c2241b5b721bf23051a65b",
"0xf786bc95cef9183f285f048608d6ded8c4a696a38d3bc3e134484700a8a78e0c",
"0x28b3936b6daf54496f64a20ab834e90d5c06600b4c67e41c7ce115a04f20ebd0",
"0x89a30ace1e5378698b80e679466bef884a4970052e85a0176e1a13b5de616d0c",
"0xd5f7a4bacda9969987ab5176f761648f10dec059420e76da73df237c9a19a314"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
