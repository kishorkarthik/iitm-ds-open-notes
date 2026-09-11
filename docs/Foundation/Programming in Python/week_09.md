# Week 09

## Recursion

**Recursion** is a technique where a problem is solved by repeatedly applying the same process to **smaller instances of the problem**.

### Intuitive Examples

* **Queue:** Each person passes a message to the next person, repeating the same process.
* **Washing vessels:** Wash one vessel and pass the remaining pile to the next step.
* **Disease spread:** Each infected person can cause further infections, creating a recursive chain.

### File Handling

File handling allows Python programs to work with **large datasets stored on disk**, especially when the data is too large to fit conveniently in a Python list or memory.

### Learning Philosophy

Programming is a **practical skill**. Like driving or cycling, mastery comes through **active practice and solving non-trivial problems**, not just studying theory.

> **Key Idea:** Recursion breaks a problem into **smaller versions of itself**, while file handling enables programs to work with data stored outside main memory.
---

### Recursion Through Mathematical Patterns

**Recursion** defines a problem in terms of a **smaller instance of the same problem**.

### Mathematical Examples

**Compound Interest**

The amount after `n` years depends on the amount after `n - 1` years:

$$
f(n) = 1.1 \times f(n-1)
$$

**Sum of First `n` Numbers**

$$
f(n) = f(n-1) + n
$$

**Factorial**

$$
n! = n \times (n-1)!
$$

Each definition reduces the problem to a **smaller version of itself**.

### Recursive Pattern

```text
f(n)
 ↓
f(n-1)
 ↓
f(n-2)
 ↓
...
 ↓
Base Case
```

A recursive function therefore needs:

1. **Recursive case** — reduces the problem.
2. **Base case** — stops the recursion.

> **Key Idea:** Recursion works by expressing a problem as **the same problem with a smaller input**, eventually reaching a base case.
---
### Recursive List Search

The problem is to create `check0(L)` that returns `True` if `0` exists in a list, otherwise `False`.

### Recursive Approach

Break the problem into **one unit of work** and a smaller subproblem:

1. Check the **first element** of the list.
2. If it is `0`, return `True`.
3. Otherwise, recursively check the **remaining list**.

```text
check0([first, ...rest])
        ↓
first == 0?
   ↙          ↘
 True      check0(rest)
```

### Structure

The recursive solution follows:

* **Base case:** Determine the result when the relevant list portion is exhausted or the value is found.
* **Recursive case:** Remove one element and solve the same problem on the remainder.

This is similar to the recursive patterns used for **factorials** and **summation**.

> **Key Idea:** Recursion handles a complex search by doing **one step of work** and delegating the remaining problem to a recursive call.
---
### Implementing Recursion in Python

The `check0(L)` function recursively checks whether a list contains `0`.

### Recursive Logic

```python
def check0(L):
    if L == []:
        return False
    if L[0] == 0:
        return True
    return check0(L[1:])
```

The function:

1. Checks whether the list is **empty** → `False`.
2. Checks the **first element** → `True` if it is `0`.
3. Otherwise, recursively checks the **remaining list**.

### Base Cases

There are two stopping conditions:

* **Empty list** → `False`
* **First element is `0`** → `True`

### Learning Note

This implementation is mainly an **educational example**. Although it demonstrates recursion clearly, it is not the most efficient way to search a list.

> **Key Idea:** A recursive function needs clear **base cases** and a recursive step that moves toward them.
---
### Recursive Sorting

A list can be sorted recursively by repeatedly finding and removing its **smallest element**.

### Recursive Approach

1. Find the minimum using a helper function such as `mini`.
2. Remove the minimum from the list.
3. Recursively sort the **remaining list**.
4. Add the minimum to the beginning of the sorted result.

```text
mini(L) + sort(L without mini)
```

### Base Case

Stop when the list has:

* **No elements**, or
* **One element**

Such a list is already sorted.

### Key Idea

The problem is reduced from sorting `n` elements to sorting `n - 1` elements.

> **Key Takeaway:** Recursive sorting repeatedly performs **one unit of work** (finding the minimum) and delegates the smaller sorting problem to recursion.
---
### Halving Technique

The **halving technique** reduces a problem's search space by approximately **half at each step**. It is a fundamental **divide-and-conquer** strategy.

### Examples

* **20 Questions:** Each question eliminates roughly half the possible answers.
* **Dictionary Search:** Open near the middle and discard the half where the word cannot exist.
* **Large Search Spaces:** Repeatedly halving a million possibilities reduces the search to a single possibility in fewer than 20 steps.

### Binary Search

**Binary search** applies the halving technique to a **sorted list**.

```text
Sorted list
    ↓
Check middle element
    ↓
Target smaller → search left half
Target larger  → search right half
    ↓
Repeat
```

The search space is approximately halved after every comparison.

### Requirement

> **Binary search requires the list to be sorted.**

### Key Idea

> Halving transforms a potentially large search into a sequence of **smaller search problems**, making it much more efficient than checking every element individually.
---
### Linear Search

**Linear search** checks elements one by one until the target is found or the list is exhausted.

```python
def search(L, x):
    for item in L:
        if item == x:
            return True
    return False
```

### Performance

The number of elements checked depends on the target's position:

* **Beginning** → very fast.
* **Middle** → checks roughly half the list.
* **End / Not found** → checks the entire list.

For a list of size `n`, the worst-case time is **O(n)**.

### Measuring Execution Time

Python's `time` library can be used to compare performance:

```python
import time

start = time.time()
# run search
end = time.time()

print(end - start)
```

Larger lists generally require more time for linear search.

### Useful Techniques

* `//` performs **integer division**, useful for calculating a midpoint:

```python
mid = (low + high) // 2
```

* User-defined Python files can be **imported as modules**, allowing code to be reused across programs.

> **Key Idea:** Linear search is simple but can become slow for large lists, motivating more efficient methods such as **binary search**.
---
### Binary Search

**Binary search** efficiently searches a **sorted list** by repeatedly dividing the search space in half.

### Requirement

> The list **must be sorted** for binary search to work correctly.

### Algorithm

Maintain a **region of interest** using `begin` and `end`:

1. Find the middle index.
2. Compare the middle element with target `k`.
3. If equal → target found.
4. If `k` is smaller → search the left half.
5. If `k` is larger → search the right half.
6. Repeat until the search region becomes empty.

```python id="8m5f1k"
while begin <= end:
    mid = (begin + end) // 2
```

Each step eliminates approximately **half** of the remaining elements.

### Performance

| Search        | Worst-case complexity |
| ------------- | --------------------: |
| Linear Search |              **O(n)** |
| Binary Search |          **O(log n)** |

For extremely large datasets, this difference is substantial. The lecture demonstrates binary search remaining extremely fast even with **1 billion elements**.

> **Key Idea:** Choosing a better algorithm can have a far greater impact on performance than simply using more powerful hardware.
---
### Recursive Binary Search

Binary search can be implemented using **recursion**, repeatedly reducing the search range by half.

### Base Cases

The recursion stops when:

* The search range is **empty** → target not found.
* The middle element **equals the target** → target found.

### Recursive Logic

1. Calculate the midpoint.
2. Compare the middle element with target `k`.
3. If `k` is smaller → recursively search the **left half**.
4. If `k` is larger → recursively search the **right half**.
5. Repeat until a base case is reached.

```text id="r8l5x2"
Binary Search
     ↓
Check middle
   ↙     ↘
left    right
 half     half
   ↓       ↓
recursive search
```

### Performance

Binary search remains **O(log n)** whether implemented iteratively or recursively.

### Recursion Limit

Python places a limit on recursion depth. The default limit is approximately **1000 recursive calls** (commonly reported as 999), preventing recursion from continuing indefinitely.

Exceeding the limit can raise a `RecursionError`.

> **Key Idea:** Recursion provides an elegant way to express binary search, but recursive solutions must always have **clear base case**
