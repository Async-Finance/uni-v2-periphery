# Setup
Create a file `.env`
```
SECRET_KEY=YOUR_WALLET_SECRET_KEY
```

# Compile
`yarn compile`

# Test
TODO...

# Deploy
## Deploy UniswapV2Router02.sol
Change the `factory` Param in `ignition/parameters.json`.
Change the `wrapToken` Param in `ignition/parameters.json`.
```
yarn deploy
```

# Deploy zksync

Change default network to any zksync network(eg. zkSyncTestnetSepolia) in `hardhat.config.ts`

add `FACTORY` and `WRAP_TOKEN` in `.env`, here is an example on merlin testnet 
```dotenv
FACTORY=0x4dE50c6F67ED76683a2E5A3abB0A88d3b18a1420
WRAP_TOKEN=0x319613a9b3839a47793990f86A39FdCeB6302d98
```

```
yarn deploy-zksync
```




Forked from [Uniswap v2-periphery](https://github.com/Uniswap/v2-periphery)
Make some changes

* Merge all solidity file into one file.
* Get pair by call factory contract function `getPair` instead of using init code hash