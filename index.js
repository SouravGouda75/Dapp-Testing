// require('dotenv').config()
import { Address } from "./Env_var"
const abi = [
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "to",
				"type": "address"
			}
		],
		"name": "PAY",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "show",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "user",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "userBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
// const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3' // hardhat LocalHost
const address=Address  //Alchemy API-KEY 

const bala = document.querySelector("#bala")
const bala_address = document.querySelector("#bala-address")

// const url='http://127.0.0.1:8545/'
const Provider=()=>{
	// new ethers.providers.Web3Provider(window.ethereum)
	// return new ethers.providers.JsonRpcProvider(url)
	return new ethers.providers.Web3Provider(window.ethereum)
}
const Contract=()=>{
	// const provider = new ethers.providers.Web3Provider(window.ethereum)
	const provider = Provider()
		 
	const signer = provider.getSigner()
	return new ethers.Contract(address, abi, signer)
}



const load = async () => {
	const provider = Provider();
	const contract=Contract();
	await window.ethereum.request({ method: 'eth_requestAccounts' })
	// 	; const signer = provider.getSigner()
	// const contract = new ethers.Contract(address, abi, signer)
	// const balance = await contract.userBalance()
	console.log(await contract.show())
	bala_address.innerHTML=`Address: ${await provider.getSigner().getAddress()}`
	bala.innerHTML = `Balance: ${(ethers.utils.formatEther(await provider.getBalance(provider.getSigner().getAddress())))}`
}
const form = document.querySelector('.box');


const handleIt = async(e) => {
	e.preventDefault()
	const address=document.querySelector('#address')
	const amount=document.querySelector('#amount')
	await payup(address.value,amount.value)
	address.value=''
	amount.value=''
}

const payup=async(address,amount)=>{
	// const str=amount.toString()
	console.log(address.toString(),amount.toString());
	const contract=Contract()
	await contract.PAY(address,{value:ethers.utils.parseEther('0.001')})
	window.location.reload(1)
}

form.addEventListener('submit',(e)=> handleIt(e))


load()
console.log('process.env');