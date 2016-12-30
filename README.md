# newton-lib-js
## A small library for advanced math.
By Gerald Nash

#### LIBRARY
______________________________________________
**newton.simplify**

*Simplify the given expression*
```
newton.simplify('x + x + 2 * 8')
returns
2x + 16
```
Argument(s): a string of the expression that is to be simplified

Return: A string of the simplified expression

**newton.factor**

*Factor the given expression*
```
newton.factor('x^2 - 1')
returns
(x - 1) (x + 1)
```
Argument(s): a string of the expression that is to be factored

Return: A string of the factored expression

**newton.zeroes**

*Find the x values at which the function expression is equal to 0*
```
newton.zeroes('x^2 - 1')
returns
[1, -1]
```
Argument(s): a string representation of the function of which the zeroes are to be found

Return: An array of the zeroes of the function

**newton.derive**

*Find the first derivative of the function expression*
```
newton.derive('x^2')
returns
2 x
```
Argument(s): a string representation of the function to be differentiated

Return: The first derivative of the given function expression

**newton.integrate**

*Find an integral of the function expression*
```
newton.integrate('x^2')
returns
1/3 x^3
```
Argument(s): a string representation of the function to be integrated

Return: A string representation of an integral of the given function expression

**newton.tangent**

*Find the tangent line of a function at a given x value*
```
newton.tangent('x^2', 1)
returns
2 x + -1
```
Argument(s): 1. a string representation of the function on which the tangent is to be found 2. a number representing the x value at which to find the tangent of the function

Return: A string representation of the tangent function expression

**newton.areaUnder**

*Find area under a given function between two x values*
```
newton.areaUnder('x^2', { start: 1, finish: 3})
returns
8
```
Argument(s): 1. a string representation of the function under which the area is to be found 2. an object with properties *start* and *finish* representing the x values between which the area will be found under the function

Return: A number representation of the area under the given function between the two x values
