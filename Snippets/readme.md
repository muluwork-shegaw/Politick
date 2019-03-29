#Snippets

NOTE: The solution to these tasks has to be in a separate folder called `solution_snippets` and has to be squashed into 1 commit for each of the snippets.
You can either write code inside the html files for the appropriate snippet or create an external

##Snippet 1 - [1.html](1.html)
Change the js to be efficient in the case of a large number of todo items.

##Snippet 2 - [2.html](2.html)
Solve the lag from the huge CPU usage that occurs on mouse move (the content of the noncritical taxing task ***can't*** be changed)

##Snippet 3 - [3.html](3.html)
You will be implementing a basic case of the map-reduce pattern in programming. 
Use the built in JavaScript array functions `.map()` and `.reduce() `to solve the following problem.

Given a vector stored as an array of numbers, find the magnitude of the vector (this is similar to the function `Math.hypot()`). 
Use the standard distance formula for n-dimensional Cartesian coordinates.

####Examples 
```
magnitude([3, 4]) ➞ 5

magnitude([0, 0, -10]) ➞ 10

magnitude([]) ➞ 0

magnitude([2, 3, 6, 1, 8] ) ➞ 10.677078252031311
```
####Notes
* The array can have any length.
* The input array will contain integers (except for empty array [] ➞ 0).
* Use both .map() and .reduce().
* Don't use Math.hypot().
