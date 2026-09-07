---

sidebar_position: 11
title: Week 10 — Graph Theory
-----------------------------

# Week 10 — Graph Theory
---
## 1. Graph

A graph is a mathematical structure consisting of:

* **Vertices** (or nodes)
* **Edges** connecting pairs of vertices

A graph is represented as

$$
G=(V,E)
$$

where:

* $V$ is the set of vertices.
* $E$ is the set of edges.

---

## 2. Undirected Graph

In an undirected graph, an edge has no direction.

An edge connecting vertices $u$ and $v$ is written as

$$
\{u,v\}
$$

Thus,

$$
\{u,v\}=\{v,u\}
$$

---

## 3. Directed Graph

In a directed graph, every edge has a direction.

An edge from $u$ to $v$ is written as

$$
(u,v)
$$

In general,

$$
(u,v)\neq(v,u)
$$

---

## 4. Adjacent Vertices

Two vertices are **adjacent** if there is an edge connecting them.

If

$$
\{u,v\}\in E
$$

then $u$ and $v$ are adjacent.

---

## 5. Degree of a Vertex

The degree of a vertex is the number of edges incident on it.

It is denoted by

$$
\deg(v)
$$

For a directed graph:

* **In-degree** = number of incoming edges
* **Out-degree** = number of outgoing edges

---

## 6. Path

A path is a sequence of vertices connected by edges.

For example,

$$
v_1\rightarrow v_2\rightarrow v_3\rightarrow v_4
$$

represents a path from $v_1$ to $v_4$.

---

## 7. Graph Representation

Graphs can be represented using different data structures.

Common representations include:

* Adjacency matrix
* Adjacency list

---

## 8. Adjacency Matrix

For a graph with $n$ vertices, an adjacency matrix is an $n\times n$ matrix.

For an unweighted graph,

$$
A_{ij}=
\begin{cases}
1 & \text{if an edge exists from }i\text{ to }j\\
0 & \text{otherwise}
\end{cases}
$$

For an undirected graph,

$$
A_{ij}=A_{ji}
$$

so the adjacency matrix is symmetric.

---

## 9. Adjacency List

An adjacency list stores, for each vertex, the vertices directly connected to it.

For vertex $v$,

$$
Adj[v]
$$

contains its neighboring vertices.

Adjacency lists are particularly useful for sparse graphs.

---

# Breadth-First Search

## 10. Breadth-First Search

**Breadth-First Search (BFS)** explores a graph level by level.

Starting from a source vertex, BFS:

1. Visits the source.
2. Visits its unvisited neighbors.
3. Visits the unvisited neighbors of those vertices.
4. Continues until all reachable vertices are visited.

---

## 11. BFS Data Structure

BFS uses a **queue**.

The queue follows:

$$
\text{First In, First Out (FIFO)}
$$

---

## 12. BFS Traversal

A basic BFS procedure is:

1. Mark the source vertex as visited.
2. Insert it into the queue.
3. Remove a vertex from the front of the queue.
4. Visit each unvisited neighbor.
5. Mark each newly visited neighbor.
6. Insert newly visited vertices into the queue.
7. Repeat until the queue is empty.

---

## 13. BFS Levels

BFS naturally organizes vertices according to their distance from the source.

If the source is at level $0$, then:

* Its neighbors are at level $1$.
* Their unvisited neighbors are at level $2$.
* And so on.

---

## 14. BFS and Shortest Paths

In an unweighted graph, BFS can find the shortest path in terms of the number of edges from a source vertex.

If $d(v)$ denotes the distance from the source to $v$,

$$
d(v)=\text{minimum number of edges from source to }v
$$

---

# Depth-First Search

## 15. Depth-First Search

**Depth-First Search (DFS)** explores a graph by following a path as deeply as possible before backtracking.

---

## 16. DFS Data Structure

DFS can be implemented using:

* Recursion
* A stack

A stack follows:

$$
\text{Last In, First Out (LIFO)}
$$

---

## 17. DFS Traversal

A basic DFS procedure is:

1. Visit a vertex.
2. Mark it as visited.
3. Select an unvisited neighbor.
4. Continue recursively or using a stack.
5. Backtrack when no unvisited neighbor remains.

---

## 18. BFS vs DFS

| Property                          | BFS            | DFS               |
| --------------------------------- | -------------- | ----------------- |
| Main structure                    | Queue          | Stack / recursion |
| Exploration                       | Level by level | Depth first       |
| Shortest path in unweighted graph | Yes            | Not generally     |
| Traversal strategy                | Breadth        | Depth             |

---

# Applications of BFS and DFS

## 19. Connectivity

BFS or DFS can determine which vertices are reachable from a given source.

If every vertex in an undirected graph is reachable from every other vertex, the graph is connected.

---

## 20. Reachability

For vertices $u$ and $v$, BFS or DFS can determine whether a path exists from $u$ to $v$.

---

## 21. Connected Components

Repeated BFS or DFS can be used to identify connected components of an undirected graph.

---

## 22. Cycle Detection

Graph traversal can be used to detect cycles.

For directed graphs, DFS can help identify cycles using the traversal state of vertices.

---

# Directed Acyclic Graphs

## 23. Directed Graph

A directed graph contains edges with an orientation:

$$
u\rightarrow v
$$

---

## 24. Directed Acyclic Graph

A **Directed Acyclic Graph (DAG)** is a directed graph containing no directed cycle.

Therefore, there is no sequence

$$
v_1\rightarrow v_2\rightarrow\cdots\rightarrow v_k\rightarrow v_1
$$

forming a directed cycle.

---

## 25. Applications of DAGs

DAGs can represent dependencies such as:

* Course prerequisites
* Task dependencies
* Build systems
* Workflow dependencies

---

# Complexity of BFS and DFS

## 26. BFS Complexity

Using an adjacency-list representation, BFS has time complexity

$$
\boxed{O(|V|+|E|)}
$$

where:

* $|V|$ is the number of vertices.
* $|E|$ is the number of edges.

---

## 27. DFS Complexity

Using an adjacency-list representation, DFS has time complexity

$$
\boxed{O(|V|+|E|)}
$$

Each vertex and edge is processed a bounded number of times.

---

# Topological Sorting

## 28. Topological Ordering

A topological ordering of a directed graph is an ordering of its vertices such that for every directed edge

$$
u\rightarrow v
$$

vertex $u$ appears before vertex $v$.

---

## 29. Topological Sorting

Topological sorting produces a topological ordering of a DAG.

A topological ordering exists **if and only if** the directed graph is acyclic.

---

## 30. Topological Sorting Using In-Degree

The in-degree of a vertex is the number of incoming edges.

A typical topological sorting procedure is:

1. Find vertices with in-degree $0$.
2. Add them to the ordering.
3. Remove their outgoing edges.
4. Update the in-degrees of affected vertices.
5. Add newly available zero-in-degree vertices.
6. Continue until all vertices are processed.

---

## 31. Topological Sorting and Cycles

If vertices remain but no vertex has in-degree $0$, the graph contains a cycle.

Therefore, topological sorting can also be used to detect cycles in directed graphs.

---

## 32. Topological Sorting Complexity

Using an adjacency-list representation,

$$
\boxed{O(|V|+|E|)}
$$

---

# Formula Reference

| Topic | Key Result |
| --- | --- |
| Graph | $G=(V,E)$ |
| Undirected edge | $\{u,v\}$ |
| Directed edge | $(u,v)$ |
| Vertex degree | $\deg(v)$ |
| Adjacency matrix | $A_{ij}=1$ if edge $i\to j$ exists |
| BFS structure | Queue (FIFO) |
| DFS structure | Stack / recursion (LIFO) |
| BFS shortest path | Shortest path in unweighted graphs |
| BFS complexity | $O(\lvert V\rvert+\lvert E\rvert)$ |
| DFS complexity | $O(\lvert V\rvert+\lvert E\rvert)$ |
| DAG | Directed graph with no directed cycle |
| Topological ordering | $u$ appears before $v$ for every $u\to v$ |
| Topological sorting complexity | $O(\lvert V\rvert+\lvert E\rvert)$ |