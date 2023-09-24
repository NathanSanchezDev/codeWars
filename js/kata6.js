//Question:
/*A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

Examples:
- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 co
(Condition 2) not fulfilled).*/

//Solution:
function bouncingBall(h, bounce, window) {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
      return -1; 
    }
    let seenCount = 0;
    while (h > window) {
      seenCount++;
      h *= bounce;
      if (h > window) {
        seenCount++; 
      }
    }
    return seenCount;
  }
  /*
  Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/
//Solution:
function sortArray(arr) {
  const oddNumbers = arr.filter(num => num % 2 !== 0).sort((a, b) => a - b);
  let oddIndex = 0;
  const result = arr.map(num => {
    if (num % 2 !== 0) {
      const sortedOdd = oddNumbers[oddIndex];
      oddIndex++;
      return sortedOdd;} else {
      return num;}
  });return result;}
/*
Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of 
�
3
n 
3
 , the cube above will have volume of 
(
�
−
1
)
3
(n−1) 
3
  and so on until the top which will have a volume of 
1
3
1 
3
 .

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as 
�
3
+
(
�
−
1
)
3
+
(
�
−
2
)
3
+
.
.
.
+
1
3
=
�
n 
3
 +(n−1) 
3
 +(n−2) 
3
 +...+1 
3
 =m if such a n exists or -1 if there is no such n.

Examples:
findNb(1071225) --> 45

findNb(91716553919377) --> -1
*/
  //solution:
  function findNb(m) {
    let sum = 0;
     let n = 1;
     while (sum < m) {
       sum += Math.pow(n, 3);
       if (sum === m) {
         return n;
       }
       n++;
     }
     return -1;
   }
   