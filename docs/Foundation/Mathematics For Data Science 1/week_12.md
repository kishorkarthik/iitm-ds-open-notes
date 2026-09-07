---

sidebar_position: 13
title: Week 12 — Revision
-------------------------

# Week 12 — Revision
---
Week 12 is the revision week for **Mathematics for Data Science I**.

This week introduces no new topics. The focus is on consolidating the concepts, formulas, properties, and algorithms covered in Weeks 1–11.

# 1. Set Theory

Review:

* Number systems
* Sets and set operations
* Relations
* Types of relations
* Functions
* Domain and range
* Injective, surjective, and bijective functions
* Composition and inverse functions

Key formulas:

$$
A\cup B,\qquad A\cap B,\qquad A-B,\qquad A^c
$$

$$
|A\cup B|
=
|A|+|B|-|A\cap B|
$$

# 2. Coordinate Geometry and Straight Lines

Review:

* Cartesian coordinates
* Distance and midpoint
* Slope
* Forms of a straight line
* Parallel and perpendicular lines
* Point-to-line distance
* Straight-line fitting

Key formulas:

$$
m=\frac{y_2-y_1}{x_2-x_1}
$$

$$
y-y_1=m(x-x_1)
$$

$$
Ax+By+C=0
$$

$$
d=\frac{|Ax_0+By_0+C|}{\sqrt{A^2+B^2}}
$$

# 3. Quadratic Functions

Review:

* Quadratic functions
* Roots
* Discriminant
* Vertex
* Maximum and minimum
* Quadratic equations

Key formulas:

$$
\Delta=b^2-4ac
$$

$$
x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}
$$

$$
x_{\text{vertex}}=-\frac{b}{2a}
$$

# 4. Polynomials

Review:

* Polynomial operations
* Division
* Remainder theorem
* Factor theorem
* Roots and intercepts
* Multiplicity
* End behavior
* Turning points
* Polynomial graph construction

Key results:

$$
P(a)=\text{remainder when }P(x)\text{ is divided by }x-a
$$

$$
P(a)=0
\iff
(x-a)\text{ is a factor of }P(x)
$$

Maximum possible number of turning points:

$$
n-1
$$

for a polynomial of degree $n$.

# 5. Functions

Review:

* Vertical and horizontal line tests
* Exponential functions
* Composition
* Inverse functions
* Transformations

Key formulas:

$$
(f\circ g)(x)=f(g(x))
$$

$$
f^{-1}(f(x))=x
$$

# 6. Logarithmic Functions

Review:

* Definition of logarithms
* Logarithmic properties
* Graphs
* Exponential equations
* Logarithmic equations

Key formulas:

$$
\log_a(xy)=\log_a x+\log_a y
$$

$$
\log_a\left(\frac{x}{y}\right)
=
\log_a x-\log_a y
$$

$$
\log_a(x^r)=r\log_a x
$$

$$
\log_a x=\frac{\ln x}{\ln a}
$$

# 7. Sequences and Limits

Review:

* Functions of one variable
* Graphs and tangents
* Limits of sequences
* Limits of functions
* One-sided limits
* Continuity

Key formulas:

$$
\lim_{n\to\infty}a_n=L
$$

$$
\lim_{x\to a}f(x)=L
$$

$$
\lim_{x\to a^-}f(x)
=
\lim_{x\to a^+}f(x)
$$

For continuity:

$$
\boxed{
\lim_{x\to a}f(x)=f(a)
}
$$

# 8. Derivatives

Review:

* Differentiability
* Derivative definition
* Derivative rules
* L'Hôpital's rule
* Tangents
* Linear approximation
* Critical points
* Local maxima and minima

Key formulas:

$$
f'(a)
=
\lim_{h\to0}
\frac{f(a+h)-f(a)}{h}
$$

$$
\frac{d}{dx}(x^n)=nx^{n-1}
$$

$$
\frac{d}{dx}[f(x)g(x)]
=
f'(x)g(x)+f(x)g'(x)
$$

$$
\frac{d}{dx}f(g(x))
=
f'(g(x))g'(x)
$$

$$
L(x)=f(a)+f'(a)(x-a)
$$

# 9. Integration

Review:

* Area under a curve
* Definite integrals
* Antiderivatives
* Integration rules
* Fundamental Theorem of Calculus
* Relationship between derivatives and integrals

Key formulas:

$$
\int x^n\,dx
=
\frac{x^{n+1}}{n+1}+C
$$

$$
\int_a^b f(x)\,dx
=
F(b)-F(a)
$$

$$
F'(x)=f(x)
$$

# 10. Graph Theory

Review:

* Graph representation
* Directed and undirected graphs
* Degree
* Paths
* Adjacency matrices and lists
* BFS
* DFS
* DAGs
* Topological sorting

Key complexities:

$$
\text{BFS}=O(|V|+|E|)
$$

$$
\text{DFS}=O(|V|+|E|)
$$

$$
\text{Topological sorting}=O(|V|+|E|)
$$

# 11. Graph Algorithms

Review:

* Longest paths in DAGs
* Transitive closure
* Matrix multiplication
* Relaxation
* Single-source shortest paths
* Dijkstra
* Bellman-Ford
* All-pairs shortest paths
* Floyd-Warshall
* Minimum spanning trees
* Prim
* Kruskal

Key complexities:

$$
\text{Dijkstra}
=
O((|V|+|E|)\log|V|)
$$

$$
\text{Bellman-Ford}
=
O(|V||E|)
$$

$$
\text{Floyd-Warshall}
=
O(|V|^3)
$$

$$
\text{Prim}
=
O((|V|+|E|)\log|V|)
$$

$$
\text{Kruskal}
=
O(|E|\log|E|)
$$

# 12. Revision Checklist

Before completing revision, make sure you can:

* [ ] Apply set operations and identify relation/function types.
* [ ] Work with coordinate geometry and straight-line equations.
* [ ] Solve quadratic equations and identify extrema.
* [ ] Analyze and construct polynomial graphs.
* [ ] Determine function composition and inverses.
* [ ] Manipulate logarithmic and exponential equations.
* [ ] Evaluate basic sequence and function limits.
* [ ] Determine continuity.
* [ ] Compute derivatives using standard rules.
* [ ] Find tangent lines and linear approximations.
* [ ] Identify critical points and local extrema.
* [ ] Compute basic integrals and definite integrals.
* [ ] Apply the Fundamental Theorem of Calculus.
* [ ] Represent graphs using matrices and lists.
* [ ] Apply BFS, DFS, and topological sorting.
* [ ] Understand shortest-path algorithms and their conditions.
* [ ] Apply Dijkstra and Bellman-Ford appropriately.
* [ ] Understand Floyd-Warshall for all-pairs shortest paths.
* [ ] Understand Prim and Kruskal for minimum spanning trees.
* [ ] Compare the time complexities of the major graph algorithms.
