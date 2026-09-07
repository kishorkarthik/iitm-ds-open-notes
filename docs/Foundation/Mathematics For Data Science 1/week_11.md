---

sidebar_position: 12
title: Week 11 — Graph Algorithms
---------------------------------

# Week 11 — Graph Algorithms
---
## 1. Longest Path

For a weighted graph, the length of a path is the sum of the weights of its edges.

For a path

$$
v_0\rightarrow v_1\rightarrow\cdots\rightarrow v_k
$$

its total weight is

$$
\sum_{i=0}^{k-1}w(v_i,v_{i+1})
$$

The longest path is a path with maximum total weight among the paths being considered.

---

## 2. Longest Path in a DAG

For a directed acyclic graph (DAG), longest paths can be found using a topological ordering.

For an edge

$$
u\rightarrow v
$$

the longest-path value can be updated as

$$
d[v]
=
\max(d[v],d[u]+w(u,v))
$$

Processing vertices in topological order ensures that the required predecessor values have already been computed.

---

# Transitive Closure

## 3. Reachability

A vertex $v$ is reachable from vertex $u$ if there exists a path from $u$ to $v$.

---

## 4. Transitive Closure

The transitive closure of a directed graph represents reachability between every pair of vertices.

For vertices $i$ and $j$,

$$
T_{ij}
=
\begin{cases}
1 & \text{if }j\text{ is reachable from }i\\
0 & \text{otherwise}
\end{cases}
$$

---

## 5. Transitive Closure Using Boolean Matrices

The adjacency matrix can be extended to represent paths of greater length.

Matrix operations can therefore be used to determine reachability.

---

# Matrix Multiplication

## 6. Matrix Product

For matrices $A$ and $B$, the product $C=AB$ is defined by

$$
C_{ij}
=
\sum_{k}A_{ik}B_{kj}
$$

---

## 7. Matrix Dimensions

If

$$
A\in\mathbb{R}^{m\times n}
$$

and

$$
B\in\mathbb{R}^{n\times p}
$$

then

$$
AB\in\mathbb{R}^{m\times p}
$$

---

## 8. Matrix Multiplication and Graphs

For an adjacency matrix $A$, powers of the matrix can represent paths of different lengths.

The entry

$$
(A^k)_{ij}
$$

can be used to determine the number of walks of length $k$ from vertex $i$ to vertex $j$.

---

# Single-Source Shortest Paths

## 9. Shortest Path

The shortest path between two vertices is a path with minimum total edge weight.

For a source vertex $s$, the single-source shortest-path problem finds the shortest distance from $s$ to every reachable vertex.

---

## 10. Relaxation

For an edge

$$
u\rightarrow v
$$

with weight $w(u,v)$, relaxation checks whether going through $u$ gives a shorter path to $v$.

$$
d[v]
>
d[u]+w(u,v)
$$

If so, update:

$$
\boxed{
d[v]=d[u]+w(u,v)
}
$$

---

# Dijkstra's Algorithm

## 11. Dijkstra's Algorithm

Dijkstra's algorithm solves the single-source shortest-path problem for graphs with **non-negative edge weights**.

---

## 12. Dijkstra Initialization

For source vertex $s$:

$$
d[s]=0
$$

For every other vertex $v$:

$$
d[v]=\infty
$$

---

## 13. Dijkstra's Algorithm

Repeatedly:

1. Select the unprocessed vertex with the smallest tentative distance.
2. Mark it as processed.
3. Relax its outgoing edges.
4. Continue until all required vertices are processed.

---

## 14. Dijkstra Complexity

Using an adjacency list and priority queue, a common implementation has complexity

$$
O((|V|+|E|)\log |V|)
$$

---

# Bellman-Ford Algorithm

## 15. Bellman-Ford Algorithm

Bellman-Ford solves the single-source shortest-path problem and can handle negative edge weights.

It can also detect reachable negative-weight cycles.

---

## 16. Bellman-Ford Relaxation

All edges are repeatedly relaxed.

For a graph with $|V|$ vertices, the edges are relaxed $|V|-1$ times.

---

## 17. Negative Cycle Detection

After $|V|-1$ relaxation passes, perform one additional pass.

If any distance can still be improved, a reachable negative-weight cycle exists.

---

## 18. Bellman-Ford Complexity

The time complexity is

$$
\boxed{
O(|V||E|)
}
$$

---

# All-Pairs Shortest Paths

## 19. All-Pairs Shortest Paths

The all-pairs shortest-path problem finds the shortest distance between every pair of vertices.

The result can be represented by a distance matrix $D$:

$$
D_{ij}
=
\text{shortest distance from }i\text{ to }j
$$

---

# Floyd-Warshall Algorithm

## 20. Floyd-Warshall Algorithm

Floyd-Warshall is a dynamic-programming algorithm for the all-pairs shortest-path problem.

---

## 21. Floyd-Warshall Recurrence

Let $D^{(k)}_{ij}$ represent the shortest distance from $i$ to $j$ using only the first $k$ vertices as intermediate vertices.

Then:

$$
\boxed{
D^{(k)}_{ij}
=
\min
\left(
D^{(k-1)}_{ij},
D^{(k-1)}_{ik}
+
D^{(k-1)}_{kj}
\right)
}
$$

---

## 22. Floyd-Warshall Complexity

The time complexity is

$$
\boxed{
O(|V|^3)
}
$$

---

# Minimum-Cost Spanning Trees

## 23. Spanning Tree

A spanning tree of a connected undirected graph:

* Contains every vertex.
* Is connected.
* Contains no cycles.

For a graph with $|V|$ vertices, every spanning tree contains

$$
\boxed{|V|-1}
$$

edges.

---

## 24. Minimum Spanning Tree

A **Minimum Spanning Tree (MST)** is a spanning tree whose total edge weight is minimum.

Its total cost is

$$
\sum_{e\in T}w(e)
$$

where $T$ is the selected spanning tree.

---

# Prim's Algorithm

## 25. Prim's Algorithm

Prim's algorithm constructs an MST by repeatedly adding the minimum-weight edge that connects a vertex already in the tree to a vertex outside the tree.

---

## 26. Prim's Algorithm

Starting from any vertex:

1. Add the starting vertex to the tree.
2. Find the minimum-weight edge connecting the tree to an unvisited vertex.
3. Add that edge and vertex.
4. Repeat until all vertices are included.

---

## 27. Prim's Complexity

Using an adjacency list and priority queue, a common implementation has complexity

$$
O((|V|+|E|)\log |V|)
$$

---

# Kruskal's Algorithm

## 28. Kruskal's Algorithm

Kruskal's algorithm constructs an MST by considering edges in increasing order of weight.

---

## 29. Kruskal's Algorithm

1. Sort all edges by increasing weight.
2. Consider each edge in that order.
3. Add the edge if it does not create a cycle.
4. Continue until $|V|-1$ edges have been selected.

---

## 30. Cycle Detection

Kruskal's algorithm commonly uses a **disjoint-set (Union-Find)** data structure to determine whether adding an edge would create a cycle.

---

## 31. Kruskal's Complexity

Sorting the edges takes

$$
O(|E|\log |E|)
$$

Thus, the overall complexity is commonly written as

$$
\boxed{
O(|E|\log |E|)
}
$$

---

# Algorithm Comparison

| Problem                     | Algorithm      | Important Condition       | Complexity |   |      |   |       |   |    |
| --------------------------- | -------------- | ------------------------- | ---------- | - | ---- | - | ----- | - | -- |
| Single-source shortest path | Dijkstra       | Non-negative edge weights | $O((       | V | +    | E | )\log | V | )$ |
| Single-source shortest path | Bellman-Ford   | Allows negative edges     | $O(        | V |      | E | )$    |   |    |
| All-pairs shortest paths    | Floyd-Warshall | —                         | $O(        | V | ^3)$ |   |       |   |    |
| Minimum spanning tree       | Prim           | Weighted undirected graph | $O((       | V | +    | E | )\log | V | )$ |
| Minimum spanning tree       | Kruskal        | Weighted undirected graph | $O(        | E | \log | E | )$    |   |    |

---

# Formula Reference

| Topic                     | Key Result                                        |   |      |   |       |   |    |
| ------------------------- | ------------------------------------------------- | - | ---- | - | ----- | - | -- |
| Path weight               | $\displaystyle\sum w(e)$                          |   |      |   |       |   |    |
| Longest-path relaxation   | $\displaystyle d[v]=\max(d[v],d[u]+w(u,v))$       |   |      |   |       |   |    |
| Transitive closure        | $T_{ij}=1$ if $j$ is reachable from $i$           |   |      |   |       |   |    |
| Matrix multiplication     | $\displaystyle C_{ij}=\sum_kA_{ik}B_{kj}$         |   |      |   |       |   |    |
| Relaxation                | $\displaystyle d[v]=\min(d[v],d[u]+w(u,v))$       |   |      |   |       |   |    |
| Dijkstra initialization   | $d[s]=0,\ d[v]=\infty$                            |   |      |   |       |   |    |
| Bellman-Ford passes       | $                                                 | V | -1$  |   |       |   |    |
| Bellman-Ford complexity   | $O(                                               | V |      | E | )$    |   |    |
| Floyd-Warshall recurrence | $\displaystyle D_{ij}=\min(D_{ij},D_{ik}+D_{kj})$ |   |      |   |       |   |    |
| Floyd-Warshall complexity | $O(                                               | V | ^3)$ |   |       |   |    |
| Edges in spanning tree    | $                                                 | V | -1$  |   |       |   |    |
| Prim complexity           | $O((                                              | V | +    | E | )\log | V | )$ |
| Kruskal complexity        | $O(                                               | E | \log | E | )$    |   |    |
