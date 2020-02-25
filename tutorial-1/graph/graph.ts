// undirected unweighted graph 
// using adjacency list via hash table

class Graph {

    constructor() {
        this.vertexCount = 0;
        this.adjacencyList = {
        };
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            this.vertexCount++;
        }
    }

    addEdge(vertex1, vertex2) {
        if (!!this.adjacencyList[vertex1] && !!this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    print() {
        console.log(this.adjacencyList);
        let vertices = Object.keys(this.adjacencyList);
        vertices.forEach((vertex) => {
            console.log('Vertex: ', vertex, ' --> ', ...this.adjacencyList[vertex]);
        });
    }

    dfsRecursive(start) {
        let result = [];
        let visited = {};

        let helper = (vertex) => {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            this.adjacencyList[vertex].forEach(neighbour => {
                if (!visited[neighbour]) helper(neighbour);
            });
        }

        helper(start);
        return result;
    }

    dfsIterative(start) {
        if (!start) return null;

        let result = [];
        let visited = {};

        let stack = [];
        stack.push(start);
        visited[start] = true;

        while(stack.length) {
            let vertex = stack.pop();
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbour => {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    stack.push(neighbour);
                }
            }); 
        }

        return result;
    }

    bfsIterative(start) {
        if (!start) return null;

        let result = [];
        let visited = {};

        let queue = [];
        queue.push(start);
        visited[start] = true;

        while(queue.length) {
            let vertex = queue.shift();
            result.push(vertex);
            
            this.adjacencyList[vertex].forEach(neighbour => {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            }); 
        }

        return result;
    }
}

const graph = new Graph();
// graph.addVertex('0');
// graph.addVertex('1');
// graph.addVertex('2');
// graph.addVertex('3');
// graph.addVertex('4');
// graph.addVertex('5');
// graph.addVertex('6');
// graph.addEdge('3', '1');
// graph.addEdge('3', '4');
// graph.addEdge('4', '2');
// graph.addEdge('4', '5');
// graph.addEdge('1', '2');
// graph.addEdge('1', '0');
// graph.addEdge('0', '2');
// graph.addEdge('6', '5');
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');
graph.print();
console.log('DFS Recursive: ', graph.dfsRecursive('A'));
console.log('DFS Iterative: ', graph.dfsIterative('A'));
console.log('BFS Iterative: ', graph.bfsIterative('A'));