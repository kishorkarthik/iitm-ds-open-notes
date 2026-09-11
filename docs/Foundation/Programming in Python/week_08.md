# Week 8

## File Handling & Memory

Programs often need to work with data that is too large to keep entirely in **RAM**.

### RAM vs Hard Disk

| Feature     | RAM                | Hard Disk         |
| ----------- | ------------------ | ----------------- |
| Speed       | **Fast**           | Slower            |
| Capacity    | Limited            | **Large**         |
| Persistence | Volatile           | **Non-volatile**  |
| Use         | Active computation | Long-term storage |

### Why File Handling?

Manually entering large amounts of data is impractical. Real-world datasets may contain **millions of values** stored on disk.

Python's **file handling** allows programs to:

* Read data from files.
* Write data to files.
* Process large datasets programmatically.

### Data Science Connection

File handling is an important foundation for **data science**, where datasets are commonly stored externally and processed by programs.

> **Key Idea:** RAM is fast but limited, while disk storage is slower but much larger. **File handling bridges the two**, allowing programs to process stored data efficiently.
---
## Basic File Handling

Python provides the `open()` function to **create, write, and read files**.

### Opening Files

```python
file = open("data.txt", "w")
```

| Mode  | Purpose                                          |
| ----- | ------------------------------------------------ |
| `"w"` | Write; creates or **overwrites** a file          |
| `"r"` | Read an existing file                            |
| `"a"` | Append data without overwriting existing content |

### Writing to a File

```python
file.write("Hello World")
```

Use `\n` to insert a **new line**:

```python
file.write("Hello\nWorld")
```

### Reading from a File

```python
file = open("data.txt", "r")
content = file.read()
```

`read()` retrieves the **entire file content as a string**.

### Closing a File

```python
file.close()
```

Always close a file after completing operations to properly finalize the file operation.

> **Key Idea:** Basic file handling follows the pattern **open → read/write → close**.
---

## Efficient File Reading

Large files should be processed **line by line** rather than loaded entirely into memory.

### `readline()`

```python
line = f.readline()
```

`readline()` reads **one line at a time**, making it suitable for large files.

### Detecting End of File

When there is no more data, `readline()` returns an **empty string**:

```python
if line == "":
    break
```

This check is important before converting the line to another type.

### Type Conversion

File contents are read as **strings**. They can be converted when needed:

```python
num = int(line)
```

However, converting an empty string causes a `ValueError`. Therefore:

```python
if line != "":
    num = int(line)
```

### Search Using a Flag

A **flag variable** can track whether a value was found:

```text
flag = 0
    ↓
search each line
    ↓
match found → flag = 1
    ↓
report result
```

* `0` → not found
* `1` → found

> **Key Idea:** For large files, use `readline()` to process data incrementally and check for the **empty string** before performing type conversion.
---

## Processing Large Files

Extremely large files cannot be loaded entirely into memory or opened reliably in standard text editors.

### Line-by-Line Processing

Python can process large files incrementally using `readline()`:

```python
line = f.readline()

while line != "":
    # process line
    line = f.readline()
```

Only a small portion of the file is held in memory at a time.

### Sequential File Access

File systems can be viewed as **linear streams of data**. Sequential processing allows programs to handle massive files without loading everything at once.

This is similar to **video streaming**: a video player processes data progressively rather than loading the entire movie into memory.

### Key Takeaway

> **Process large files sequentially, one line or segment at a time, instead of loading the entire file into memory.**

> This principle is important for working with **large datasets** and forms the basis for applications such as processing files for **cryptography**.
---

## Caesar Cipher with File Handling

The **Caesar cipher** can be applied to an entire text file by shifting each letter by a fixed number of positions.

### Encryption

For a shift of `3`:

```text
a → d
b → e
...
x → a
y → b
z → c
```

The wrap-around is handled using **modulo 26**.

### Dictionary Mapping

A dictionary can store the encryption mapping:

```python
cipher = {
    "a": "d",
    "b": "e",
    # ...
    "z": "c"
}
```

### File Processing

The program:

1. Opens `Sherlock.txt` for reading.
2. Processes the text **character by character**.
3. Replaces each letter using the cipher dictionary.
4. Writes the encrypted text to `encrypted_Sherlock.txt`.

```python
with open("Sherlock.txt", "r") as f:
    text = f.read()

with open("encrypted_Sherlock.txt", "w") as f:
    # write encrypted text
```

### Decryption

The reverse mapping can be used to **decrypt** the encrypted file and recover the original text.

> **Key Idea:** File handling and the Caesar cipher can be combined to process and transform an entire text file programmatically.


