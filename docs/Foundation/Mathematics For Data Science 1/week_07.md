---

sidebar_position: 8
title: Week 7 — Sequences and Limits
------------------------------------
---
# Week 7 — Sequences and Limits

## 1. Function of One Variable

A function of one variable maps each input $x$ in its domain to exactly one output $f(x)$.

$$
y=f(x)
$$

The function can be represented using:

* An equation
* A table
* A graph

---

## 2. Graph of a Function

The graph of $f$ is the set of points

$$
\{(x,f(x)):x\in\operatorname{Dom}(f)\}
$$

A point $(a,b)$ lies on the graph of $f$ if

$$
b=f(a)
$$

---

## 3. Secant Line

Given two points on the graph,

$$
(x_1,f(x_1)),\qquad (x_2,f(x_2))
$$

the slope of the secant line is

$$
m_{\text{secant}}
=
\frac{f(x_2)-f(x_1)}{x_2-x_1}
$$

---

## 4. Tangent Line

The tangent line describes the limiting slope of the graph at a point.

At $x=a$,

$$
m_{\text{tangent}}
=
\lim_{x\to a}
\frac{f(x)-f(a)}{x-a}
$$

The tangent line is

$$
y-f(a)=m_{\text{tangent}}(x-a)
$$

---

# Limits of Sequences

## 5. Sequence

A sequence is a function whose domain is the natural numbers.

It can be written as

$$
a_1,a_2,a_3,\ldots
$$

or

$$
\{a_n\}_{n=1}^{\infty}
$$

---

## 6. Limit of a Sequence

A sequence ${a_n}$ converges to $L$ if its terms approach $L$ as $n$ becomes arbitrarily large.

$$
\lim_{n\to\infty}a_n=L
$$

---

## 7. Divergent Sequence

If a sequence does not approach a finite value, it is divergent.

$$
\lim_{n\to\infty}a_n
$$

does not exist as a finite real number.

---

## 8. Limit Laws for Sequences

If

$$
\lim_{n\to\infty}a_n=A
\qquad\text{and}\qquad
\lim_{n\to\infty}b_n=B
$$

then

### Sum

$$
\lim_{n\to\infty}(a_n+b_n)=A+B
$$

### Difference

$$
\lim_{n\to\infty}(a_n-b_n)=A-B
$$

### Constant Multiple

$$
\lim_{n\to\infty}ca_n=cA
$$

### Product

$$
\lim_{n\to\infty}a_nb_n=AB
$$

### Quotient

If $B\neq0$,

$$
\lim_{n\to\infty}\frac{a_n}{b_n}
=
\frac{A}{B}
$$

---

## 9. Constant Sequence

For a constant sequence

$$
a_n=c
$$

the limit is

$$
\lim_{n\to\infty}a_n=c
$$

---

## 10. Reciprocal Sequence

For a positive integer $k$,

$$
\lim_{n\to\infty}\frac{1}{n^k}=0
$$

---

## 11. Polynomial Sequence Limits

For a polynomial sequence,

$$
a_n=c_0+c_1n+\cdots+c_kn^k
$$

the behavior as $n\to\infty$ is determined by its highest-degree term.

---

# Limits of Functions

## 12. Limit of a Function

The limit of $f(x)$ as $x$ approaches $a$ is written as

$$
\lim_{x\to a}f(x)=L
$$

It describes the value that $f(x)$ approaches as $x$ approaches $a$.

---

## 13. Left-Hand Limit

The left-hand limit is

$$
\lim_{x\to a^-}f(x)
$$

where $x$ approaches $a$ from values less than $a$.

---

## 14. Right-Hand Limit

The right-hand limit is

$$
\lim_{x\to a^+}f(x)
$$

where $x$ approaches $a$ from values greater than $a$.

---

## 15. Existence of a Limit

The two-sided limit exists when

$$
\lim_{x\to a^-}f(x)
=
\lim_{x\to a^+}f(x)
$$

In that case,

$$
\lim_{x\to a}f(x)
=
\lim_{x\to a^-}f(x)
=
\lim_{x\to a^+}f(x)
$$

---

## 16. Limit Laws for Functions

If

$$
\lim_{x\to a}f(x)=L
\qquad\text{and}\qquad
\lim_{x\to a}g(x)=M
$$

then:

### Sum

$$
\lim_{x\to a}[f(x)+g(x)]=L+M
$$

### Difference

$$
\lim_{x\to a}[f(x)-g(x)]=L-M
$$

### Constant Multiple

$$
\lim_{x\to a}cf(x)=cL
$$

### Product

$$
\lim_{x\to a}f(x)g(x)=LM
$$

### Quotient

If $M\neq0$,

$$
\lim_{x\to a}\frac{f(x)}{g(x)}
=
\frac{L}{M}
$$

---

## 17. Graphical Interpretation of Limits

The limit

$$
\lim_{x\to a}f(x)=L
$$

means that the graph of $f$ approaches the point with $y$-coordinate $L$ as $x$ approaches $a$.

The value $f(a)$ does not necessarily have to equal $L$.

---

## 18. Infinite Limits

A function has an infinite limit at $x=a$ when its values grow without bound as $x$ approaches $a$.

For example,

$$
\lim_{x\to a}f(x)=+\infty
$$

or

$$
\lim_{x\to a}f(x)=-\infty
$$

---

## 19. Limits at Infinity

Limits at infinity describe the behavior of a function as $x$ becomes arbitrarily large or negative.

$$
\lim_{x\to\infty}f(x)
$$

and

$$
\lim_{x\to-\infty}f(x)
$$

describe the corresponding end behavior.

---

# Continuity

## 20. Continuity at a Point

A function $f$ is continuous at $x=a$ if:

1. $f(a)$ is defined.
2. $\displaystyle\lim_{x\to a}f(x)$ exists.
3. The limit equals the function value.

Therefore,

$$
\boxed{
\lim_{x\to a}f(x)=f(a)
}
$$

---

## 21. Continuity on an Interval

A function is continuous on an interval if it is continuous at every point in that interval.

---

## 22. Continuous Functions

Common classes of continuous functions include:

* Polynomial functions
* Exponential functions
* Logarithmic functions on their domains
* Rational functions wherever their denominator is non-zero

---

## 23. Discontinuity

A function is discontinuous at $x=a$ if the conditions for continuity are not satisfied.

Discontinuities may occur because:

* $f(a)$ is undefined.
* The limit does not exist.
* The limit exists but is not equal to $f(a)$.

---

# Formula Reference

| Topic            | Formula                                                |
| ---------------- | ------------------------------------------------------ |
| Function         | $y=f(x)$                                               |
| Graph            | ${(x,f(x)):x\in\operatorname{Dom}(f)}$                 |
| Secant slope     | $\displaystyle\frac{f(x_2)-f(x_1)}{x_2-x_1}$           |
| Tangent slope    | $\displaystyle\lim_{x\to a}\frac{f(x)-f(a)}{x-a}$      |
| Tangent line     | $y-f(a)=m(x-a)$                                        |
| Sequence limit   | $\displaystyle\lim_{n\to\infty}a_n=L$                  |
| Reciprocal limit | $\displaystyle\lim_{n\to\infty}\frac1{n^k}=0$          |
| Function limit   | $\displaystyle\lim_{x\to a}f(x)=L$                     |
| Left-hand limit  | $\displaystyle\lim_{x\to a^-}f(x)$                     |
| Right-hand limit | $\displaystyle\lim_{x\to a^+}f(x)$                     |
| Limit exists     | $\displaystyle\lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)$ |
| Continuity       | $\displaystyle\lim_{x\to a}f(x)=f(a)$                  |
