pragma solidity ^0.5.0;

import "./Libraries/token/ERC20/ERC20.sol";
import "./Libraries/token/ERC20/ERC20Detailed.sol";
import "./Libraries/token/ERC20/ERC20Burnable.sol";
import "./Libraries/token/ERC20/ERC20Mintable.sol";

contract ODNERC20 is ERC20, ERC20Detailed, ERC20Burnable, ERC20Mintable {
    constructor(
        string memory name, 
        string memory symbol,
        uint8 decimals, 
        uint256 initialSupply
    ) public ERC20Detailed(name, symbol, decimals) {
        _mint(tx.origin, initialSupply * (10**uint256(decimals)));
    }

    function transferOD (address recipient, uint256 amount) public {
        super.transfer(recipient,amount);
    }

}