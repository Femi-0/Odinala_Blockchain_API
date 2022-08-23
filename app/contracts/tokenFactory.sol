pragma solidity ^0.5.0;

import "./ODNERC20.sol";

contract tokenFactory {

    event listT (address[]);
    event balz (uint256);

    address[] tokenAddress;

    function deploy20Contract(
        string calldata name,
        string calldata symbol,
        uint8 decimals,
        uint256 initialSupply
    ) external returns (ODNERC20 creditsAddress) {

        ODNERC20 newCredits = new ODNERC20(
            name,
            symbol,
            decimals,
            initialSupply
        );

        tokenAddress.push(address(newCredits));
        return newCredits;
    }

    function transferODN (ODNERC20 tkn ,address to, uint256 amount) external {
        ODNERC20 tokens = tkn;
        tokens.transferOD(to,amount);
    }

    function balODN (ODNERC20 tkn ,address owner) external {
        ODNERC20 tokens = tkn;
        uint256 bal = tokens.balanceOf(owner);
        emit balz(bal);
    }

    function listTokens () external {
        emit listT(tokenAddress);
    }

}