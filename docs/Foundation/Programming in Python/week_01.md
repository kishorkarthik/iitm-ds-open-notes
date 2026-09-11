# Week 01

## Variables and Input in Python

### Variables and Assignment

A **variable** is a name that refers to a value/object in Python.

```python
a = 10
b = 20

print(a)
print(a + b)
print(a * b)
```

`=` is the **assignment operator**. It binds a variable to a value.

```python
a = 10
a = 25
```

Variables can be reassigned during program execution.

### Incrementing

```python
a = a + 1
```

The right-hand side is evaluated first, and the result is assigned back to `a`.

```python
a = 5
a = a + 1

print(a)  # 6
```

Shorthand:

```python
a += 1
```

Other augmented assignment operators:

```python
a -= 1
a *= 2
a /= 2
a //= 2
a %= 2
a **= 2
```

### User Input

`input()` reads user input and **always returns a string (`str`)**.

```python
name = input()
```

Numerical input must be explicitly converted:

```python
n = int(input())
x = float(input())
```

Example:

```python
a = int(input())
b = int(input())

print(a + b)
```

### `=` vs `==`

| Expression | Meaning |
|---|---|
| `a = 10` | Assign `10` to `a` |
| `a == 10` | Check whether `a` equals `10` |
| `a += 1` | Increment `a` |
| `int(input())` | Read input and convert to `int` |
| `float(input())` | Read input and convert to `float` |

### Common Trap: String Input

```python
a = input()
b = input()

print(a + b)
```

Input:

```text
10
20
```

Output:

```text
1020
```

Because `input()` returns strings, `+` performs string concatenation.

For numerical addition:

```python
a = int(input())
b = int(input())

print(a + b)  # 30
```

> **Master Rule:** `=` assigns, `==` compares, and `input()` returns a string unless explicitly converted.

---

## Variables and Literals

### Literals

A **literal** is a fixed value written directly in Python source code.

Examples:

```python
10
3.14
"Hello"
True
```

In:

```python
radius = 5
```

- `radius` → variable
- `5` → integer literal

In:

```python
message = "Hello"
```

- `message` → variable
- `"Hello"` → string literal

### Variables vs Literals

| Variable | Literal |
|---|---|
| Name referring to a value | Fixed value written directly in code |
| Can be reassigned | The literal itself is not reassigned |
| Example: `radius` | Example: `5` |

Example:

```python
x = 10
y = x + 5
```

- Variables: `x`, `y`
- Literals: `10`, `5`

### Why Use Variables?

Variables allow the same program to work with different values.

Instead of:

```python
area = 3.14 * 5 * 5
```

use:

```python
radius = 5
area = 3.14 * radius * radius
```

The value can then be changed or obtained from user input:

```python
radius = float(input())
area = 3.14 * radius * radius
```

> **Master Rule:** Variables represent data that can change; literals are values written directly in the code.

---

## Data Types and Type Casting

### Basic Data Types

Python provides several built-in data types.

| Data Type | Description | Example |
|---|---|---|
| `int` | Whole numbers | `10` |
| `float` | Numbers with decimal/fractional parts | `6.3` |
| `str` | Sequence of characters/text | `"Hello"` |
| `bool` | Logical value | `True`, `False` |
| `list` | Ordered collection of items | `[10, 20, 30]` |

### Integer (`int`)

Represents whole numbers without a fractional part.

```python
x = 10
```

### Float (`float`)

Represents numbers with a fractional part.

```python
x = 6.3
```

### String (`str`)

Represents a sequence of characters.

```python
name = "Python"
```

### Boolean (`bool`)

Represents one of two logical values:

```python
True
False
```

Booleans are commonly used in conditions and comparisons.

---

## Type Casting

**Type casting** is the conversion of a value from one data type to another.

Common conversion functions:

```python
int()
float()
str()
bool()
```

Examples:

```python
int(6.3)       # 6
float(10)      # 10.0
str(10)        # "10"
bool(1)        # True
```

### Important: Conversion Can Lose Information

```python
int(6.9)       # 6
```

Converting a float to an integer removes the fractional part; it does not round the number.

---

## Boolean Conversion

`bool()` converts a value to either `True` or `False`.

### Values Evaluated as `False`

Common **falsy** values include:

```python
bool(0)        # False
bool(0.0)      # False
bool("")       # False
bool([])       # False
```

### Values Evaluated as `True`

Common **truthy** values include:

```python
bool(1)        # True
bool(6.3)      # True
bool("Hello")  # True
bool([1, 2])   # True
```

> **Master Rule:** Zero, empty strings, and empty collections are generally falsy; non-zero values, non-empty strings, and non-empty collections are generally truthy.

---

## Checking Data Types

Use `type()` to determine the type of a value.

```python
x = 10
print(type(x))
```

Output:

```text
<class 'int'>
```

Examples:

```python
type(10)       # int
type(6.3)      # float
type("Hello")  # str
type(True)     # bool
type([1, 2])   # list
```

---

## Lists

A **list** is an ordered collection of items.

```python
numbers = [10, 20, 30]
```

List elements are accessed using **zero-based indexing**:

```python
numbers[0]  # 10
numbers[1]  # 20
numbers[2]  # 30
```

> **Master Rule:** Python indexing starts at `0`, so the first element of a list is at index `0`.


---
## Strings and Expressions

### Strings

A **string (`str`)** is a sequence of characters.
```python
    s = "Python"
```
### String Concatenation

The `+` operator joins strings.
```python
    first = "Hello"
    second = "World"

    result = first + " " + second
```
Result:
```python
    Hello World
```

The behavior of `+` depends on the data type:

```python
    "10" + "20"   # "1020"
    10 + 20       # 30
```

To perform arithmetic on a numeric string, convert it first:
```python
    x = int("10")
    y = int("20")

    print(x + y)  # 30
```
---

### String Indexing

Python uses **zero-based indexing**.

    s = "Python"

| Index | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Character | P | y | t | h | o | n |

Access individual characters using:
```python
    s[0]  # 'P'
    s[1]  # 'y'
    s[5]  # 'n'
```
---

### String Slicing

A substring can be obtained using:
```python
    s[start:end]
```

The `start` index is included, but the `end` index is excluded.
```python
    s = "Python"

    s[0:2]  # "Py"
    s[2:5]  # "tho"
```
> **Master Rule:** Slicing follows the `[start, end)` convention — start is included, end is excluded.

---

## Expressions and Operator Behavior

An **expression** is a combination of values, variables, and operators that produces a value.

### Operators Depend on Data Type

The same operator can behave differently depending on the operands.

#### Strings

The `+` operator concatenates strings:
```python
    "Hello" + "World"   # "HelloWorld"
```

The `*` operator repeats a string:
```python
    "Hi" * 3             # "HiHiHi"
```

Multiplying two strings is invalid:
```python
    "Hi" * "3"            # TypeError
```
#### Lists

The `+` operator concatenates lists:
```python
    [1, 2] + [3, 4]      # [1, 2, 3, 4]
```
---

### Operator Precedence

When an expression contains multiple operators, Python follows **operator precedence** to determine the order of evaluation.

For example:
```python
    10 + 13 * 2
```

Multiplication is performed before addition:
```python
    10 + (13 * 2)
    = 10 + 26
    = 36
```

### Parentheses

Parentheses can be used to explicitly control the order of evaluation:
```python
    (10 + 13) * 2
```
Result:
```
    46
```
> **Master Rule:** When in doubt about evaluation order, use parentheses.

---

## Operators

### Arithmetic Operators

Arithmetic operators perform mathematical calculations.

| Operator | Operation | Example | Result |
|---|---|---|---|
| `+` | Addition | `10 + 3` | `13` |
| `-` | Subtraction | `10 - 3` | `7` |
| `*` | Multiplication | `10 * 3` | `30` |
| `/` | Division | `10 / 3` | `3.333...` |
| `//` | Floor division | `10 // 3` | `3` |
| `%` | Modulus (remainder) | `10 % 3` | `1` |
| `**` | Exponentiation | `10 ** 3` | `1000` |

### Floor Division

`//` performs division and returns the floor of the result.
```python
    10 // 3   # 3
    7 // 2    # 3
```
### Modulus

`%` returns the remainder of a division.
```python
    10 % 3    # 1
    15 % 5    # 0
```

### Exponentiation

`**` raises a number to a power.
```python
    2 ** 3    # 8
    5 ** 2    # 25
```
---

### Relational Operators

Relational operators compare two values and return a boolean value: `True` or `False`.

| Operator | Meaning | Example |
|---|---|---|
| `>` | Greater than | `5 > 3` |
| `<` | Less than | `5 < 3` |
| `>=` | Greater than or equal to | `5 >= 5` |
| `<=` | Less than or equal to | `5 <= 5` |
| `==` | Equal to | `5 == 5` |
| `!=` | Not equal to | `5 != 3` |

Examples:
```python
    5 > 3     # True
    5 < 3     # False
    5 >= 5    # True
    5 <= 4    # False
    5 == 5    # True
    5 != 3    # True
```

> **Master Rule:** Relational operators produce boolean results.

---

### Logical Operators

Logical operators combine or modify boolean expressions.

#### `and`

Returns `True` only when **both** operands are true.
```python
    True and True     # True
    True and False    # False
    False and True    # False
    False and False   # False
```
#### `or`

Returns `True` when **at least one** operand is true.
```python
    True or True      # True
    True or False     # True
    False or True     # True
    False or False    # False
```
#### `not`

Reverses a boolean value.
```python
    not True          # False
    not False         # True
```
Logical operators can be combined with relational expressions:
```python
    age >= 18 and age <= 60

    marks >= 40 or attendance >= 75

    not (x == 0)
```
> **Master Rule:** `and` requires both conditions, `or` requires at least one condition, and `not` reverses a condition.