# Week 02

## String Methods

| Category             | Methods                                                                       | Purpose                                   |
| -------------------- | ----------------------------------------------------------------------------- | ----------------------------------------- |
| **Case Conversion**  | `.lower()` `.upper()` `.capitalize()` `.title()` `.swapcase()`                | Change character casing                   |
| **Content Checking** | `.islower()` `.isupper()` `.istitle()` `.isdigit()` `.isalpha()` `.isalnum()` | Check string properties                   |
| **Trimming**         | `.strip()` `.lstrip()` `.rstrip()`                                            | Remove characters from string edges       |
| **Searching**        | `.startswith()` `.endswith()` `.count()`                                      | Check prefixes, suffixes, and occurrences |
| **Manipulation**     | `.index()` `.replace()`                                                       | Find positions and replace text           |
---
## Escape Characters & Quotes

### Escape Characters

Python uses `\` as the **escape character** for special characters within strings.

* `\'` / `\"` — Include quotes inside strings.
* `\t` — Insert a tab.
* `\n` — Insert a newline.

### Types of Quotes

* `'...'` and `"..."` — Used for regular strings; interchangeable.
* `'''...'''` and `"""..."""` — Used for **multi-line strings**.

### Comments

* `#` — Starts a comment; ignored by the Python interpreter.
* Triple-quoted strings can span multiple lines, but they are **strings**, not comments.
---
## String Indexing and Caesar Cipher

### String Indexing

* Strings are **sequences of characters** indexed from `0`.
* Access characters using `string[index]`.
* An index outside the valid range raises an `IndexError`.

### Modulo Operator

* `%` returns the **remainder** of a division.
* `index % 26` keeps an alphabet index within `0–25`.
* This enables **circular rotation**, where after `z` comes `a`.

### Caesar Cipher

A Caesar Cipher shifts each letter by a fixed value `k`.

**Process:**

1. Find the character's index using `.index()`.
2. Add the shift `k`.
3. Apply `% 26` to wrap around the alphabet.
4. Retrieve the shifted character.
5. Build the encrypted string.

**Example:**

For `text = "abc"` and `k = 2`:

```text
a → c
b → d
c → e

"abc" → "cde"
```

For `text = "xyz"` and `k = 2`:

```text
x → z
y → a
z → b

"xyz" → "zab"
```

### Programming Takeaways

* Break complex problems into smaller steps.
* Debugging and correcting errors are part of programming.
* Loops can automate repetitive operations such as traversing strings.
---
## Intro to If-Else Statements

### `if` Statement

* Used to execute a block of code **only when a condition is `True`**.
* Python uses **indentation** to define the code block.

### `else` Statement

* Provides an alternative block when the `if` condition is `False`.

### Example

```python
age = 15

if age < 13:
    print("You are too young to watch this movie.")
else:
    print("You are old enough to watch this movie.")

print("Have a nice time!")
```

The final `print()` is outside the `if/else` blocks, so it **always executes**.

### Control Flow

```text
Condition
   ↓
True  → if block
False → else block
   ↓
Code outside if/else
```

### Key Takeaways

* `if` and `else` control **program flow** based on conditions.
* Indentation determines the **scope** of conditional blocks.
* `if` statements can be **nested** inside other `if` statements.
---
## Importing Libraries

Python provides several ways to import modules and their features.

| Method       | Syntax                       | Use                                    |
| ------------ | ---------------------------- | -------------------------------------- |
| **Standard** | `import calendar`            | Keeps the namespace clean              |
| **Specific** | `from calendar import month` | Import only required features          |
| **Wildcard** | `from calendar import *`     | **Avoid** — can cause naming conflicts |
| **Alias**    | `import calendar as cal`     | Shorten long module names              |

### Examples

```python
import calendar
calendar.month(2021, 10)
```

```python
from calendar import month
month(2021, 10)
```

```python
import calendar as cal
cal.month(2021, 10)
```

### Key Takeaway

Prefer explicit imports such as `import module` or `from module import feature`. Avoid wildcard imports because they can make code harder to read and debug.
---
