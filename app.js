document.addEventListener('DOMContentLoaded', async () => {
    const alchemyApiKey = '1tr7wfyV4UuSS6EG7ha2tS9UvIhuZv8J';
    const contractAddress = '0x613572850f79E609cBa189e556B3435Ff248E0Ce';
    const contractAbi = [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "userId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "phoneNumber",
                    "type": "uint256"
                }
            ],
            "name": "UserRegistered",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_userId",
                    "type": "uint256"
                }
            ],
            "name": "getUserInfo",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "nextUserId",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_phoneNumber",
                    "type": "uint256"
                }
            ],
            "name": "registerUser",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "users",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "phoneNumber",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];

    const web3 = new Web3(`https://eth-sepolia.g.alchemy.com/v2/1tr7wfyV4UuSS6EG7ha2tS9UvIhuZv8J`);
    const contract = new web3.eth.Contract(contractAbi, contractAddress);

    async function getUserInfo(userId) {
        try {
            const result = await contract.methods.getUserInfo(userId).call();
            return result;
        } catch (error) {
            console.error('Error retrieving user information:', error);
            return null;
        }
    }

    const userId = 1;
    const userInfo = await getUserInfo(userId);

    if (userInfo) {
~``        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = `<p>User Information:</p>
                               <p>Name: ${userInfo[0]}</p>
                               <p>Phone Number: ${userInfo[1]}</p>`;
    }
});