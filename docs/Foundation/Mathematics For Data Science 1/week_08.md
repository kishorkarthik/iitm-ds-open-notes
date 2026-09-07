---

sidebar_position: 9
title: Week 8 — Derivatives, Tangents and Critical Points
---------------------------------------------------------

# Week 8 — Derivatives, Tangents and Critical Points
---
## 1. Differentiability

A function $f$ is differentiable at $x=a$ if the following limit exists:

$$
f'(a)
=
\lim_{h\to0}
\frac{f(a+h)-f(a)}{h}
$$

The derivative $f'(a)$ represents the instantaneous rate of change of $f$ at $x=a$.

---

## 2. Derivative Function

The derivative of $f(x)$ is the function

$$
f'(x)
=
\lim_{h\to0}
\frac{f(x+h)-f(x)}{h}
$$

provided the limit exists.

---

## 3. Differentiability and Continuity

If $f$ is differentiable at $x=a$, then $f$ is continuous at $x=a$.

$$
\boxed{
\text{Differentiable}
\implies
\text{Continuous}
}
$$

The converse is not necessarily true.

---

# Computing Derivatives

## 4. Constant Rule

For a constant $c$,

$$
\frac{d}{dx}(c)=0
$$

---

## 5. Power Rule

For a real number $n$,

$$
\frac{d}{dx}(x^n)=nx^{n-1}
$$

---

## 6. Constant Multiple Rule

$$
\frac{d}{dx}[cf(x)]
=
cf'(x)
$$

---

## 7. Sum Rule

$$
\frac{d}{dx}[f(x)+g(x)]
=
f'(x)+g'(x)
$$

---

## 8. Difference Rule

$$
\frac{d}{dx}[f(x)-g(x)]
=
f'(x)-g'(x)
$$

---

## 9. Product Rule

$$
\frac{d}{dx}[f(x)g(x)]
=
f'(x)g(x)+f(x)g'(x)
$$

---

## 10. Quotient Rule

For $g(x)\neq0$,

$$
\frac{d}{dx}
\left[
\frac{f(x)}{g(x)}
\right]
=
\frac{
g(x)f'(x)-f(x)g'(x)
}{
[g(x)]^2
}
$$

---

## 11. Chain Rule

For a composite function,

$$
\frac{d}{dx}f(g(x))
=
f'(g(x))g'(x)
$$

---

# Common Derivatives

## 12. Exponential Function

$$
\frac{d}{dx}e^x=e^x
$$

More generally,

$$
\frac{d}{dx}a^x
=
a^x\ln a
$$

where $a>0$ and $a\neq1$.

---

## 13. Logarithmic Function

$$
\frac{d}{dx}\ln x
=
\frac1x
$$

More generally,

$$
\frac{d}{dx}\log_a x
=
\frac{1}{x\ln a}
$$

---

# L'Hôpital's Rule

## 14. Indeterminate Forms

L'Hôpital's rule is used for limits that produce indeterminate forms such as

$$
\frac00
$$

or

$$
\frac{\infty}{\infty}
$$

---

## 15. L'Hôpital's Rule

If

$$
\lim_{x\to a}\frac{f(x)}{g(x)}
$$

has an appropriate indeterminate form and the required conditions hold, then

$$
\boxed{
\lim_{x\to a}\frac{f(x)}{g(x)}
=
\lim_{x\to a}\frac{f'(x)}{g'(x)}
}
$$

when the latter limit exists.

---

# Derivatives and Tangents

## 16. Tangent Slope

The derivative gives the slope of the tangent line:

$$
m_{\text{tangent}}=f'(a)
$$

---

## 17. Tangent Line

At the point $(a,f(a))$,

$$
\boxed{
y-f(a)=f'(a)(x-a)
}
$$

---

## 18. Geometric Interpretation

The derivative $f'(a)$ represents the slope of the graph of $f$ at $x=a$.

* $f'(a)>0$: function is locally increasing.
* $f'(a)<0$: function is locally decreasing.
* $f'(a)=0$: horizontal tangent.

---

# Linear Approximation

## 19. Linear Approximation

Near $x=a$, a differentiable function can be approximated by its tangent line.

$$
f(x)
\approx
f(a)+f'(a)(x-a)
$$

---

## 20. Linear Approximation Formula

The linear approximation of $f$ at $x=a$ is

$$
\boxed{
L(x)=f(a)+f'(a)(x-a)
}
$$

Thus,

$$
f(x)\approx L(x)
$$

for $x$ sufficiently close to $a$.

---

# Critical Points

## 21. Critical Point

A critical point of $f$ occurs at $x=c$ if:

$$
f'(c)=0
$$

or $f'(c)$ does not exist, provided $c$ is in the domain of $f$.

---

## 22. Critical Points and Extrema

Critical points are candidates for local maxima and local minima.

A critical point does **not** necessarily have to be a maximum or minimum.

---

## 23. Local Maximum

A function has a local maximum at $x=c$ if

$$
f(c)\geq f(x)
$$

for $x$ sufficiently close to $c$.

---

## 24. Local Minimum

A function has a local minimum at $x=c$ if

$$
f(c)\leq f(x)
$$

for $x$ sufficiently close to $c$.

---

## 25. First Derivative Test

Suppose $f'(c)=0$.

### Local Maximum

If the derivative changes from positive to negative,

$$
+\rightarrow-
$$

then $f$ has a local maximum at $c$.

### Local Minimum

If the derivative changes from negative to positive,

$$
-\rightarrow+
$$

then $f$ has a local minimum at $c$.

---

## 26. Second Derivative Test

If

$$
f'(c)=0
$$

and $f''(c)$ exists:

### Local Maximum

$$
f''(c)<0
$$

implies a local maximum.

### Local Minimum

$$
f''(c)>0
$$

implies a local minimum.

If

$$
f''(c)=0
$$

the test is inconclusive.

---

# Formula Reference

| Topic                  | Formula                                                    |
| ---------------------- | ---------------------------------------------------------- |
| Derivative definition  | $\displaystyle f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}$    |
| Power rule             | $\displaystyle \frac{d}{dx}(x^n)=nx^{n-1}$                 |
| Constant rule          | $\displaystyle \frac{d}{dx}(c)=0$                          |
| Sum rule               | $\displaystyle (f+g)'=f'+g'$                               |
| Difference rule        | $\displaystyle (f-g)'=f'-g'$                               |
| Product rule           | $\displaystyle (fg)'=f'g+fg'$                              |
| Quotient rule          | $\displaystyle \left(\frac fg\right)'=\frac{gf'-fg'}{g^2}$ |
| Chain rule             | $\displaystyle (f(g(x)))'=f'(g(x))g'(x)$                   |
| Exponential            | $\displaystyle \frac{d}{dx}e^x=e^x$                        |
| General exponential    | $\displaystyle \frac{d}{dx}a^x=a^x\ln a$                   |
| Natural logarithm      | $\displaystyle \frac{d}{dx}\ln x=\frac1x$                  |
| Tangent slope          | $\displaystyle m=f'(a)$                                    |
| Tangent line           | $\displaystyle y-f(a)=f'(a)(x-a)$                          |
| Linear approximation   | $\displaystyle L(x)=f(a)+f'(a)(x-a)$                       |
| L'Hôpital's rule       | $\displaystyle \lim\frac fg=\lim\frac{f'}{g'}$             |
| Critical point         | $f'(c)=0$ or $f'(c)$ does not exist                        |
| Second derivative test | $f''(c)<0$: max, $f''(c)>0$: min                           |
