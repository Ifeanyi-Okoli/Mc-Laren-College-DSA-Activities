/*

Below are the BFS(Breadth-first search steps for the given given data structure).
    Step 1
        20 will be enqueued in Queue.
        20 will be marked visited.

    Q = [20]
    Visited = {
        20: true
    }

    Step 2
        20 will be dequeued from the Queue.
        We will explore all the neighbours of node 20.
        30 (since not visited) will be enqueued into Queue and marked visited.
        50 (since not visited) will be enqueued into Queue and marked visited.

    Q = [30, 50];
    Visited = {
        20: true,
        30: true,
        50: true
    }
    
    Step 3
        30 will be dequeued from the Queue.
        We will explore all the neighbours of node 30.
        6 (since not visited) will be enqueued into Queue and marked visited.
        40 (since not visited) will be enqueued into Queue and marked visited.

    Q = [50, 6, 40];
    Visited = {
        20: true,
        30: true,
        50: true,
        6: true,
        40: true
    }

    Step 4
        50 will be dequeued from the Queue.
        We will explore all the neighbours of node 50.
        40 (since already visited, will be skipped).
        15 (since not visited) will be enqueued into Queue and marked visited.

    Q = [6, 40, 15];
    Visited = {
        20: true,
        30: true,
        50: true,
        6: true,
        40: true,
        15: true
    }

    Step 5
        6 will be dequeued from the Queue.
        We will explore all the neighbours of node 6. But since there is no neighbour nothing will be updated.
        

    Q = [40, 15];
    Visited = {
        20: true,
        30: true,
        50: true,
        6: true,
        40: true,
        15: true
    }

    Step 6
        40 will be dequeued from the Queue.
        We will explore all the neighbours of node 40. But since there is no neighbour nothing will be updated.
        
    Q = [15];
    Visited = {
        20: true,
        30: true,
        50: true,
        6: true,
        40: true,
        15: true
    }

    Step 7
        15 will be dequeued from the Queue.
        We will explore all the neighbours of node 15. But since there is no neighbour nothing will be updated.
        
    Q = [];
    Visited = {
        20: true,
        30: true,
        50: true,
        6: true,
        40: true,
        15: true
    }

    Step 8
    Since Queue(Q) is empty now program will stop.
*/