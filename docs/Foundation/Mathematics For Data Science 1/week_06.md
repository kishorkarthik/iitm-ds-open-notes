---

sidebar_position: 7
title: Week 6 — Logarithmic Functions
-------------------------------------

# Week 6 — Logarithmic Functions
---
## 1. Logarithm

A logarithm is the inverse operation of exponentiation.

For $a>0$, $a\neq1$, and $x>0$,

$$
\log_a x=y
\iff
a^y=x
$$

Here:

* $a$ is the **base**.
* $x$ is the **argument**.
* $y$ is the **logarithm**.

---

## 2. Common Logarithm

A logarithm with base $10$ is called a common logarithm.

$$
\log x=\log_{10}x
$$

---

## 3. Natural Logarithm

A logarithm with base $e$ is called the natural logarithm.

$$
\ln x=\log_e x
$$

where

$$
e\approx2.71828
$$

---

# Properties of Logarithms

## 4. Domain

For

$$
f(x)=\log_a x
$$

the argument must be positive:

$$
x>0
$$

Therefore,

$$
\operatorname{Dom}(f)=(0,\infty)
$$

---

## 5. Range

The range of

$$
f(x)=\log_a x
$$

is

$$
\mathbb R
$$

---

## 6. Logarithm of One

$$
\log_a1=0
$$

because

$$
a^0=1
$$

---

## 7. Logarithm of the Base

$$
\log_a a=1
$$

because

$$
a^1=a
$$

---

## 8. Product Rule

For $x>0$ and $y>0$,

$$
\log_a(xy)
=
\log_a x+\log_a y
$$

---

## 9. Quotient Rule

For $x>0$ and $y>0$,

$$
\log_a\left(\frac{x}{y}\right)
=
\log_a x-\log_a y
$$

---

## 10. Power Rule

For $x>0$,

$$
\log_a(x^r)
=
r\log_a x
$$

---

## 11. Reciprocal Rule

For $x>0$,

$$
\log_a\left(\frac1x\right)
=
-\log_a x
$$

---

## 12. Change of Base Formula

For valid bases $a$ and $b$,

$$
\log_a x
=
\frac{\log_b x}{\log_b a}
$$

In particular,

$$
\log_a x
=
\frac{\ln x}{\ln a}
$$

---

# Graphs of Logarithmic Functions

## 13. Logarithmic Function

A logarithmic function has the form

$$
f(x)=\log_a x
$$

where

$$
a>0,\qquad a\neq1
$$

---

## 14. Increasing Logarithmic Function

If

$$
a>1
$$

then $f(x)=\log_a x$ is increasing.

---

## 15. Decreasing Logarithmic Function

If

$$
0<a<1
$$

then $f(x)=\log_a x$ is decreasing.

---

## 16. Important Point

Every logarithmic function

$$
y=\log_a x
$$

passes through

$$
(1,0)
$$

because

$$
\log_a1=0
$$

---

## 17. Vertical Asymptote

The graph of

$$
y=\log_a x
$$

has a vertical asymptote at

$$
x=0
$$

---

## 18. Relationship with Exponential Functions

The logarithmic function and its corresponding exponential function are inverses:

$$
y=\log_a x
\iff
x=a^y
$$

Their graphs are reflections of each other across

$$
y=x
$$

---

# Exponential Equations

## 19. Exponential Equation

An exponential equation contains the unknown in an exponent.

A basic form is

$$
a^x=b
$$

where

$$
a>0,\qquad a\neq1
$$

---

## 20. Solving an Exponential Equation

Using logarithms,

$$
a^x=b
$$

gives

$$
x=\log_a b
$$

Using natural logarithms,

$$
x=\frac{\ln b}{\ln a}
$$

---

## 21. Exponential Equations with the Same Base

If

$$
a^x=a^y
$$

where

$$
a>0,\qquad a\neq1
$$

then

$$
x=y
$$

---

# Logarithmic Equations

## 22. Logarithmic Equation

A logarithmic equation contains the unknown inside a logarithm.

A basic form is

$$
\log_a x=b
$$

Using the definition of a logarithm,

$$
x=a^b
$$

---

## 23. Equal Logarithms

For

$$
a>0,\qquad a\neq1
$$

and positive $x,y$,

$$
\log_a x=\log_a y
\iff
x=y
$$

---

## 24. Converting Logarithmic Equations

The fundamental conversion is

$$
\log_a x=y
\iff
a^y=x
$$

This allows logarithmic equations to be converted into exponential equations.

---

## 25. Domain Restrictions

Every logarithmic expression must have a positive argument.

For

$$
\log_a(f(x))
$$

the domain requires

$$
f(x)>0
$$

---

# Logarithmic Formula Reference

| Concept              | Formula / Property                 |
| -------------------- | ---------------------------------- |
| Definition           | $\log_a x=y\iff a^y=x$             |
| Common logarithm     | $\log x=\log_{10}x$                |
| Natural logarithm    | $\ln x=\log_e x$                   |
| Domain               | $x>0$                              |
| Range                | $\mathbb R$                        |
| Logarithm of $1$     | $\log_a1=0$                        |
| Logarithm of base    | $\log_a a=1$                       |
| Product rule         | $\log_a(xy)=\log_a x+\log_a y$     |
| Quotient rule        | $\log_a(x/y)=\log_a x-\log_a y$    |
| Power rule           | $\log_a(x^r)=r\log_a x$            |
| Reciprocal rule      | $\log_a(1/x)=-\log_a x$            |
| Change of base       | $\log_a x=\frac{\log_bx}{\log_ba}$ |
| Increasing           | $a>1$                              |
| Decreasing           | $0<a<1$                            |
| $x$-intercept        | $(1,0)$                            |
| Vertical asymptote   | $x=0$                              |
| Exponential equation | $a^x=b\Rightarrow x=\log_a b$      |
| Logarithmic equation | $\log_a x=b\Rightarrow x=a^b$      |
| Equal logarithms     | $\log_a x=\log_a y\iff x=y$        |
| Logarithmic domain   | $f(x)>0$ for $\log_a(f(x))$        |
| Graph relationship   | Reflection across $y=x$            |
