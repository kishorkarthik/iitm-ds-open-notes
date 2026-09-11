# Week 03

## Intro to While loop

### `while` Loop

A `while` loop repeatedly executes a block of code **as long as a condition is `True`**.

### Why Use a Loop?

Using repeated `if` statements for multiple attempts requires hard-coding each retry. A loop handles repetition automatically.

### Structure

```python
while condition:
    # code to repeat
```

### Example

```python
answer = input("What is 2 + 2? ")

while answer != "4":
    answer = input("Try again: ")

print("Correct!")
```

### How It Works

1. Check the condition.
2. If `True`, execute the loop body.
3. Return to the condition.
4. Repeat until the condition becomes `False`.
5. The loop terminates.

### Key Takeaway

> Always ensure that the loop's condition can eventually become `False`; otherwise, you may create an **infinite loop**.
---
## Factorial using While Loop

### Factorial

The factorial of a positive integer `n` is:

$$
n! = 1 \times 2 \times 3 \times \cdots \times n
$$

### Using a `while` Loop

```python
answer = 1
i = 1

while i <= n:
    answer = answer * i
    i = i + 1

print(answer)
```

### How It Works

1. Initialize `answer = 1` and `i = 1`.
2. While `i <= n`, multiply `answer` by `i`.
3. Increment `i` by `1`.
4. Stop when `i > n`.
5. `answer` contains `n!`.

### Key Takeaway

> The loop demonstrates how a **counter + accumulator** can be used to perform repeated calculations.
> Factorials grow extremely quickly, so very large values require more computation.
---
## Intro to For Loop

### `for` Loop

A `for` loop repeats a block of code over a sequence or range of values.

### Basic Syntax

```python
for i in range(n):
    # code to repeat
```

* `i` — loop variable.
* `range(n)` — generates values from `0` to `n - 1`.
* The loop body must be **indented**.

### Conditional Logic

`if` and `else` can be nested inside a `for` loop.

```python
for i in range(n):
    if i % 2 == 0:
        print("Even")
    else:
        print("Odd")
```

### Dynamic Iterations

The number of iterations can come from user input:

```python
n = int(input())

for i in range(n):
    print(i)
```

### Key Takeaway

> `for` loops automate repetitive tasks and can be combined with **input, conditions, and other statements** to process data efficiently.
---
## Range and For-Each For Loops

### `range()`

`range(start, end, step)` generates a sequence of numbers.

| Parameter | Default | Description               |
| --------- | ------: | ------------------------- |
| `start`   |     `0` | Starting value            |
| `end`     |       — | Stop value (**excluded**) |
| `step`    |     `1` | Increment/decrement       |

**Examples:**

```python
range(1, 11, 2)    # 1, 3, 5, 7, 9
range(9, -1, -1)   # 9, 8, ..., 0
```

A negative `step` creates a **reverse sequence**.

### For-Each Loop

A `for` loop can directly iterate over the elements of an iterable without using `range()` or indices.

```python
country = "India"

for letter in country:
    print(letter)
```

Each iteration assigns the next character to `letter`.

### Key Takeaway

> Direct iteration is **simpler, more readable, and less error-prone** than manually accessing indices.
---
## Print and Output Formatting

### `print()` Parameters

* `end` — Controls what is printed after the output. Default: `\n`.
* `sep` — Controls the separator between multiple arguments. Default: space.

```python
print("Hello", "World", sep="-", end="!")
# Hello-World!
```

### String Formatting

| Method             | Example                                |
| ------------------ | -------------------------------------- |
| **f-string**       | `f"{num} x {i} = {num*i}"`             |
| **`.format()`**    | `"{} x {} = {}".format(num, i, num*i)` |
| **`%` formatting** | `"%d x %d = %d" % (num, i, num*i)`     |

**f-strings** are generally the clearest modern approach.

### Format Specifiers

* `:.2f` — Display a float to **2 decimal places**.
* `:5d` — Allocate a minimum width of **5 characters** for an integer.

```python
pi = 3.14159
print(f"{pi:.2f}")     # 3.14
print(f"{42:5d}")      #    42
```

- Format specifiers are useful for **precision, alignment, and structured output**.
---
## String Indexing and Nested Loops

### String Indexing

* Strings are sequences of characters.
* Individual characters can be accessed using an index:

```python
s = "VIBGYOR"
print(s[0])    # V
```

* `range()` can be used to iterate through string indices.

### Nested `for` Loops

A **nested loop** is a loop inside another loop.

```python
for i in range(7):
    for j in range(7):
        # executes for every pair of i and j
```

For every iteration of the **outer loop**, the inner loop runs completely.

### Example — VIBGYOR

With 7 color choices for each of two people:

```text
7 choices × 7 choices = 49 possible pairs
```

This demonstrates how nested loops can systematically generate **all possible pairs/combinations** from two sets of choices.

### Key Takeaway

> Nested loops are useful when a task requires processing **every possible pair of elements** from two collections.
---
## Break, Continue and Pass

### `break`

* Immediately **terminates the loop**.
* Execution continues with the first statement after the loop.
* Useful when a required condition is met before the loop naturally ends.

### `continue`

* **Skips the current iteration**.
* Execution moves directly to the next iteration of the loop.
* Useful for ignoring specific items while continuing the loop.

### `pass`

* A **null statement** that performs no operation.
* Used as a placeholder when Python requires a statement.
* Unlike a comment, `pass` is executed but does nothing.

| Keyword    | Effect                         |
| ---------- | ------------------------------ |
| `break`    | Exit the loop                  |
| `continue` | Skip current iteration         |
| `pass`     | Do nothing; continue execution |
