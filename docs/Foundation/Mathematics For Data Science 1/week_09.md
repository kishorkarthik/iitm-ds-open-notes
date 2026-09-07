---

sidebar_position: 10
title: Week 9 — Integral of a Function of One Variable
------------------------------------------------------

# Week 9 — Integral of a Function of One Variable

## 1. Area Under a Curve

For a non-negative function $f(x)$ on $[a,b]$, the area under the curve is represented by

$$
\int_a^b f(x)\,dx
$$

This represents the accumulated area between the graph of $f(x)$ and the $x$-axis from $x=a$ to $x=b$.

---

## 2. Definite Integral

The definite integral of $f(x)$ from $a$ to $b$ is written as

$$
\boxed{
\int_a^b f(x)\,dx
}
$$

where:

* $a$ is the lower limit.
* $b$ is the upper limit.
* $f(x)$ is the integrand.
* $dx$ indicates integration with respect to $x$.

---

## 3. Integral as Accumulated Area

The definite integral represents signed area.

If $f(x)\geq0$ on $[a,b]$,

$$
\int_a^b f(x)\,dx
$$

is the area under the curve.

If $f(x)<0$, the integral contributes negatively.

---

## 4. Area Between a Curve and the $x$-Axis

When the function changes sign, the total geometric area is obtained by integrating the absolute value:

$$
\boxed{
\text{Area}
=
\int_a^b |f(x)|\,dx
}
$$

---

# Antiderivatives

## 5. Antiderivative

A function $F(x)$ is an antiderivative of $f(x)$ if

$$
F'(x)=f(x)
$$

The indefinite integral is written as

$$
\boxed{
\int f(x)\,dx=F(x)+C
}
$$

where $C$ is an arbitrary constant.

---

## 6. Constant of Integration

Since

$$
\frac{d}{dx}(C)=0
$$

all functions differing by a constant have the same derivative.

Therefore,

$$
\int f(x)\,dx=F(x)+C
$$

---

# Basic Integration Rules

## 7. Constant Rule

$$
\boxed{
\int c\,dx=cx+C
}
$$

---

## 8. Power Rule

For $n\neq-1$,

$$
\boxed{
\int x^n\,dx
=
\frac{x^{n+1}}{n+1}+C
}
$$

---

## 9. Constant Multiple Rule

$$
\boxed{
\int cf(x)\,dx
=
c\int f(x)\,dx
}
$$

---

## 10. Sum Rule

$$
\boxed{
\int [f(x)+g(x)]\,dx
=
\int f(x)\,dx+\int g(x)\,dx
}
$$

---

## 11. Difference Rule

$$
\boxed{
\int [f(x)-g(x)]\,dx
=
\int f(x)\,dx-\int g(x)\,dx
}
$$

---

# Definite Integral Properties

## 12. Integral over a Zero-Length Interval

$$
\boxed{
\int_a^a f(x)\,dx=0
}
$$

---

## 13. Reversing the Limits

$$
\boxed{
\int_a^b f(x)\,dx
=
-\int_b^a f(x)\,dx
}
$$

---

## 14. Splitting an Integral

For $a<c<b$,

$$
\boxed{
\int_a^b f(x)\,dx
=
\int_a^c f(x)\,dx
+
\int_c^b f(x)\,dx
}
$$

---

## 15. Integral of a Sum

$$
\boxed{
\int_a^b[f(x)+g(x)]\,dx
=
\int_a^b f(x)\,dx
+
\int_a^b g(x)\,dx
}
$$

---

## 16. Constant Multiple

$$
\boxed{
\int_a^b cf(x)\,dx
=
c\int_a^b f(x)\,dx
}
$$

---

# Derivatives and Integrals

## 17. Fundamental Relationship

Differentiation and integration are inverse operations.

If

$$
F'(x)=f(x)
$$

then

$$
\int f(x)\,dx=F(x)+C
$$

---

## 18. Fundamental Theorem of Calculus

If $f$ is continuous on $[a,b]$ and $F$ is an antiderivative of $f$, then

$$
\boxed{
\int_a^b f(x)\,dx
=
F(b)-F(a)
}
$$

---

## 19. Evaluation of a Definite Integral

Using an antiderivative $F(x)$,

$$
\int_a^b f(x)\,dx
=
[F(x)]_a^b
$$

where

$$
[F(x)]_a^b=F(b)-F(a)
$$

---

## 20. Accumulation Function

Define

$$
F(x)=\int_a^x f(t)\,dt
$$

Then, under the conditions of the Fundamental Theorem of Calculus,

$$
\boxed{
F'(x)=f(x)
}
$$

---

# Common Integrals

## 21. Polynomial

For

$$
f(x)=c_nx^n+\cdots+c_1x+c_0
$$

integration is performed term by term:

$$
\int f(x)\,dx
=
\frac{c_nx^{n+1}}{n+1}
+\cdots+
\frac{c_1x^2}{2}
+c_0x+C
$$

---

## 22. Exponential Function

$$
\boxed{
\int e^x\,dx=e^x+C
}
$$

For $a>0$ and $a\neq1$,

$$
\boxed{
\int a^x\,dx
=
\frac{a^x}{\ln a}+C
}
$$

---

## 23. Natural Logarithm

$$
\boxed{
\int\frac1x\,dx
=
\ln|x|+C
}
$$

---

# Formula Reference

| Topic                 | Formula                                                    |      |      |
| --------------------- | ---------------------------------------------------------- | ---- | ---- |
| Definite integral     | $\displaystyle\int_a^b f(x),dx$                            |      |      |
| Area for $f(x)\geq0$  | $\displaystyle\int_a^b f(x),dx$                            |      |      |
| Total geometric area  | $\displaystyle\int_a^b                                     | f(x) | ,dx$ |
| Antiderivative        | $F'(x)=f(x)$                                               |      |      |
| Indefinite integral   | $\displaystyle\int f(x),dx=F(x)+C$                         |      |      |
| Constant rule         | $\displaystyle\int c,dx=cx+C$                              |      |      |
| Power rule            | $\displaystyle\int x^n,dx=\frac{x^{n+1}}{n+1}+C,\ n\neq-1$ |      |      |
| Constant multiple     | $\displaystyle\int cf(x),dx=c\int f(x),dx$                 |      |      |
| Sum rule              | $\displaystyle\int(f+g),dx=\int f,dx+\int g,dx$            |      |      |
| Difference rule       | $\displaystyle\int(f-g),dx=\int f,dx-\int g,dx$            |      |      |
| Zero interval         | $\displaystyle\int_a^a f(x),dx=0$                          |      |      |
| Reversing limits      | $\displaystyle\int_a^b f(x),dx=-\int_b^a f(x),dx$          |      |      |
| Splitting integral    | $\displaystyle\int_a^b f=\int_a^c f+\int_c^b f$            |      |      |
| Fundamental Theorem   | $\displaystyle\int_a^b f(x),dx=F(b)-F(a)$                  |      |      |
| Accumulation function | $\displaystyle F(x)=\int_a^x f(t),dt$                      |      |      |
| FTC derivative        | $\displaystyle F'(x)=f(x)$                                 |      |      |
| Exponential           | $\displaystyle\int e^x,dx=e^x+C$                           |      |      |
| General exponential   | $\displaystyle\int a^x,dx=\frac{a^x}{\ln a}+C$             |      |      |


