/*
Below are the DFS(Depth-first search steps for the given given data structure).
Step 1
20 will be put in Stack.
20 will be marked visited.
S = [20]
Visited = {
    20: true
}
Step 2
20 will be popped.
We will explore all the neighbours of node 20.
30(since not visited) will be put in Stack and marked visited.
50(since not visited) will be put in Stack and marked visited.

Q = [20, 30, 50];
Visited = {
    20 : true,
    30: true,
    50: true
}
Step 3
10 will be dequeued from the Queue.
We will explore all the neighbours of node 10. But since there is no neighbour nothing will be updated.
Q = [30];

*/