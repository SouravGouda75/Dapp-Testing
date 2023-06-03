// SPDX-License-Identifier: UNLICENSED 



	pragma solidity ^0.8.0;

	contract Bank{
		string public user="Noobde!!";
		function PAY(address payable to) public payable{
		require(	to.send(msg.value),'Transaction Failed');
		}
		function userBalance()public view returns(uint)
		{
			return address(this).balance;
			}

		function show() public view returns(string memory)
		{
			return user;
		}
			
	}