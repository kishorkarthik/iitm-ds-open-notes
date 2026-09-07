---

sidebar_position: 4
title: Week 4 — Algebra and Graphs of Polynomials
-------------------------------------------------

# Week 4 — Algebra and Graphs of Polynomials
---
## 1. Polynomial

A polynomial in $x$ is an expression of the form

$$
P(x)=a_nx^n+a_{n-1}x^{n-1}+\cdots+a_1x+a_0
$$

where:

* $a_0,a_1,\ldots,a_n$ are constants.
* $a_n\neq0$.
* $n$ is a non-negative integer.

The highest power of $x$ with a non-zero coefficient is the **degree** of the polynomial.

---

## 2. Degree of a Polynomial

For

$$
P(x)=a_nx^n+\cdots+a_0
$$

the degree is

$$
\deg(P)=n
$$

Examples of polynomial degrees:

| Polynomial   | Degree |
| ------------ | -----: |
| $5$          |    $0$ |
| $3x+2$       |    $1$ |
| $x^2-4x+1$   |    $2$ |
| $2x^3+x-7$   |    $3$ |
| $x^4-3x^2+1$ |    $4$ |

---

## 3. Polynomial Addition

Polynomials are added by combining like terms.

If

$$
P(x)=a_nx^n+\cdots+a_0
$$

and

$$
Q(x)=b_nx^n+\cdots+b_0
$$

then

$$
P(x)+Q(x)
=
(a_n+b_n)x^n+\cdots+(a_0+b_0)
$$

---

## 4. Polynomial Subtraction

Polynomial subtraction is performed by subtracting corresponding coefficients.

$$
P(x)-Q(x)
=
(a_n-b_n)x^n+\cdots+(a_0-b_0)
$$

---

## 5. Polynomial Multiplication

Polynomial multiplication uses the distributive property.

For two polynomials $P(x)$ and $Q(x)$,

$$
P(x)Q(x)
$$

is obtained by multiplying every term of $P(x)$ by every term of $Q(x)$ and combining like terms.

The degree satisfies

$$
\deg(PQ)=\deg(P)+\deg(Q)
$$

for non-zero polynomials.

---

## 6. Polynomial Division

For polynomials $P(x)$ and $D(x)$, where $D(x)\neq0$,

$$
P(x)=D(x)Q(x)+R(x)
$$

where:

* $Q(x)$ is the quotient.
* $R(x)$ is the remainder.
* $\deg(R)<\deg(D)$.

This is called the **polynomial division algorithm**.

---

## 7. Remainder Theorem

If a polynomial $P(x)$ is divided by $(x-a)$, the remainder is

$$
P(a)
$$

Therefore,

$$
P(x)=(x-a)Q(x)+P(a)
$$

---

## 8. Factor Theorem

$(x-a)$ is a factor of $P(x)$ if and only if

$$
P(a)=0
$$

Thus,

$$
P(a)=0
\iff
(x-a)\text{ is a factor of }P(x)
$$

---

# Roots and Intercepts

## 9. Root of a Polynomial

A number $r$ is a **root** or **zero** of $P(x)$ if

$$
P(r)=0
$$

Equivalently,

$$
x=r
$$

is an $x$-intercept of the graph of $y=P(x)$.

---

## 10. $x$-Intercepts

The $x$-intercepts of

$$
y=P(x)
$$

are obtained by solving

$$
P(x)=0
$$

If $r$ is a root, then the corresponding intercept is

$$
(r,0)
$$

---

## 11. $y$-Intercept

The $y$-intercept is obtained by setting

$$
x=0
$$

Therefore,

$$
y=P(0)
$$

and the $y$-intercept is

$$
(0,P(0))
$$

For

$$
P(x)=a_nx^n+\cdots+a_1x+a_0
$$

we have

$$
P(0)=a_0
$$

---

## 12. Polynomial in Factored Form

A polynomial can be represented using its roots as factors.

If $r_1,r_2,\ldots,r_k$ are roots, then

$$
P(x)=a(x-r_1)(x-r_2)\cdots(x-r_k)
$$

where $a\neq0$.

---

# Multiplicity

## 13. Multiplicity of a Root

If

$$
P(x)=(x-r)^mQ(x)
$$

where

$$
Q(r)\neq0
$$

then $r$ is a root of **multiplicity $m$**.

---

## 14. Effect of Multiplicity on the Graph

For a root of multiplicity $m$:

* If $m$ is odd, the graph crosses the $x$-axis at the root.
* If $m$ is even, the graph touches the $x$-axis and turns around at the root.

---

## 15. Fundamental Theorem of Algebra

A polynomial of degree $n\geq1$ has exactly $n$ complex roots when roots are counted with multiplicity.

Therefore, a degree-$n$ polynomial has at most $n$ distinct real roots.

---

# End Behavior

## 16. Leading Term

For

$$
P(x)=a_nx^n+\cdots+a_0
$$

the term

$$
a_nx^n
$$

is the **leading term**.

The leading term determines the end behavior of the polynomial.

---

## 17. End Behavior

### Even Degree

If $n$ is even:

* $a_n>0$: both ends rise.
* $a_n<0$: both ends fall.

### Odd Degree

If $n$ is odd:

* $a_n>0$: left end falls and right end rises.
* $a_n<0$: left end rises and right end falls.

---

## 18. End Behavior Table

| Degree | Leading coefficient | $x\to-\infty$    | $x\to+\infty$    |
| ------ | ------------------- | ---------------- | ---------------- |
| Even   | $a_n>0$             | $P(x)\to+\infty$ | $P(x)\to+\infty$ |
| Even   | $a_n<0$             | $P(x)\to-\infty$ | $P(x)\to-\infty$ |
| Odd    | $a_n>0$             | $P(x)\to-\infty$ | $P(x)\to+\infty$ |
| Odd    | $a_n<0$             | $P(x)\to+\infty$ | $P(x)\to-\infty$ |

---

# Turning Points

## 19. Turning Point

A **turning point** is a point where the graph changes direction from increasing to decreasing or from decreasing to increasing.

A polynomial of degree $n$ has at most

$$
n-1
$$

turning points.

---

## 20. Maximum Number of Turning Points

| Degree | Maximum turning points |
| -----: | ---------------------: |
|    $1$ |                    $0$ |
|    $2$ |                    $1$ |
|    $3$ |                    $2$ |
|    $4$ |                    $3$ |
|    $n$ |                  $n-1$ |

---

# Graphing Polynomials

## 21. Key Features of a Polynomial Graph

The graph of a polynomial can be analyzed using:

1. Degree
2. Leading coefficient
3. $x$-intercepts
4. Multiplicity of roots
5. $y$-intercept
6. End behavior
7. Turning points

---

## 22. Graph Behavior at Roots

For a root $r$:

### Odd Multiplicity

The graph crosses the $x$-axis at

$$
(r,0)
$$

### Even Multiplicity

The graph touches the $x$-axis at

$$
(r,0)
$$

and turns back.

---

## 23. Polynomial Graphs and Continuity

Polynomial functions are continuous for all real values of $x$.

Therefore, their graphs have no breaks, jumps, or holes.

---

# Creating Polynomials

## 24. Polynomial from Known Roots

If the roots are

$$
r_1,r_2,\ldots,r_n
$$

then a polynomial with these roots can be written as

$$
P(x)=a(x-r_1)(x-r_2)\cdots(x-r_n)
$$

where

$$
a\neq0
$$

---

## 25. Polynomial from Roots with Multiplicity

If $r_1$ has multiplicity $m_1$, $r_2$ has multiplicity $m_2$, and so on, then

$$
P(x)
=
a(x-r_1)^{m_1}(x-r_2)^{m_2}\cdots(x-r_k)^{m_k}
$$

---

## 26. Polynomial from Roots and a Point

If the roots are known and the polynomial must pass through a point $(x_0,y_0)$, use

$$
P(x)=a\prod_{i=1}^{n}(x-r_i)
$$

and determine $a$ using

$$
P(x_0)=y_0
$$

---

# Polynomial Formula Reference

| Concept                | Formula / Property                         |
| ---------------------- | ------------------------------------------ |
| General polynomial     | $P(x)=a_nx^n+\cdots+a_0$                   |
| Degree                 | $\deg(P)=n$                                |
| Polynomial division    | $P(x)=D(x)Q(x)+R(x)$                       |
| Remainder theorem      | Remainder on division by $(x-a)$ is $P(a)$ |
| Factor theorem         | $P(a)=0\iff(x-a)$ is a factor              |
| Root                   | $P(r)=0$                                   |
| $x$-intercept          | $(r,0)$ where $P(r)=0$                     |
| $y$-intercept          | $(0,P(0))$                                 |
| Factored form          | $P(x)=a\prod(x-r_i)$                       |
| Root multiplicity      | $P(x)=(x-r)^mQ(x)$                         |
| Maximum real roots     | $n$                                        |
| Maximum turning points | $n-1$                                      |
| Leading term           | $a_nx^n$                                   |
| Even degree, $a_n>0$   | Both ends rise                             |
| Even degree, $a_n<0$   | Both ends fall                             |
| Odd degree, $a_n>0$    | Left falls, right rises                    |
| Odd degree, $a_n<0$    | Left rises, right falls                    |
| Polynomial continuity  | Continuous for all $x\in\mathbb R$         |
