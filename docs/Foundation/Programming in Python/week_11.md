# Week 11

### NumPy

**NumPy (Numerical Python)** is a library for efficient **numerical and scientific computing**. Its core data structure is the **`ndarray` (n-dimensional array)**.

### NumPy Array vs Python List

| Feature              | Python List       | NumPy Array                          |
| -------------------- | ----------------- | ------------------------------------ |
| Installation         | Built-in          | External library                     |
| Data types           | Can be mixed      | Usually same type                    |
| Memory               | Less efficient    | More memory-efficient                |
| Numerical operations | Require iteration | **Element-wise operations**          |
| Dimensions           | Nested lists      | Explicit **n-dimensional structure** |

### Element-wise Operations

NumPy supports arithmetic directly on arrays:

```python
import numpy as np

a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

a + b
# [5 7 9]
```

With Python lists, equivalent numerical operations generally require explicit iteration.

### Dimensions

NumPy arrays can represent different dimensions:

* **0D** → Scalar
* **1D** → Vector
* **2D** → Matrix
* **3D+** → Higher-dimensional arrays / tensors

```text
0D → 5
1D → [1, 2, 3]
2D → [[1, 2], [3, 4]]
3D → collection of 2D arrays
```

### Why NumPy?

NumPy's efficient memory layout and optimized operations make it much faster for **large-scale numerical computation**.

It forms an important foundation for fields such as **data science, machine learning, and deep learning**.

> **Key Idea:** NumPy provides efficient **n-dimensional arrays and vectorized numerical operations**, making it far more suitable than Python lists for numerical computing.
---

### Pandas

**Pandas** is a Python library designed for efficient **data manipulation and analysis**.

### Pandas vs Traditional File Handling

Traditional CSV processing may require:

```python
f = open("data.csv")
lines = f.readlines()
```

Then manually parsing, filtering, sorting, and calculating values.

Pandas provides concise operations for these tasks.

### Reading CSV Files

```python
import pandas as pd

df = pd.read_csv("data.csv")
```

This loads the CSV data into a **DataFrame**.

### Basic Data Operations

Pandas can perform common operations directly:

```python
df["marks"].mean()
df["marks"].max()
df["marks"].sum()
```

It also supports operations such as **sorting**:

```python
df.sort_values("marks")
```

### Why Pandas?

* Reduces **code complexity**.
* Simplifies data manipulation.
* Provides built-in analytical operations.
* Becomes increasingly valuable as datasets and operations become more complex.

> **Key Idea:** Pandas abstracts away much of the manual work involved in reading and manipulating tabular data, making **data analysis faster and more concis**
---

### DataFrames & Series

Pandas provides two core data structures:

* **DataFrame** → Two-dimensional table with rows and columns.
* **Series** → One-dimensional data structure, typically representing a column.

```text
DataFrame
┌───────┬───────┐
│ Name  │ Marks │
├───────┼───────┤
│ A     │ 85    │
│ B     │ 92    │
└───────┴───────┘
        ↑
      Series
```

### Inspecting Data

```python
df.head()   # first rows
df.tail()   # last rows
```

These are useful for quickly understanding a dataset.

### Filtering Data

Rows can be selected using **conditions**:

```python
df[df["name"] == "Anu"]
```

Multiple conditions can be combined using `&`:

```python
df[(df["gender"] == "F") & (df["marks"] > 80)]
```

### Data Analysis

Pandas can calculate statistics for selected groups:

```python
df["marks"].max()
df["marks"].mean()
```

`between()` can categorize values into ranges:

```python
df["marks"].between(60, 80)
```

These conditions can be combined to create **performance bins** and count students in each category.

### `groupby()`

`groupby()` groups rows based on a column, allowing statistics to be calculated for each group.

```python
df.groupby("gender")["marks"].mean()
```

This is useful for **subgroup analysis** without manually filtering each group.

> **Key Idea:** Pandas provides powerful tools for **inspecting, filtering, grouping, and aggregating** tabular data with concise operations.
---

### Matplotlib

**Matplotlib** is a Python library used for **data visualization**, allowing numerical data to be represented graphically.

It is often used with **NumPy** to generate and visualize data.

### Common Plots

| Plot         | Function        | Use                               |
| ------------ | --------------- | --------------------------------- |
| Scatter plot | `plt.scatter()` | Show relationships between values |
| Bar chart    | `plt.bar()`     | Compare categories                |
| Histogram    | `plt.hist()`    | Show data distribution            |
| Pie chart    | `plt.pie()`     | Show proportions                  |

Example:

```python
import matplotlib.pyplot as plt

plt.bar(["A", "B", "C"], [10, 20, 15])
plt.show()
```

### Customization

Plots can be customized using properties such as:

* **Colors**
* **Markers**
* **Labels**
* **Figure styles**

This makes visualizations easier to interpret.

### Subplots

`plt.subplots()` allows multiple plots to be arranged within a **single figure**.

```python
fig, ax = plt.subplots(2, 2)
```

The parameters define the number of **rows and columns**, while individual axes represent the corresponding plot locations.

> **Key Idea:** Matplotlib turns raw numerical data into **visual representations**, making patterns, comparisons, and distributions easier to understand.
