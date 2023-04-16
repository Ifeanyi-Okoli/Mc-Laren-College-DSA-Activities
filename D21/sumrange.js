Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

Note: If no node value lies in given range then return 0.

Input:
    4
   / \
  2   6
 / \ 
1   3
Low: 1
High: 3


Output: 6 (1 + 2 + 3)

Input:
    14
   / \
  12   16
 / \    \
1   13    18
Low: 16
High: 18

Output: 34 (18 + 16)

Input:
    14
   / \
  12   16
 / \    \
1   13    18
Low: 12
High: 16

Output: 55 (12 + 13 + 14 + 16)
function sumRange(root, low, high) {
    // write your code here
}