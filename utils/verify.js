const { run } = require("hardhat")
async function verify(contractAddress, args) {
    console.log(`Veryfying '${contractAddress}' contract...`)
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already verified")
        } else {
            console.log("Error while verifing : " + e)
        }
    }
}

module.exports = { verify }
