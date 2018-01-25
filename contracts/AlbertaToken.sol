pragma solidity ^0.4.13;

import 'zeppelin-solidity/contracts/token/MintableToken.sol';

contract AlbertaToken is MintableToken {
  string public name = "Alberta AI";
  string public symbol = "ALB";
  uint8 public decimals = 18;
}
