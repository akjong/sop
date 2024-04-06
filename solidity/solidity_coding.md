# Solidity Coding SOP

## Security Best Practice

### Accuracy issues

* erroneous rounding up: may result in parameters that should be 0 being rounded up to 1, leading to serious vulnerabilities in subsequent calculations.
* rounding errors: particular severity observed in projects that incorrectly utilize the rayDiv function.

### How to

* Regarding the first type, if the project logic necessitates rounding up operations, conduct extensive and diverse testing with rounding variables set to 1 or 0, among other conditions, to ensure accuracy.
* For the second type, a unified precision approach can be implemented by multiplying before dividing, for instance, using 10**18 as a suffix for the decimal portion.
* In either case, thoroughly test the computational logic, considering every possible scenario. Particularly, when different handling logics are required for distinct calculation results, careful testing becomes crucial. Theoretically designed logic should align seamlessly with the practical implementation of the code, subjecting smart contract functions to comprehensive testing without any blind spots. If test cases cover various scenarios, it is likely to prevent security issues arising from precision calculations.

## Refs

* Coinbase solidity style guide: <https://github.com/coinbase/solidity-style-guide>
