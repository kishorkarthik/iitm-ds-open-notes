# Week 04

## Lists vs Sets

Different data structures involve different **trade-offs**. The best choice depends on the problem being solved.

### Lists

* Maintain an **ordered collection**.
* Support **indexing**: `l[0]`.
* Membership testing using `x in l` performs a **linear search**, checking elements one by one.
* Searching can become slow for very large lists.

### Sets

* Created using `{}`.
* Store **unique elements**; duplicates are removed.
* Optimized for **membership testing** using `x in s`.
* Generally use **more memory** than lists because of the additional structure used for fast lookup.

### Performance Trade-off

| Data Structure | Strength                    | Limitation               |
| -------------- | --------------------------- | ------------------------ |
| **List**       | Ordering and indexed access | Slower membership search |
| **Set**        | Fast membership search      | More memory; no indexing |

### When to Use

* **List** → when order or **index-based access** matters.
* **Set** → when **existence/membership checking** is the primary operation.

> **Key Idea:** Choose a data structure based on the operations your problem needs most.
---
## Tuples

A **tuple** is an immutable data structure used to store a fixed collection of values.

### Lists vs Tuples

| Feature             | List          | Tuple               |
| ------------------- | ------------- | ------------------- |
| Syntax              | `[]`          | `()`                |
| Mutability          | Mutable       | **Immutable**       |
| Add/Remove elements | ✓             | ✗                   |
| Memory usage        | Higher        | **Generally lower** |
| Best for            | Changing data | Fixed data          |

### Immutability

Once a tuple is created, its elements **cannot be modified, added, or removed**.

```python
letters = ("a", "b", "c")
```

Tuples are useful when the data should remain constant throughout the program.

### Memory Efficiency

Tuples generally consume **less memory than lists** of the same size because they do not need the additional overhead required for modification.

### Practical Use

A tuple can be used as a **fixed lookup structure**, such as a collection of characters used to filter unwanted characters from a string.

### When to Use

* **List** → when elements need to be added, removed, or modified.
* **Tuple** → when data should remain **constant and read-only**.

> **Key Idea:** Tuples trade flexibility for **immutability, data integrity, and lower memory overhead**.
---
## Inline Statements and List Comprehensions

### Inline Statements

Python allows certain multi-line constructs to be written in a **single line**, making code more concise.

For example, simple `if-else` logic can be expressed using a **conditional expression**.

```python
result = "Even" if n % 2 == 0 else "Odd"
```

This is useful when the logic is simple and remains readable.

### List Comprehensions

A **list comprehension** provides a concise way to create a list from an existing iterable.

```python
squares = [x * x for x in range(5)]
```

Conditional logic can also be included:

```python
even = [x for x in range(10) if x % 2 == 0]
```

### Key Takeaway

* **Inline statements** → reduce verbosity for simple logic.
* **List comprehensions** → create and filter lists concisely.
* Conciseness should **not come at the cost of readability**.
---

## Functions

A **function** is a reusable block of code that performs a specific task.

### Defining a Function

Use the `def` keyword:

```python
def add(a, b):
    return a + b
```

Functions allow the same logic to be **reused** without rewriting it.

### `return` vs `print`

* `print()` → displays a value to the user.
* `return` → sends a value **back to the caller**, allowing it to be stored or used in further calculations.

```python
def discount(price, rate):
    return price * (1 - rate)

final_price = discount(1000, 0.2)
```

Here, the returned value can be assigned to `final_price` and used elsewhere.

### Modular Programming

Functions help make programs:

* **Reusable**
* **Organized**
* **Readable**
* **Maintainable**

> **Key Idea:** Functions break a program into smaller, reusable units, making complex programs easier to build and manage.
---
## Function Arguments

Arguments are the values passed to a function's parameters when the function is called.

### Types of Arguments

| Type           | Description                                               | Example           |
| -------------- | --------------------------------------------------------- | ----------------- |
| **Positional** | Values are assigned based on their order                  | `add(10, 20)`     |
| **Keyword**    | Values are assigned explicitly by parameter name          | `add(a=10, b=20)` |
| **Default**    | Parameter has a fallback value if no argument is provided | `def add(a, b=0)` |

### Positional Arguments

Arguments are matched to parameters **in order**.

```python
def divide(a, b):
    return a / b

divide(10, 2)   # a=10, b=2
```

The order matters.

### Keyword Arguments

Arguments can be assigned explicitly using parameter names:

```python
divide(a=10, b=2)
```

This makes the intended mapping clear and removes dependence on argument order.

### Default Arguments

A parameter can have a **default value**:

```python
def greet(name, message="Hello"):
    return f"{message}, {name}"
```

If `message` is omitted, `"Hello"` is used automatically.

### Combining Arguments

Positional, keyword, and default arguments can be combined, subject to Python's argument-order rules.

### `return` and `None`

If a function does not explicitly return a value, Python returns **`None`**.

```python
def greet():
    print("Hello")

result = greet()
# result is None
```

> **Key Idea:** Different argument types make functions more flexible and easier to use.
---
## Types of Functions

Functions are fundamental building blocks of Python. Even basic programs use functions such as `print()` and `input()`.

### Four Types of Functions

| Type                       | Description                              | Examples                             |
| -------------------------- | ---------------------------------------- | ------------------------------------ |
| **Built-in Functions**     | Available directly in Python             | `print()`, `input()`, `len()`        |
| **Library Functions**      | Provided by imported modules             | `math.sqrt()`, `math.log()`          |
| **String Methods**         | Functions associated with string objects | `.upper()`, `.lower()`, `.replace()` |
| **User-defined Functions** | Created by the programmer                | `def add(a, b):`                     |

### Function Syntax

Parentheses `()` indicate a **function call**:

```python
print("Hello")
len("Python")
```

Functions can also accept arguments inside the parentheses.

### Naming User-defined Functions

User-defined function names follow the same basic naming rules as variables:

* Use letters, digits, and `_`.
* Cannot start with a digit.
* Cannot use Python keywords.
* Use descriptive names.

> **Key Idea:** Python provides built-in and library functions, while programmers can create their own functions to solve specific problems.
---