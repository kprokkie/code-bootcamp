// undirected unweighted graph 
// using adjacency list via hash table

class Graph {

    constructor() {
        this.vertexCount = 0;
        this.adjacencyList = {
        };
    }

    addVertex (vertex) {
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

    print()  {
        let vertices = Object.keys(this.adjacencyList);
        vertices.forEach((vertex) => {
            console.log('Vertex: ', vertex, ' --> ', ...this.adjacencyList[vertex]);
        });
    }
}

const graph = new Graph();
graph.addVertex('0');
graph.addVertex('1');
graph.addVertex('2');
graph.addVertex('3');
graph.addVertex('4');
graph.addVertex('5');
graph.addVertex('6');
graph.addEdge('3', '1');
graph.addEdge('3', '4');
graph.addEdge('4', '2');
graph.addEdge('4', '5');
graph.addEdge('1', '2');
graph.addEdge('1', '0');
graph.addEdge('0', '2');
graph.addEdge('6', '5');
graph.print();