---

sidebar_position: 14
title: Appendix 1 — Mathematics for Data Science I -  Formula Sheet
---
git

| No. | Topic                          | Formula / Key Result                                                           |
| --: | ------------------------------ | ------------------------------------------------------------------------------ |
|   1 | Natural numbers                | $\mathbb{N}={0,1,2,\ldots}$                                                    |
|   2 | Integers                       | $\mathbb{Z}={\ldots,-2,-1,0,1,2,\ldots}$                                       |
|   3 | Rational numbers               |$\mathbb{Q}=\left\{\frac{p}{q}:p,q\in\mathbb{Z},\ q\neq0\right\}$              |
|   4 | Real numbers                   | $\mathbb{R}=\mathbb{Q}\cup{\text{irrational numbers}}$                         |
|   5 | Union                          | $A\cup B$                                                                      |
|   6 | Intersection                   | $A\cap B$                                                                      |
|   7 | Difference                     | $A-B$                                                                          |
|   8 | Complement                     | $A^c$                                                                          |
|   9 | De Morgan's law                | $(A\cup B)^c=A^c\cap B^c$                                                      |
|  10 | De Morgan's law                | $(A\cap B)^c=A^c\cup B^c$                                                      |
|  11 | Cardinality                    | $\lvert A\cup B\rvert=\lvert A\rvert+\lvert B\rvert-\lvert A\cap B\rvert$      |
|  12 | Cartesian product              | $A\times B={(a,b):a\in A,b\in B}$                                              |
|  13 | Function                       | $f:A\to B$                                                                     |
|  14 | Composition                    | $(f\circ g)(x)=f(g(x))$                                                        |
|  15 | Injective                      | $f(x_1)=f(x_2)\Rightarrow x_1=x_2$                                             |
|  16 | Surjective                     | $\operatorname{Range}(f)=B$                                                    |
|  17 | Bijective                      | Injective and surjective                                                       |
|  18 | Inverse                        | $f^{-1}(f(x))=x$                                                               |
|  19 | Distance                       | $d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$                                             |
|  20 | Midpoint                       | $M=\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right)$                           |
|  21 | Slope                          | $m=\frac{y_2-y_1}{x_2-x_1}$                                                    |
|  22 | Slope-intercept form           | $y=mx+c$                                                                       |
|  23 | Point-slope form               | $y-y_1=m(x-x_1)$                                                               |
|  24 | Two-point form                 | $y-y_1=\frac{y_2-y_1}{x_2-x_1}(x-x_1)$                                         |
|  25 | Intercept form                 | $\frac{x}{a}+\frac{y}{b}=1$                                                    |
|  26 | General line                   | $Ax+By+C=0$                                                                    |
|  27 | Parallel lines                 | $m_1=m_2$                                                                      |
|  28 | Perpendicular lines            | $m_1m_2=-1$                                                                    |
|  29 | Point-line distance            | $\displaystyle d=\frac{\lvert Ax_0+By_0+C\rvert}{\sqrt{A^2+B^2}}$              |
|  30 | Quadratic                      | $f(x)=ax^2+bx+c$                                                               |
|  31 | Discriminant                   | $\Delta=b^2-4ac$                                                               |
|  32 | Quadratic formula              | $\displaystyle x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$                               |
|  33 | Vertex                         | $x_v=-\frac{b}{2a},\quad y_v=f(x_v)$                                           |
|  34 | Axis of symmetry               | $x=-\frac{b}{2a}$                                                              |
|  35 | Sum of roots                   | $r_1+r_2=-\frac{b}{a}$                                                         |
|  36 | Product of roots               | $r_1r_2=\frac{c}{a}$                                                           |
|  37 | Polynomial                     | $P(x)=a_nx^n+\cdots+a_1x+a_0$                                                  |
|  38 | Polynomial degree              | $\deg(P)=n$                                                                    |
|  39 | Remainder theorem              | Remainder on division by $x-a$ is $P(a)$                                       |
|  40 | Factor theorem                 | $P(a)=0\iff(x-a)$ is a factor                                                  |
|  41 | Polynomial root                | $P(r)=0$                                                                       |
|  42 | Maximum turning points         | $n-1$ for a polynomial of degree $n$                                           |
|  43 | Exponential function           | $f(x)=a^x,\quad a>0,\ a\neq1$                                                  |
|  44 | Product of powers              | $a^ma^n=a^{m+n}$                                                               |
|  45 | Quotient of powers             | $\frac{a^m}{a^n}=a^{m-n}$                                                      |
|  46 | Power of a power               | $(a^m)^n=a^{mn}$                                                               |
|  47 | Negative exponent              | $a^{-n}=\frac{1}{a^n}$                                                         |
|  48 | Zero exponent                  | $a^0=1$                                                                        |
|  49 | Logarithm definition           | $\log_a x=y\iff a^y=x$                                                         |
|  50 | Product rule                   | $\log_a(xy)=\log_a x+\log_a y$                                                 |
|  51 | Quotient rule                  | $\log_a\left(\frac{x}{y}\right)=\log_a x-\log_a y$                             |
|  52 | Power rule                     | $\log_a(x^r)=r\log_a x$                                                        |
|  53 | Change of base                 | $\log_a x=\frac{\ln x}{\ln a}$                                                 |
|  54 | Natural logarithm              | $\ln x=\log_e x$                                                               |
|  55 | Logarithm of one               | $\log_a1=0$                                                                    |
|  56 | Logarithm of base              | $\log_a a=1$                                                                   |
|  57 | Sequence limit                 | $\displaystyle\lim_{n\to\infty}a_n=L$                                          |
|  58 | Reciprocal limit               | $\displaystyle\lim_{n\to\infty}\frac{1}{n^k}=0$                                |
|  59 | Function limit                 | $\displaystyle\lim_{x\to a}f(x)=L$                                             |
|  60 | Left-hand limit                | $\displaystyle\lim_{x\to a^-}f(x)$                                             |
|  61 | Right-hand limit               | $\displaystyle\lim_{x\to a^+}f(x)$                                             |
|  62 | Limit existence                | $\displaystyle\lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)$                         |
|  63 | Continuity                     | $\displaystyle\lim_{x\to a}f(x)=f(a)$                                          |
|  64 | Derivative definition          | $\displaystyle f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}$                        |
|  65 | Constant rule                  | $\frac{d}{dx}(c)=0$                                                            |
|  66 | Power rule                     | $\frac{d}{dx}(x^n)=nx^{n-1}$                                                   |
|  67 | Sum rule                       | $(f+g)'=f'+g'$                                                                 |
|  68 | Difference rule                | $(f-g)'=f'-g'$                                                                 |
|  69 | Product rule                   | $(fg)'=f'g+fg'$                                                                |
|  70 | Quotient rule                  | $\displaystyle\left(\frac{f}{g}\right)'=\frac{gf'-fg'}{g^2}$                   |
|  71 | Chain rule                     | $(f(g(x)))'=f'(g(x))g'(x)$                                                     |
|  72 | Exponential derivative         | $\frac{d}{dx}e^x=e^x$                                                          |
|  73 | General exponential derivative | $\frac{d}{dx}a^x=a^x\ln a$                                                     |
|  74 | Logarithmic derivative         | $\displaystyle\frac{d}{dx}\ln x=\frac{1}{x}$                                   |
|  75 | Tangent slope                  | $m=f'(a)$                                                                      |
|  76 | Tangent line                   | $y-f(a)=f'(a)(x-a)$                                                            |
|  77 | Linear approximation           | $L(x)=f(a)+f'(a)(x-a)$                                                         |
|  78 | Critical point                 | $f'(c)=0$ or $f'(c)$ does not exist                                            |
|  79 | Second derivative test         | $f''(c)<0$: local maximum                                                      |
|  80 | Second derivative test         | $f''(c)>0$: local minimum                                                      |
|  81 | L'Hôpital's rule               | $\displaystyle\lim_{x\to a}\frac{f(x)}{g(x)}=\lim_{x\to a}\frac{f'(x)}{g'(x)}$ |
|  82 | Indefinite integral            | $\displaystyle\int f(x),dx=F(x)+C$                                             |
|  83 | Constant integral              | $\displaystyle\int c,dx=cx+C$                                                  |
|  84 | Power integral                 | $\displaystyle\int x^n,dx=\frac{x^{n+1}}{n+1}+C,\quad n\neq-1$                 |
|  85 | Constant multiple              | $\displaystyle\int cf(x),dx=c\int f(x),dx$                                     |
|  86 | Sum integral                   | $\displaystyle\int(f+g),dx=\int f,dx+\int g,dx$                                |
|  87 | Definite integral              | $\displaystyle\int_a^b f(x),dx$                                                |
|  88 | Fundamental Theorem            | $\displaystyle\int_a^b f(x),dx=F(b)-F(a)$                                      |
|  89 | Accumulation function          | $\displaystyle F(x)=\int_a^x f(t),dt$                                          |
|  90 | Accumulation derivative        | $F'(x)=f(x)$                                                                   |
|  91 | Exponential integral           | $\displaystyle\int e^x,dx=e^x+C$                                               |
|  92 | General exponential integral   | $\displaystyle\int a^x,dx=\frac{a^x}{\ln a}+C$                                 |
|  93 | Logarithmic integral           | $\displaystyle\int\frac{1}{x},dx=\ln\lvert x\rvert+C$                          |
|  94 | Area under curve               | $\displaystyle A=\int_a^b f(x),dx$                                             |
|  95 | Graph                          | $G=(V,E)$                                                                      |
|  96 | Undirected edge                | ${u,v}$                                                                        |
|  97 | Directed edge                  | $(u,v)$                                                                        |
|  98 | Vertex degree                  | $\deg(v)$                                                                      |
|  99 | Adjacency matrix               | $A_{ij}=1$ if edge $i\to j$ exists                                             |
| 100 | BFS structure                  | Queue (FIFO)                                                                   |
| 101 | DFS structure                  | Stack / recursion (LIFO)                                                       |
| 102 | BFS complexity                 | $O(\lvert V\rvert+\lvert E\rvert)$                                             |
| 103 | DFS complexity                 | $O(\lvert V\rvert+\lvert E\rvert)$                                             |
| 104 | DAG                            | Directed graph with no directed cycle                                          |
| 105 | Topological ordering           | $u$ appears before $v$ for every $u\to v$                                      |
| 106 | Topological sorting complexity | $O(\lvert V\rvert+\lvert E\rvert)$                                             |
| 107 | Matrix multiplication          | $\displaystyle C_{ij}=\sum_k A_{ik}B_{kj}$                                     |
| 108 | Path weight                    | $\displaystyle\sum_{e\in P}w(e)$                                               |
| 109 | Relaxation                     | $\displaystyle d[v]=\min(d[v],d[u]+w(u,v))$                                    |
| 110 | Longest-path relaxation        | $\displaystyle d[v]=\max(d[v],d[u]+w(u,v))$                                    |
| 111 | Dijkstra initialization        | $d[s]=0,\quad d[v]=\infty$                                                     |
| 112 | Dijkstra condition             | Non-negative edge weights                                                      |
| 113 | Dijkstra complexity            | $O((\lvert V\rvert+\lvert E\rvert)\log\lvert V\rvert)$                         |
| 114 | Bellman-Ford passes            | $\lvert V\rvert-1$                                                             |
| 115 | Bellman-Ford complexity        | $O(\lvert V\rvert\lvert E\rvert)$                                              |
| 116 | Floyd-Warshall recurrence      | $D_{ij}=\min(D_{ij},D_{ik}+D_{kj})$                                            |
| 117 | Floyd-Warshall complexity      | $O(\lvert V\rvert^3)$                                                          |
| 118 | Spanning tree edges            | $\lvert V\rvert-1$                                                             |
| 119 | MST objective                  | $\displaystyle\min\sum_{e\in T}w(e)$                                           |
| 120 | Prim complexity                | $O((\lvert V\rvert+\lvert E\rvert)\log\lvert V\rvert)$                         |
| 121 | Kruskal ordering               | Process edges in increasing weight                                             |
| 122 | Kruskal complexity             | $O(\lvert E\rvert\log\lvert E\rvert)$                                          |
