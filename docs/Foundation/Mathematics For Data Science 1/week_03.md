---

sidebar_position: 3
title: Week 3 — Quadratic Functions
-----------------------------------

# Week 3 — Quadratic Functions
---
## 1. Quadratic Function

A quadratic function is a polynomial function of degree 2.

The general form is:

$$
f(x)=ax^2+bx+c
$$

where:

$$
a\neq0
$$

and $a$, $b$, and $c$ are constants.

---

## 2. Graph of a Quadratic Function

The graph of a quadratic function is called a **parabola**.

For:

$$
f(x)=ax^2+bx+c
$$

* If $a>0$, the parabola opens upward.
* If $a<0$, the parabola opens downward.

---

## 3. Vertex of a Parabola

For:

$$
f(x)=ax^2+bx+c
$$

the x-coordinate of the vertex is:

$$
x_v=-\frac{b}{2a}
$$

The y-coordinate is:

$$
y_v=f\left(-\frac{b}{2a}\right)
$$

Therefore, the vertex is:

$$
\boxed{
\left(
-\frac{b}{2a},
f\left(-\frac{b}{2a}\right)
\right)
}
$$

---

## 4. Axis of Symmetry

The axis of symmetry of:

$$
f(x)=ax^2+bx+c
$$

is:

$$
\boxed{
x=-\frac{b}{2a}
}
$$

The parabola is symmetric about this vertical line.

---

## 5. Vertex Form

A quadratic function can be written in vertex form as:

$$
f(x)=a(x-h)^2+k
$$

where $(h,k)$ is the vertex.

Thus:

$$
\boxed{\text{Vertex}=(h,k)}
$$

The axis of symmetry is:

$$
x=h
$$

---

## 6. Completing the Square

The standard form:

$$
ax^2+bx+c
$$

can be converted into vertex form.

For $a\neq0$:

$$
ax^2+bx+c
=
a\left(x+\frac{b}{2a}\right)^2
-\frac{b^2-4ac}{4a}
$$

Therefore:

$$
f(x)
=
a\left(x+\frac{b}{2a}\right)^2
-\frac{b^2-4ac}{4a}
$$

---

## 7. Maximum and Minimum

For:

$$
f(x)=ax^2+bx+c
$$

the vertex determines the maximum or minimum value.

### If $a>0$

The parabola opens upward, so the vertex gives the **minimum** value.

$$
f_{\min}=f\left(-\frac{b}{2a}\right)
$$

### If $a<0$

The parabola opens downward, so the vertex gives the **maximum** value.

$$
f_{\max}=f\left(-\frac{b}{2a}\right)
$$

---

## 8. Maximum or Minimum Value

The value of the quadratic function at its vertex is:

$$
\boxed{
f\left(-\frac{b}{2a}\right)
=
\frac{4ac-b^2}{4a}
}
$$

Equivalently:

$$
\boxed{
f_{\text{vertex}}
=
-\frac{b^2-4ac}{4a}
}
$$

---

# Quadratic Equations

## 9. Quadratic Equation

A quadratic equation has the form:

$$
ax^2+bx+c=0
$$

where:

$$
a\neq0
$$

The values of $x$ satisfying the equation are called its **roots** or **solutions**.

---

## 10. Quadratic Formula

The roots of:

$$
ax^2+bx+c=0
$$

are:

$$
\boxed{
x=
\frac{-b\pm\sqrt{b^2-4ac}}{2a}
}
$$

---

## 11. Discriminant

The discriminant of:

$$
ax^2+bx+c=0
$$

is:

$$
\boxed{
\Delta=b^2-4ac
}
$$

The discriminant determines the nature of the roots.

| Discriminant | Roots                   |
| ------------ | ----------------------- |
| $\Delta>0$   | Two distinct real roots |
| $\Delta=0$   | One repeated real root  |
| $\Delta<0$   | No real roots           |

---

## 12. Roots and the Discriminant

The roots are:

$$
x_1=
\frac{-b+\sqrt{\Delta}}{2a}
$$

and

$$
x_2=
\frac{-b-\sqrt{\Delta}}{2a}
$$

where:

$$
\Delta=b^2-4ac
$$

---

## 13. Sum of Roots

If $x_1$ and $x_2$ are the roots of:

$$
ax^2+bx+c=0
$$

then:

$$
\boxed{
x_1+x_2=-\frac{b}{a}
}
$$

---

## 14. Product of Roots

For the same quadratic:

$$
\boxed{
x_1x_2=\frac{c}{a}
}
$$

---

## 15. Quadratic from Its Roots

If $x_1$ and $x_2$ are the roots of a quadratic, then:

$$
(x-x_1)(x-x_2)=0
$$

Expanding:

$$
x^2-(x_1+x_2)x+x_1x_2=0
$$

A general quadratic with these roots is:

$$
\boxed{
a(x-x_1)(x-x_2)
}
$$

where $a\neq0$.

---

# Intercepts and Graphs

## 16. x-Intercepts

The x-intercepts of:

$$
y=f(x)
$$

occur where:

$$
f(x)=0
$$

For a quadratic:

$$
ax^2+bx+c=0
$$

the x-intercepts correspond to its real roots.

---

## 17. y-Intercept

For:

$$
f(x)=ax^2+bx+c
$$

the y-intercept occurs at:

$$
x=0
$$

Therefore:

$$
f(0)=c
$$

and the y-intercept is:

$$
\boxed{(0,c)}
$$

---

## 18. Number of x-Intercepts

The number of x-intercepts depends on the discriminant.

| $\Delta$   | x-Intercepts |
| ---------- | ------------ |
| $\Delta>0$ | Two          |
| $\Delta=0$ | One          |
| $\Delta<0$ | None         |

---

## 19. Vertex and Roots

If the roots are $x_1$ and $x_2$, then the axis of symmetry lies halfway between them:

$$
\boxed{
x_v=\frac{x_1+x_2}{2}
}
$$

Since:

$$
x_1+x_2=-\frac{b}{a}
$$

we obtain:

$$
x_v=-\frac{b}{2a}
$$

---

# Slope of a Quadratic

## 20. Average Rate of Change

For a function $f(x)$ between $x_1$ and $x_2$, the average rate of change is:

$$
\boxed{
\frac{f(x_2)-f(x_1)}
{x_2-x_1}
}
$$

This represents the slope of the secant line between the corresponding points on the graph.

---

## 21. Slope of a Quadratic

For:

$$
f(x)=ax^2+bx+c
$$

the slope between $x_1$ and $x_2$ is:

$$
\frac{f(x_2)-f(x_1)}
{x_2-x_1}
$$

which simplifies to:

$$
\boxed{
a(x_1+x_2)+b
}
$$

provided:

$$
x_1\neq x_2
$$

---

## 22. Slope at the Vertex

At the vertex:

$$
x_v=-\frac{b}{2a}
$$

the instantaneous slope is zero.

Thus, the vertex is the point where the parabola changes from decreasing to increasing when $a>0$, or from increasing to decreasing when $a<0$.

---

# Quadratic Transformations

## 23. Basic Quadratic

The basic quadratic function is:

$$
f(x)=x^2
$$

Its vertex is:

$$
(0,0)
$$

and its axis of symmetry is:

$$
x=0
$$

---

## 24. Vertical Scaling and Reflection

For:

$$
f(x)=ax^2
$$

* $|a|>1$ makes the parabola narrower.
* $0<|a|<1$ makes the parabola wider.
* $a>0$ opens upward.
* $a<0$ opens downward.

---

## 25. Horizontal and Vertical Translation

For:

$$
f(x)=a(x-h)^2+k
$$

the vertex is:

$$
(h,k)
$$

and the axis of symmetry is:

$$
x=h
$$

---

## 26. Quadratic Function Formula Reference

| Concept                | Formula                                       |
| ---------------------- | --------------------------------------------- |
| Standard form          | $f(x)=ax^2+bx+c$                              |
| Vertex x-coordinate    | $-\frac{b}{2a}$                               |
| Vertex                 | $\left(-\frac{b}{2a},f(-\frac{b}{2a})\right)$ |
| Axis of symmetry       | $x=-\frac{b}{2a}$                             |
| Vertex form            | $a(x-h)^2+k$                                  |
| Quadratic equation     | $ax^2+bx+c=0$                                 |
| Quadratic formula      | $\frac{-b\pm\sqrt{b^2-4ac}}{2a}$              |
| Discriminant           | $\Delta=b^2-4ac$                              |
| Sum of roots           | $-\frac{b}{a}$                                |
| Product of roots       | $\frac{c}{a}$                                 |
| y-intercept            | $(0,c)$                                       |
| Average rate of change | $\frac{f(x_2)-f(x_1)}{x_2-x_1}$               |
| Quadratic secant slope | $a(x_1+x_2)+b$                                |
| Vertex form            | $a(x-h)^2+k$                                  |
