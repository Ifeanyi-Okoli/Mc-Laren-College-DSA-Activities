// Cheapest Route
// Allowed Time: 50 mins

// There are n cities connected by some number of routes. You are given an array routes where routes[i] = [fromi, toi, pricei] indicates that there is a route from city fromi to city toi with cost pricei.

// You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.

// Examples
// Example 1:



// Input: n = 4, routes = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
// Output: 700
// Explanation:
// The graph is shown above.
// The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
// Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.
// Example 2:



// Input: n = 3, routes = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
// Output: 200
// Explanation:
// The graph is shown above.
// The optimal path with at most 1 stop from city 0 to 2 is marked in red and has cost 100 + 100 = 200.
// Example 3:



// Input: n = 3, routes = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0
// Output: 500
// Explanation:
// The graph is shown above.
// The optimal path with no stops from city 0 to 2 is marked in red and has cost 500.


function cheapestRoute(routes, src, dst, k) {
    let cost = 0;
    let costArr = [];
    for (let i = 0; i < routes.length; i++) {
        let curr = routes[i];
        let next = routes[i+1];
        if (k === 0) {
            if (curr[0] === src && curr[1] === dst) {
                cost += curr[2];
                return cost
            }
        }
        else if (k === 1) {
            if (curr[0] === src && curr[1] === dst) {
                cost += curr[2];
                costArr.push(cost);
            }
            if(curr[0] === src && curr[1] === dst){
                cost+= curr[2];
                src = curr[1];
                if(next[0] === src && next[i]=== dst){
                    cost+= next[2];
                    costArr.push(cost);
                }
            }
            let minCost = Math.min(...costArr);
            return minCost;
        }
    }

}


// Input: n = 3, routes = [[0, 1, 100], [1, 2, 100], [0, 2, 500]], src = 0, dst = 2, k = 0

// Input: n = 3, routes = [[0, 1, 100], [1, 2, 100], [0, 2, 500]], src = 0, dst = 2, k

// Input: n = 4, routes = [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], src = 0, dst = 3, k = 1 = 1

console.log(cheapestRoute([[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 0));
console.log(cheapestRoute([[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], 0, 3, 1));
// console.log(cheapestRoute([[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], 0, 3, 1));

// [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1