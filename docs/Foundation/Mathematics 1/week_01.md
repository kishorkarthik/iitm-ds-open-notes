---
sidebar_position: 1
title: Week 1 — Set Theory, Relations and Functions
---

# Week 1 — Set Theory, Relations and Functions

## 1. Number Systems

Mathematics uses different sets of numbers for different purposes.

### 1.1 Natural Numbers

The natural numbers are:

$$
\mathbb{N} = \{0,1,2,3,\ldots\}
$$

**IITM convention:** $0$ is considered a natural number in this course.

### Important properties

- $0$ is even.
- $1$ is neither prime nor composite.
- Natural numbers are closed under addition and multiplication.

### 1.2 Integers

The set of integers is:

$$
\mathbb{Z} = \{\ldots,-3,-2,-1,0,1,2,3,\ldots\}
$$

Every natural number is an integer:

$$
\mathbb{N} \subseteq \mathbb{Z}
$$

### 1.3 Rational Numbers

A rational number can be expressed as:

$$
\frac{p}{q}
$$

where

$$
p,q \in \mathbb{Z}, \qquad q \ne 0
$$

The set of rational numbers is denoted by:

$$
\mathbb{Q}
$$

Examples:

$$
\frac{1}{2},\quad -\frac{7}{3},\quad 5=\frac{5}{1}
$$

### 1.4 Irrational Numbers

An irrational number **cannot** be expressed as a ratio of two integers.

Examples:

$$
\sqrt{2},\quad \sqrt{3},\quad \pi
$$

### 1.5 Real Numbers

The real numbers consist of both rational and irrational numbers:

$$
\mathbb{R} = \mathbb{Q} \cup \{\text{irrational numbers}\}
$$

The number systems form the hierarchy:

$$
\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R}
$$

## 2. Basic Properties of Numbers

### 2.1 Even Numbers

An integer $n$ is even if:

$$
n = 2k
$$

for some $k \in \mathbb{Z}$.

Examples:

$$
0,2,4,6,-2,-4
$$

### 2.2 Odd Numbers

An integer $n$ is odd if:

$$
n = 2k+1
$$

for some $k \in \mathbb{Z}$.

Examples:

$$
1,3,5,-1,-3
$$

### 2.3 Prime Numbers

A prime number is a natural number greater than $1$ having exactly two positive factors:

$$
1 \quad \text{and} \quad p
$$

Examples:

$$
2,3,5,7,11
$$

**Important:**

$$
1 \text{ is neither prime nor composite.}
$$

### 2.4 Composite Numbers

A natural number greater than $1$ that is not prime is composite.

Examples:

$$
4,6,8,9,10
$$

Thus:

$$
0,1
$$

are neither prime nor composite.

## 3. Sets

A **set** is a collection of distinct objects.

The objects inside a set are called **elements** or **members**.

Example:

$$
A = \{1,2,3,4\}
$$

Here:

$$
2 \in A
$$

but:

$$
5 \notin A
$$

## 4. Representing Sets

### 4.1 Roster Form

List all elements explicitly.

$$
A = \{1,2,3,4,5\}
$$

### 4.2 Set-Builder Form

Describe the property satisfied by the elements.

$$
A = \{x \in \mathbb{N} \mid x < 6\}
$$

### 4.3 Empty Set

A set containing no elements is called the empty set.

Notation:

$$
\varnothing
$$

or

$$
\{\}
$$

## 5. Subsets

Set $A$ is a subset of $B$ if every element of $A$ is also an element of $B$.

Notation:

$$
A \subseteq B
$$

Example:

$$
A = \{1,2\},\qquad B = \{1,2,3\}
$$

Therefore:

$$
A \subseteq B
$$

Every set is a subset of itself:

$$
A \subseteq A
$$

The empty set is a subset of every set:

$$
\varnothing \subseteq A
$$

## 6. Proper Subsets

If:

$$
A \subseteq B
$$

and:

$$
A \ne B
$$

then $A$ is a **proper subset** of $B$.

Notation:

$$
A \subset B
$$

## 7. Cardinality

The cardinality of a finite set is the number of elements it contains.

If:

$$
A = \{2,4,6,8\}
$$

then:

$$
|A| = 4
$$

## 8. Set Operations

Let:

$$
A = \{1,2,3\}
$$

and:

$$
B = \{3,4,5\}
$$

### 8.1 Union

The union contains elements belonging to either set.

$$
A \cup B = \{1,2,3,4,5\}
$$

### 8.2 Intersection

The intersection contains elements common to both sets.

$$
A \cap B = \{3\}
$$

### 8.3 Difference

The difference $A-B$ contains elements in $A$ but not in $B$.

$$
A-B = \{1,2\}
$$

Similarly:

$$
B-A = \{4,5\}
$$

### 8.4 Complement

If $U$ is the universal set, the complement of $A$ is:

$$
A^c = U-A
$$

It contains all elements of $U$ that are not in $A$.

## 9. Important Set Identities

### Commutative Laws

$$
A \cup B = B \cup A
$$

$$
A \cap B = B \cap A
$$

### Associative Laws

$$
(A \cup B) \cup C = A \cup (B \cup C)
$$

$$
(A \cap B) \cap C = A \cap (B \cap C)
$$

### Distributive Laws

$$
A \cap (B \cup C) = (A \cap B) \cup (A \cap C)
$$

$$
A \cup (B \cap C) = (A \cup B) \cap (A \cup C)
$$

### De Morgan's Laws

$$
(A \cup B)^c = A^c \cap B^c
$$

$$
(A \cap B)^c = A^c \cup B^c
$$

### Identity Laws

$$
A \cup \varnothing = A
$$

$$
A \cap U = A
$$

### Complement Laws

$$
A \cup A^c = U
$$

$$
A \cap A^c = \varnothing
$$

## 10. Cardinality of Sets

For two finite sets:

$$
|A \cup B| = |A| + |B| - |A \cap B|
$$

If $A$ and $B$ are disjoint:

$$
A \cap B = \varnothing
$$

then:

$$
|A \cup B| = |A| + |B|
$$

## 11. Cartesian Product

The Cartesian product of $A$ and $B$ is:

$$
A \times B = \{(a,b) \mid a \in A,\ b \in B\}
$$

Example:

$$
A = \{1,2\}
$$

$$
B = \{x,y\}
$$

Then:

$$
A \times B = \{(1,x),(1,y),(2,x),(2,y)\}
$$

If:

$$
|A| = m,\qquad |B| = n
$$

then:

$$
|A \times B| = mn
$$

## 12. Relations

A **relation** from $A$ to $B$ is a subset of the Cartesian product:

$$
R \subseteq A \times B
$$

For example:

$$
A = \{1,2,3\}
$$

and:

$$
R = \{(1,2),(2,3)\}
$$

is a relation on $A$.

## 13. Types of Relations

For a relation $R$ on a set $A$:

### 13.1 Reflexive

$R$ is reflexive if:

$$
(a,a) \in R
$$

for every:

$$
a \in A
$$

### 13.2 Symmetric

$R$ is symmetric if:

$$
(a,b) \in R \Rightarrow (b,a) \in R
$$

### 13.3 Antisymmetric

$R$ is antisymmetric if:

$$
(a,b) \in R \quad \text{and} \quad (b,a) \in R
$$

implies:

$$
a=b
$$

### 13.4 Transitive

$R$ is transitive if:

$$
(a,b) \in R \quad \text{and} \quad (b,c) \in R
$$

implies:

$$
(a,c) \in R
$$

## 14. Functions

A function is a special type of relation.

A function:

$$
f:A\rightarrow B
$$

assigns **exactly one element of $B$** to every element of $A$.

We write:

$$
y=f(x)
$$

## 15. Domain, Codomain and Range

For:

$$
f:A\rightarrow B
$$

### Domain

The set $A$ is the **domain**.

### Codomain

The set $B$ is the **codomain**.

### Range

The range is the set of values actually produced by the function.

$$
\operatorname{Range}(f) = \{f(x) \mid x \in A\}
$$

Important:

$$
\operatorname{Range}(f) \subseteq \operatorname{Codomain}(f)
$$

The range and codomain are **not necessarily the same**.

## 16. Determining the Domain

For a real-valued function, expressions must be defined over the domain.

### Square root

For:

$$
f(x)=\sqrt{3-x}
$$

we require:

$$
3-x\geq0
$$

Therefore:

$$
x\leq3
$$

Hence:

$$
\operatorname{Domain}(f)=(-\infty,3]
$$

and because the positive square root is used:

$$
\operatorname{Range}(f)=[0,\infty)
$$

### Denominator

For:

$$
f(x)=\frac{1}{x-2}
$$

we require:

$$
x-2\ne0
$$

Therefore:

$$
x\ne2
$$

## 17. Injective Functions

A function is **injective** (one-to-one) if different inputs always produce different outputs.

Formally:

$$
f(a)=f(b)\Rightarrow a=b
$$

Equivalent form:

$$
a\ne b\Rightarrow f(a)\ne f(b)
$$

Example:

$$
f(x)=2x+1
$$

is injective over $\mathbb{R}$.

## 18. Surjective Functions

A function:

$$
f:A\rightarrow B
$$

is surjective if every element of $B$ is produced by at least one element of $A$.

Formally:

$$
\forall y\in B,\ \exists x\in A \text{ such that } f(x)=y
$$

Thus:

$$
\operatorname{Range}(f)=\operatorname{Codomain}(f)
$$

## 19. Bijective Functions

A function is **bijective** if it is both:

- injective, and
- surjective.

Therefore:

$$
\boxed{\text{Bijective}=\text{Injective}+\text{Surjective}}
$$

A bijective function has a unique inverse function.

## 20. Many-to-One Functions

A function is many-to-one when multiple inputs can produce the same output.

For example:

$$
f(x)=x^2
$$

because:

$$
f(2)=4
$$

and:

$$
f(-2)=4
$$

Therefore, $f$ is not injective over $\mathbb{R}$.

## 21. One-to-One and Onto: Quick Test

| Property | Question to ask |
| --- | --- |
| Function | Does every input have exactly one output? |
| Injective | Can two different inputs have the same output? |
| Surjective | Does every codomain value get hit? |
| Bijective | Is it both injective and surjective? |

## 22. Composition of Functions

Given:

$$
f:A\rightarrow B
$$

and:

$$
g:B\rightarrow C
$$

their composition is:

$$
(g\circ f)(x)=g(f(x))
$$

The function $f$ is evaluated **first**.

In general:

$$
g\circ f\ne f\circ g
$$

## 23. Identity Function

The identity function is:

$$
I(x)=x
$$

For a function with an inverse:

$$
f^{-1}\circ f=I
$$

and:

$$
f\circ f^{-1}=I
$$

## 24. Inverse Functions

A function $f$ has an inverse if it is bijective between the relevant domain and codomain.

The inverse is written:

$$
f^{-1}
$$

and satisfies:

$$
f^{-1}(f(x))=x
$$

and:

$$
f(f^{-1}(x))=x
$$