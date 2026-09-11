# Week 10

### Exception Handling

**Exception handling** allows Python programs to handle unexpected errors gracefully instead of crashing.

### Common Exceptions

| Exception           | Cause                       |
| ------------------- | --------------------------- |
| `ZeroDivisionError` | Dividing by zero            |
| `NameError`         | Using an undefined variable |
| `FileNotFoundError` | Opening a non-existent file |

### `try`–`except`

Use `try` for code that may raise an exception and `except` to handle it.

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")
```

This allows the program to provide a **meaningful response** instead of displaying an unhandled error.

### `finally`

The `finally` block executes **regardless of whether an exception occurs**.

```python
try:
    # risky operation
except:
    # handle error
finally:
    # cleanup
```

Useful for tasks such as **closing files and releasing resources**.

### User-Defined Exceptions

Programmers can create their own exceptions for **application-specific conditions** and business rules.

> **Key Idea:** Exception handling makes programs more **robust, reliable, and maintainable** by anticipating and managing errors.
---

### Object-Oriented Programming

**Object-Oriented Programming (OOP)** is a programming paradigm that models real-world entities as **objects**.

### Objects

An object combines:

* **Attributes** → data or properties.
* **Behaviors** → functions or methods.

For example, a `Car` object might have:

```text
Attributes → color, model, speed
Behaviors  → start(), stop(), accelerate()
```

### Why OOP?

OOP **encapsulates data and its related functionality** within objects, allowing each object to maintain its own state and identity.

This makes complex systems easier to **model, organize, and maintain**.

> **Key Idea:** OOP represents real-world entities as objects that combine **state (attributes)** and **behavior (methods)**.
---
### Classes & Objects

A **class** is a blueprint or template used to create objects with a common structure.

### Class vs Object

* **Class** → Defines the structure and behavior.
* **Object** → A specific instance of a class with its own identity and data.

```text
Class: Student
   ↓
 ┌──────────────┐
 │ Student 1    │
 │ Student 2    │
 │ Student 3    │
 └──────────────┘
```

### Constructor

When an object is created, a **constructor** initializes its attributes.

In Python, this is commonly done using `__init__()`.

```python
class Student:
    def __init__(self, roll, name):
        self.roll = roll
        self.name = name
```

### Dot Operator

The **dot operator (`.`)** is used to access an object's attributes and methods:

```python
student.name
student.roll
```

Attributes can also be modified or added to individual objects.

> **Key Idea:** A **class defines the structure**, while each **object is an independent instance** with its own state.
---

### Methods & Attributes

Python classes combine **data and behavior** using attributes and methods.

### `__init__()` Method

`__init__()` initializes an object's **instance attributes** when it is created.

```python
class Student:
    def __init__(self, roll, name):
        self.roll = roll
        self.name = name
```

### `self`

`self` refers to the **current object**.

It allows methods to access and modify that object's attributes.

```python
self.name
self.roll
```

### Instance vs Class Attributes

| Type                   | Scope                          |
| ---------------------- | ------------------------------ |
| **Instance attribute** | Belongs to a specific object   |
| **Class attribute**    | Shared by objects of the class |

### Methods

Functions defined inside a class are called **methods**. They define the object's behavior.

```python
class Student:
    def result(self):
        # evaluate student's marks
        ...
```

Unlike general functions, methods operate in the context of an **object** and can access its attributes through `self`.

> **Key Idea:** OOP combines **state (attributes)** and **behavior (methods)** within objects, with `self` connecting methods to the object they operate on.
---
### Inheritance

**Inheritance** allows a subclass to reuse attributes and methods from a superclass.

```text
Person
 ├── Student
 └── Employee
```

* **Superclass / Parent** → provides common functionality.
* **Subclass / Child** → inherits and can extend that functionality.

### Method Overriding

A subclass can **redefine an inherited method** to provide its own implementation.

This allows common behavior to be specialized for different classes.

### Modular Code

Classes can be placed in separate Python files and imported when needed, improving **code organization and reusability**.

### Private Members

Double underscores can be used for name-mangled class members:

```python
class Student:
    def __init__(self):
        self.__marks = 90
```

This helps restrict direct access to internal data.

### Types of Inheritance

* **Simple** — one parent → one child.
* **Hierarchical** — one parent → multiple children.
* **Multiple** — multiple parents → one child.
* **Multilevel** — inheritance across multiple levels.
* **Hybrid** — combination of inheritance types.

> **Key Idea:** Inheritance promotes **code reuse**, while method overriding allows subclasses to provide **specialized behavior**.
