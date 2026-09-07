---

sidebar_position: 5
title: Week 5 — Functions
-------------------------

# Week 5 — Functions

## 1. Function

A function $f$ from a set $A$ to a set $B$ assigns **exactly one** element of $B$ to every element of $A$.

$$
f:A\to B
$$

Here:

* $A$ is the **domain**.
* $B$ is the **codomain**.
* The set of values actually produced by $f$ is the **range**.

---

## 2. Domain

The **domain** of $f$ is the set of all valid input values.

$$
\operatorname{Dom}(f)
$$

For a function to be defined at $x$, $x$ must belong to its domain.

---

## 3. Range

The **range** of $f$ is the set of all output values produced by the function.

$$
\operatorname{Range}(f)
=
\{f(x):x\in\operatorname{Dom}(f)\}
$$

---

## 4. Function Notation

A function can be written as

$$
y=f(x)
$$

where:

* $x$ is the input.
* $f(x)$ is the output.

---

# Tests for Functions

## 5. Vertical Line Test

A graph represents a function of $x$ if every vertical line intersects the graph at **at most one point**.

Therefore:

$$
\boxed{\text{One vertical line } \Rightarrow \text{ at most one intersection}}
$$

---

## 6. Horizontal Line Test

The horizontal line test is used to determine whether a function is **one-to-one**.

A function is one-to-one if every horizontal line intersects its graph at most once.

$$
\boxed{\text{One horizontal line } \Rightarrow \text{ at most one intersection}}
$$

---

# One-to-One and Onto Functions

## 7. Injective Function

A function $f:A\to B$ is **injective** if distinct inputs produce distinct outputs.

$$
f(x_1)=f(x_2)\Rightarrow x_1=x_2
$$

Equivalently,

$$
x_1\neq x_2\Rightarrow f(x_1)\neq f(x_2)
$$

---

## 8. Surjective Function

A function $f:A\to B$ is **surjective** if every element of the codomain has at least one preimage.

$$
\forall y\in B,\ \exists x\in A
\text{ such that }f(x)=y
$$

Therefore,

$$
\operatorname{Range}(f)=B
$$

---

## 9. Bijective Function

A function is **bijective** if it is both injective and surjective.

$$
\boxed{\text{Bijective}=\text{Injective}+\text{Surjective}}
$$

A bijective function has exactly one preimage for every element of its codomain.

---

# Exponential Functions

## 10. Exponential Function

An exponential function has the form

$$
f(x)=a^x
$$

where

$$
a>0,\qquad a\neq1
$$

---

## 11. Properties of Exponential Functions

For

$$
f(x)=a^x
$$

the domain is

$$
\mathbb R
$$

and the range is

$$
(0,\infty)
$$

Also,

$$
a^0=1
$$

so the graph always passes through

$$
(0,1)
$$

---

## 12. Increasing Exponential Function

If

$$
a>1
$$

then

$$
a^x
$$

is strictly increasing.

As $x$ increases,

$$
a^x\to\infty
$$

and

$$
x\to-\infty
\Rightarrow
a^x\to0
$$

---

## 13. Decreasing Exponential Function

If

$$
0<a<1
$$

then

$$
a^x
$$

is strictly decreasing.

As $x$ increases,

$$
a^x\to0
$$

and

$$
x\to-\infty
\Rightarrow
a^x\to\infty
$$

---

## 14. Laws of Exponents

For positive $a$:

### Product

$$
a^m a^n=a^{m+n}
$$

### Quotient

$$
\frac{a^m}{a^n}=a^{m-n}
$$

### Power of a Power

$$
(a^m)^n=a^{mn}
$$

### Zero Exponent

$$
a^0=1
$$

### Negative Exponent

$$
a^{-n}=\frac{1}{a^n}
$$

### Fractional Exponent

$$
a^{1/n}=\sqrt[n]{a}
$$

and

$$
a^{m/n}=\sqrt[n]{a^m}
$$

---

# Composite Functions

## 15. Composition of Functions

Let

$$
f:A\to B
$$

and

$$
g:B\to C
$$

The composition of $g$ with $f$ is

$$
(g\circ f)(x)=g(f(x))
$$

The function $f$ is applied first, followed by $g$.

---

## 16. Order of Composition

In general,

$$
g\circ f\neq f\circ g
$$

because

$$
(g\circ f)(x)=g(f(x))
$$

while

$$
(f\circ g)(x)=f(g(x))
$$

---

## 17. Domain of a Composite Function

The domain of

$$
(g\circ f)(x)
$$

consists of values of $x$ for which:

1. $f(x)$ is defined.
2. $f(x)$ belongs to the domain of $g$.

---

## 18. Composition of Three Functions

For functions $f$, $g$, and $h$:

$$
(h\circ g\circ f)(x)
=
h(g(f(x)))
$$

The functions are evaluated from right to left.

---

# Inverse Functions

## 19. Inverse Function

A function $f$ has an inverse $f^{-1}$ if it reverses the mapping performed by $f$.

$$
f:A\to B
$$

and

$$
f^{-1}:B\to A
$$

---

## 20. Inverse Function Property

If $f$ has an inverse, then

$$
f^{-1}(f(x))=x
$$

and

$$
f(f^{-1}(x))=x
$$

---

## 21. Condition for an Inverse

A function has an inverse function from its codomain to its domain when it is **bijective**.

For a function restricted to a suitable domain, being one-to-one is sufficient to define its inverse on its range.

---

## 22. Finding an Inverse

Given

$$
y=f(x)
$$

the inverse can be found by:

1. Interchanging $x$ and $y$.
2. Solving for $y$.
3. Writing the result as $f^{-1}(x)$.

---

## 23. Graph of an Inverse

The graphs of $f$ and $f^{-1}$ are reflections of each other across the line

$$
y=x
$$

---

## 24. Inverse of an Exponential Function

For

$$
f(x)=a^x
$$

the inverse is the logarithmic function

$$
f^{-1}(x)=\log_a x
$$

where

$$
a>0,\qquad a\neq1
$$

Thus,

$$
a^x=y
\iff
x=\log_a y
$$

---

# Function Transformations

## 25. Vertical Translation

For

$$
g(x)=f(x)+k
$$

the graph of $f$ is shifted vertically by $k$ units.

* $k>0$: upward.
* $k<0$: downward.

---

## 26. Horizontal Translation

For

$$
g(x)=f(x-h)
$$

the graph is shifted horizontally by $h$ units.

* $h>0$: right.
* $h<0$: left.

---

## 27. Vertical Scaling

For

$$
g(x)=af(x)
$$

the output values are multiplied by $a$.

If

$$
|a|>1
$$

the graph is vertically stretched.

If

$$
0<|a|<1
$$

the graph is vertically compressed.

---

## 28. Reflection

Reflection about the $x$-axis:

$$
g(x)=-f(x)
$$

Reflection about the $y$-axis:

$$
g(x)=f(-x)
$$

---

# Function Formula Reference

| Concept                | Formula / Property                                |
| ---------------------- | ------------------------------------------------- |
| Function               | $f:A\to B$                                        |
| Function value         | $y=f(x)$                                          |
| Range                  | ${f(x):x\in\operatorname{Dom}(f)}$                |
| Vertical line test     | At most one intersection                          |
| Horizontal line test   | At most one intersection for one-to-one functions |
| Injective              | $f(x_1)=f(x_2)\Rightarrow x_1=x_2$                |
| Surjective             | $\operatorname{Range}(f)=B$                       |
| Bijective              | Injective and surjective                          |
| Exponential function   | $f(x)=a^x$                                        |
| Exponential domain     | $\mathbb R$                                       |
| Exponential range      | $(0,\infty)$                                      |
| Increasing exponential | $a>1$                                             |
| Decreasing exponential | $0<a<1$                                           |
| Product of powers      | $a^ma^n=a^{m+n}$                                  |
| Quotient of powers     | $a^m/a^n=a^{m-n}$                                 |
| Power of a power       | $(a^m)^n=a^{mn}$                                  |
| Negative exponent      | $a^{-n}=1/a^n$                                    |
| Composition            | $(g\circ f)(x)=g(f(x))$                           |
| Composition order      | $g\circ f\neq f\circ g$ in general                |
| Inverse                | $f^{-1}(f(x))=x$                                  |
| Inverse composition    | $f(f^{-1}(x))=x$                                  |
| Inverse condition      | Bijective                                         |
| Inverse graph          | Reflection about $y=x$                            |
| Exponential inverse    | $(a^x)^{-1}=\log_a x$                             |
| Vertical translation   | $f(x)+k$                                          |
| Horizontal translation | $f(x-h)$                                          |
| Vertical scaling       | $af(x)$                                           |
| $x$-axis reflection    | $-f(x)$                                           |
| $y$-axis reflection    | $f(-x)$                                           |
