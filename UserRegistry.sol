// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserRegistry {
    struct UserInfo {
        string name;
        uint256 phoneNumber;
    }

    mapping(uint256 => UserInfo) public users;
    uint256 public nextUserId = 1;

    event UserRegistered(uint256 userId, string name, uint256 phoneNumber);

    function registerUser(string memory _name, uint256 _phoneNumber) external {
        users[nextUserId] = UserInfo(_name, _phoneNumber);
        emit UserRegistered(nextUserId, _name, _phoneNumber);
        nextUserId++;
    }

    function getUserInfo(uint256 _userId) external view returns (string memory, uint256) {
        UserInfo memory user = users[_userId];
        return (user.name, user.phoneNumber);
    }
}
