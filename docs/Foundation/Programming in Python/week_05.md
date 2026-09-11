# Week 05

## Dictionaries

A **dictionary** stores data as **key-value pairs**, allowing values to be retrieved using unique keys instead of numeric indices.

### Syntax

```python
student = {
    "name": "Kishore",
    "marks": 85
}
```

* **Key** → identifies the data.
* **Value** → data associated with the key.
* Keys must be **unique**.

### Dictionary vs Other Data Structures

| Structure      | Organization       | Access     |
| -------------- | ------------------ | ---------- |
| **List**       | Ordered collection | Index      |
| **Set**        | Unique elements    | Membership |
| **Dictionary** | Key-value pairs    | Key        |

### Practical Use — Word Frequency

Dictionaries are useful for **counting occurrences**:

```python
frequency[word] = frequency.get(word, 0) + 1
```

This allows large texts to be processed efficiently by storing each word as a key and its frequency as the value.

### Storing Structured Data

Dictionaries are also useful for labeled information:

```python
student = {
    "name": "Anu",
    "maths": 85,
    "python": 92,
    "email": "anu@example.com"
}
```

> **Key Idea:** Dictionaries provide efficient **key-based storage and retrieval**, making them ideal for frequency counting and structured data.
---
## Refactoring with Functions

**Refactoring** means restructuring existing code to make it clearer, more modular, and easier to maintain without changing its intended behavior.

### Obvious Sort

The basic sorting approach:

1. Find the **minimum element**.
2. Add it to a new list.
3. Remove it from the original list.
4. Repeat until the list is sorted.

### Modular Approach

Instead of keeping everything in one block, separate the tasks into functions:

```python
def find_minimum(lst):
    # find and return minimum
```

```python
def obvious_sort(lst):
    # use find_minimum() to sort
```

This makes each function responsible for **one specific task**.

### Why Refactor?

* Improves **readability**.
* Reduces complexity.
* Makes debugging easier.
* Allows code to be **reused**.
* Breaks large problems into smaller, manageable pieces.

> **Key Idea:** Complex problems become easier to solve when broken into **small, logical, reusable functions**.

> The same modular approach can later be applied to more complex problems such as **matrix multiplication**.
---
## Matrix Multiplication

Matrix multiplication can be translated into a **structured algorithm** by identifying the pattern used in manual calculations.

### Dot Product Rule

Each element of the result matrix `C` is calculated using:

The **`i`-th row of `A`** is multiplied element-by-element with the **`j`-th column of `B`**, and the products are summed.

### Programming Perspective

Python uses **zero-based indexing**, so:

* First row → index `0`
* First column → index `0`
* The index `k` traverses the corresponding row and column elements.

For each `C[i][j]`:

1. Select row `i` from `A`.
2. Select column `j` from `B`.
3. Iterate `k` across their elements.
4. Multiply corresponding elements.
5. Sum the products.

### Recommended Approach

Before implementing the algorithm:

1. Manually calculate a small **3 × 3** matrix multiplication.
2. Identify the indexing pattern.
3. Translate that pattern into Python loops.

> **Key Idea:** Don't jump directly from mathematical notation to code. First identify the **repeating pattern**, then turn that pattern into an algorithm.
---

## Matrix Multiplication in Python

Matrix multiplication can be implemented directly using **nested loops**.

### Algorithm

For each element `C[i][j]`:

1. Select row `i` from `A`.
2. Select column `j` from `B`.
3. Iterate through their elements using `k`.
4. Multiply corresponding elements.
5. Accumulate the products to obtain `C[i][j]`.

This requires three nested loops:

```python
for i in range(3):
    for j in range(3):
        for k in range(3):
            # multiply and accumulate
```

### NumPy

**NumPy** provides optimized, industry-standard tools for matrix operations, allowing the same multiplication to be performed without manually implementing the loops.

### Learning Approach

The manual implementation is important for understanding the **first principles** behind matrix multiplication.

> **Key Idea:** Use libraries like NumPy in practice, but understand the underlying algorithm well enough to implement it yourself.
---
### Modular Matrix Multiplication

Matrix multiplication can be made **cleaner and easier to debug** by decomposing it into smaller functions.

### Functional Decomposition

Break the problem into reusable components:

1. **Initialize Matrix** — create a matrix filled with zeros.
2. **Dot Product** — calculate the dot product of two vectors.
3. **Get Row** — extract the `i`-th row of a matrix.
4. **Get Column** — extract the `j`-th column.
5. **Matrix Multiply** — combine the above functions to calculate each element.

For each `C[i][j]`, compute the dot product of row `i` of `A` and column `j` of `B`.

### Why Decompose?

* Makes complex problems **easier to manage**.
* Improves **readability**.
* Makes individual components easier to **test and debug**.
* Encourages **reusable functions**.

### Key Takeaway

> **Functional decomposition:** Break a complex problem into small, independently testable functions, then combine them to solve the complete problem.

> This approach follows the same principles used in larger software systems, while libraries such as NumPy provide optimized implementations for practical use.
---

### Scope of Variables

**Scope** determines where a variable can be accessed and modified in a Python program.

### Local vs Global Variables

| Scope      | Definition                | Accessibility                     |
| ---------- | ------------------------- | --------------------------------- |
| **Local**  | Defined inside a function | Only within that function         |
| **Global** | Defined outside functions | Accessible throughout the program |

### Function Arguments

When a value is passed to a function, the function works with its own **local parameter**.

```python id="z7r4cx"
x = 10

def change(x):
    x = 20

change(x)
print(x)    # 10
```

Changing the local `x` does not change the global `x`.

### `global` Keyword

To modify a global variable inside a function, explicitly declare it with `global`:

```python id="y6j3qw"
x = 10

def change():
    global x
    x = 20

change()
print(x)    # 20
```

### Key Takeaway

> **Understand scope:** Variables created inside functions are local by default. Use `global` only when you intentionally need to modify a global variable.
---

## Functional Programming

### Iterators

An **iterator** is an object that allows elements to be retrieved **one at a time**.

Python provides:

* `iter()` → creates an iterator from an iterable.
* `next()` → retrieves the next element.

```python
numbers = [1, 2, 3]

it = iter(numbers)

next(it)  # 1
next(it)  # 2
```

This provides **fine-grained control** over when each element is retrieved.

### Generators

A **generator** is a convenient way to create an iterator without storing the entire sequence in memory.

Generators use the `yield` keyword:

```python
def squares(n):
    for i in range(n):
        yield i * i
```

Each call to `next()` produces the **next value**, while the generator preserves its state.

### `yield` vs `return`

* `return` → terminates the function and returns a value.
* `yield` → pauses the function and produces a value, allowing execution to **resume later**.

### Key Takeaway

> **Iterators** provide controlled, one-at-a-time access to data, while **generators** create such sequences efficiently without loading everything into memory at once.
---

### Lambda Functions

A **lambda function** is an anonymous function containing a single expression.

```python
square = lambda x: x * x
```

Useful for short, simple operations.

### `enumerate()`

`enumerate()` provides both the **index and element** while iterating.

```python
for i, value in enumerate(items):
    print(i, value)
```

### `zip()`

`zip()` combines corresponding elements from multiple iterables.

```python
names = ["A", "B"]
marks = [80, 90]

list(zip(names, marks))
# [("A", 80), ("B", 90)]
```

Useful for processing parallel data.

### `map()`

`map()` applies a function to **every element** of an iterable.

```python
list(map(lambda x: x * 2, numbers))
```

It can also apply a function to multiple iterables simultaneously.

### `filter()`

`filter()` keeps only elements that satisfy a **condition**.

```python
list(filter(lambda x: x >= 0, numbers))
```

Useful for **validating or selecting data** before further processing.

### Key Takeaway

| Function      | Purpose                              |
| ------------- | ------------------------------------ |
| `lambda`      | Create a small anonymous function    |
| `enumerate()` | Get index + value                    |
| `zip()`       | Combine corresponding elements       |
| `map()`       | Transform every element              |
| `filter()`    | Select elements based on a condition |

> **Key Idea:** These built-in tools allow common data-processing operations to be expressed more concisely than traditional loops.


