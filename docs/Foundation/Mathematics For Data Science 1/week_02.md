---

sidebar_position: 3
title: Week 2 — Rectangular Coordinate System and Straight Lines
----------------------------------------------------------------

# Week 2 — Rectangular Coordinate System and Straight Lines
---
## 1. Rectangular Coordinate System

A rectangular coordinate system represents points in a plane using two perpendicular axes:

* **x-axis** — horizontal axis
* **y-axis** — vertical axis
* **Origin** — intersection of the two axes

The origin is:

$$
O=(0,0)
$$

A point in the plane is represented as:

$$
P=(x,y)
$$

where $x$ is the x-coordinate and $y$ is the y-coordinate.

---

## 2. Quadrants

The coordinate plane is divided into four quadrants.

| Quadrant | $x$ | $y$ |
| -------- | --: | --: |
| I        | $+$ | $+$ |
| II       | $-$ | $+$ |
| III      | $-$ | $-$ |
| IV       | $+$ | $-$ |

Points on the x-axis or y-axis do not belong to any quadrant.

---

## 3. Distance Between Two Points

For two points:

$$
P_1=(x_1,y_1)
$$

and

$$
P_2=(x_2,y_2)
$$

the distance is:

$$
d=
\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}
$$

---

## 4. Distance from the Origin

For a point:

$$
P=(x,y)
$$

its distance from the origin is:

$$
OP=\sqrt{x^2+y^2}
$$

---

## 5. Midpoint of a Line Segment

For two points:

$$
P_1=(x_1,y_1)
$$

and

$$
P_2=(x_2,y_2)
$$

the midpoint is:

$$
M=
\left(
\frac{x_1+x_2}{2},
\frac{y_1+y_2}{2}
\right)
$$

---

# Straight Lines

## 6. Straight Line

A straight line is represented by a linear equation in two variables.

The general form is:

$$
Ax+By+C=0
$$

where $A$, $B$, and $C$ are constants and $A$ and $B$ are not both zero.

---

## 7. Slope of a Line

The slope of a line measures the change in $y$ for a given change in $x$.

For two points:

$$
P_1=(x_1,y_1)
$$

and

$$
P_2=(x_2,y_2)
$$

the slope is:

$$
m=
\frac{y_2-y_1}{x_2-x_1}
$$

provided:

$$
x_2\neq x_1
$$

Equivalently:

$$
m=\frac{\Delta y}{\Delta x}
$$

---

## 8. Interpretation of Slope

| Slope     | Line       |
| --------- | ---------- |
| $m>0$     | Increasing |
| $m<0$     | Decreasing |
| $m=0$     | Horizontal |
| Undefined | Vertical   |

A horizontal line has equation:

$$
y=c
$$

A vertical line has equation:

$$
x=c
$$

---

## 9. Slope and Angle of Inclination

If a line makes an angle $\theta$ with the positive x-axis, then:

$$
m=\tan\theta
$$

Therefore:

$$
\theta=\tan^{-1}(m)
$$

---

# Equations of a Straight Line

## 10. Slope-Intercept Form

A line with slope $m$ and y-intercept $c$ is:

$$
y=mx+c
$$

Here:

* $m$ is the slope
* $c$ is the y-intercept

The y-intercept is:

$$
(0,c)
$$

---

## 11. Point-Slope Form

A line with slope $m$ passing through:

$$
(x_1,y_1)
$$

is:

$$
y-y_1=m(x-x_1)
$$

---

## 12. Two-Point Form

A line passing through:

$$
(x_1,y_1)
$$

and

$$
(x_2,y_2)
$$

is:

$$
y-y_1
=
\frac{y_2-y_1}{x_2-x_1}
(x-x_1)
$$

provided:

$$
x_2\neq x_1
$$

---

## 13. Intercept Form

If a line has x-intercept $a$ and y-intercept $b$, its equation is:

$$
\frac{x}{a}+\frac{y}{b}=1
$$

where $a\neq0$ and $b\neq0$.

---

## 14. General Form

The general equation of a straight line is:

$$
Ax+By+C=0
$$

If $B\neq0$, then:

$$
y=-\frac{A}{B}x-\frac{C}{B}
$$

Therefore:

$$
m=-\frac{A}{B}
$$

and

$$
c=-\frac{C}{B}
$$

---

# Parallel and Perpendicular Lines

## 15. Parallel Lines

Two non-vertical lines are parallel if their slopes are equal:

$$
m_1=m_2
$$

---

## 16. Perpendicular Lines

Two non-vertical lines are perpendicular if:

$$
m_1m_2=-1
$$

Therefore:

$$
m_2=-\frac{1}{m_1}
$$

A horizontal line and a vertical line are also perpendicular.

---

# Distance from a Point to a Line

## 17. Point-to-Line Distance

For a line:

$$
Ax+By+C=0
$$

and a point:

$$
P=(x_0,y_0)
$$

the perpendicular distance between them is:

$$
d=
\frac{|Ax_0+By_0+C|}
{\sqrt{A^2+B^2}}
$$

---

# Straight-Line Fit

## 18. Data Points and Straight-Line Fit

Suppose we have data points:

$$
(x_1,y_1),(x_2,y_2),\ldots,(x_n,y_n)
$$

A straight-line fit attempts to represent the relationship between $x$ and $y$ using:

$$
\hat y=mx+c
$$

where:

* $m$ is the slope
* $c$ is the intercept
* $\hat y$ is the predicted value of $y$

---

## 19. Residual

For an observed value $y_i$ and predicted value $\hat y_i$, the residual is:

$$
e_i=y_i-\hat y_i
$$

For a fitted line:

$$
\hat y_i=mx_i+c
$$

the residual is:

$$
e_i=y_i-(mx_i+c)
$$

---

## 20. Least-Squares Method

The least-squares method chooses $m$ and $c$ such that the sum of squared residuals is minimized.

The objective function is:

$$
S(m,c)
=
\sum_{i=1}^{n}
\left[y_i-(mx_i+c)\right]^2
$$

The fitted line is:

$$
\hat y=mx+c
$$

where $m$ and $c$ minimize $S(m,c)$.

---

## 21. Mean of Data

The mean of the x-values is:

$$
\bar{x}
=
\frac{1}{n}
\sum_{i=1}^{n}x_i
$$

The mean of the y-values is:

$$
\bar{y}
=
\frac{1}{n}
\sum_{i=1}^{n}y_i
$$

---

## 22. Least-Squares Slope

The slope of the least-squares fitted line is:

$$
m=
\frac{
\sum_{i=1}^{n}
(x_i-\bar{x})(y_i-\bar{y})
}{
\sum_{i=1}^{n}
(x_i-\bar{x})^2
}
$$

provided the denominator is non-zero.

---

## 23. Least-Squares Intercept

Once $m$ is known:

$$
c=\bar{y}-m\bar{x}
$$

Therefore, the fitted line can also be written as:

$$
\boxed{
\hat y
=
\bar{y}+m(x-\bar{x})
}
$$

---
