# Python Learning — Functions, Lists, Conditions, and Name Management Project

> **Learning log:** Beginner Python practice covering functions (`def`), parameters, lists, `if/else`, membership checks, list methods, deletion, restoration, and a simple name-management program.
>
> **AI assistance disclosure:** These notes were prepared with AI assistance based on the code and concepts practised in the learning conversation. They are learning notes, not a claim that every line was written independently without help. Run, review, and modify the examples yourself so you can explain them in interviews.

## 1. Topics Learned

- `def`: define a reusable function.
- Function definition vs function call.
- Parameters vs arguments.
- Lists and zero-based indexes.
- `append()`, `remove()`, and `len()`.
- `in` and `not in` membership tests.
- `if` / `else` decision-making.
- Passing a value into a function.
- Managing active, deleted, and restored names using separate lists.
- Why list indexes shift after removal.
- `print()` vs `return` (introductory distinction).

## 2. Definitions and Syntax

### Function (`def`)
A **function** is a reusable block of code that performs a particular task. Functions make code easier to reuse, test, read, and maintain.

```python
def function_name(parameters):
    # indented function body
    print("Task completed")

function_name(arguments)  # call the function
```

- `def` starts a function definition.
- `function_name` is the name used to call it.
- `parameters` are variable names that receive input; they are optional.
- `:` marks the beginning of the function body.
- The indented lines belong to the function.
- A function is executed when it is called.

### Parameter vs argument
```python
def greet(name):       # name is a parameter
    print("Hello", name)

greet("Adil")          # "Adil" is an argument
```
A **parameter** appears in the function definition. An **argument** is the actual value supplied in a function call.

### List
A **list** is an ordered, mutable collection that can hold multiple values.
```python
names = ["Adil", "Syed", "Ali"]
print(names[0])  # Adil; the first index is 0
```
Indexes begin at `0`: `names[0]` is the first item and `names[1]` the second.

### Common list methods and checks
```python
names.append("Athif")    # add one item at the end
names.remove("Syed")     # remove the first matching value
print(len(names))        # number of current items
print("Ali" in names)    # True if present
print("Rahul" not in names)  # True if absent
```
`remove()` raises `ValueError` if the item is missing, so check membership first when appropriate.

### Conditions
```python
name = "Adil"
if name in ["Adil", "Syed"]:
    print("Name found")
else:
    print("Name not found")
```
The `if` block runs when the condition is true; `else` handles the alternative.

### `print()` vs `return`
`print()` displays a value. `return` sends a value back to the code that called the function. If no explicit `return` is used, Python returns `None` by default.
```python
def count_items(items):
    return len(items)

result = count_items(["a", "b"])
print(result)  # 2
```

## 3. Why, Where, and How We Use These Concepts

### Why use functions?
1. **Reusability:** define logic once and call it multiple times.
2. **Readability:** give operations meaningful names.
3. **Maintenance:** update one function instead of duplicated code.
4. **Testing:** verify a small operation in isolation.
5. **Organisation:** separate adding, removing, restoring, and viewing.

### Real-world uses
- Contact lists and customer records.
- Student or employee record applications.
- Shopping-cart items and inventory lists.
- Task managers that add, delete, or restore tasks.
- Web forms that validate submitted information.
- Reports that count the records currently in a collection.

### How to write a function
1. Decide the single task it should perform.
2. Pick a descriptive name.
3. Decide what input it needs.
4. Define it with `def` and a colon.
5. Indent the function body consistently.
6. Call it with test data.
7. Test success cases and missing/invalid cases.

## 4. Five Worked Examples

### Example 1 — Greeting function
```python
def greet(name):
    print("Hello", name)

greet("Adil")
greet("Syed")
```
**Output**
```text
Hello Adil
Hello Syed
```
**Explanation:** Each function call passes a different argument into the `name` parameter. The same logic is reused.

**Where it is used:** Welcome messages, personalised notifications, and greetings.

### Example 2 — Add a name without duplicates
```python
names = []

def addname(name):
    if name not in names:
        names.append(name)
        print("New name added =", name)
    else:
        print("Name already exists")

addname("Adil")
addname("Syed")
addname("Adil")
print(names)
```
**Output**
```text
New name added = Adil
New name added = Syed
Name already exists
['Adil', 'Syed']
```
**Explanation:** `not in` checks that the name is not already in the list; `append()` adds it. This check is case-sensitive, so `"Adil"` and `"adil"` are different strings.

**Where it is used:** Contact lists, simple username lists, and record management.

### Example 3 — Safely delete a name
```python
names = ["Adil", "Syed", "Ali"]
deleted = []

def removename(name):
    if name in names:
        names.remove(name)
        deleted.append(name)
        print("Deleted successfully =", name)
    else:
        print("No suitable name to delete")

removename("Syed")
removename("Rahul")
print("Active:", names)
print("Deleted:", deleted)
```
**Output**
```text
Deleted successfully = Syed
No suitable name to delete
Active: ['Adil', 'Ali']
Deleted: ['Syed']
```
**Explanation:** The membership check prevents trying to remove a missing value. A successful deletion moves the name into a separate list.

**Where it is used:** Removing tasks, contacts, products, or records from an active list.

### Example 4 — Restore a deleted name
```python
names = ["Adil", "Ali"]
deleted = ["Syed"]
restore = []

def restoreName(name):
    if name in names:
        print("Name already exists in active names")
    elif name in deleted:
        deleted.remove(name)
        names.append(name)
        restore.append(name)
        print("Restored successfully =", name)
    else:
        print("Name not found in deleted names")

restoreName("Syed")
restoreName("Adil")
restoreName("Rahul")
print("Active:", names)
print("Deleted:", deleted)
print("Restored history:", restore)
```
**Output**
```text
Restored successfully = Syed
Name already exists in active names
Name not found in deleted names
Active: ['Adil', 'Ali', 'Syed']
Deleted: []
Restored history: ['Syed']
```
**Explanation:** First prevent duplicates in the active list. Then check the deleted list. On a successful restore, move the name back and record the restoration.

**Where it is used:** Recycle-bin workflows, undo/restore operations, and deleted task management.

### Example 5 — View the current lists and counts
```python
names = ["Adil", "Ali"]
deleted = ["Syed"]
restore = ["Athif"]

def viewname():
    print("Active names:", names)
    print("Number of active names:", len(names))
    print("Deleted names:", deleted)
    print("Number currently deleted:", len(deleted))
    print("Restored history:", restore)

viewname()
```
**Explanation:** The function prints each list and uses `len()` to count the items currently in the active and deleted lists. The active count is not a count of every name ever added.

**Where it is used:** Simple admin reports, dashboards, and command-line management tools.

## 5. Combined Mini Project — Name Management System

```python
names = []
deleted = []
restore = []

def addname(name):
    if name not in names:
        names.append(name)
        print("New name added =", name)
    else:
        print("Name already exists")

def removename(name):
    if name in names:
        names.remove(name)
        deleted.append(name)
        print("Name deleted successfully =", name)
    else:
        print("Name not found in active names")

def restoreName(name):
    if name in names:
        print("Name already exists in active names")
    elif name in deleted:
        deleted.remove(name)
        names.append(name)
        restore.append(name)
        print("Restored successfully =", name)
    else:
        print("Name not found in deleted names")

def viewname():
    print("\n--- Name Management Report ---")
    print("Active names:", names)
    print("Number of active names:", len(names))
    print("Deleted names:", deleted)
    print("Number currently deleted:", len(deleted))
    print("Restoration history:", restore)

addname("syed adil")
addname("syed")
addname("adil")
addname("ali")
addname("athif")
removename("syed adil")
removename("adil")
restoreName("syed adil")
restoreName("Rahul")
addname("syed")  # duplicate prevention example
viewname()
```

### Project logic
- `names`: names currently active.
- `deleted`: names deleted but not restored yet.
- `restore`: history of successful restorations.
- `addname()`: adds a name if it is not currently active.
- `removename()`: moves an active name to the deleted list.
- `restoreName()`: moves a deleted name back and records the restoration.
- `viewname()`: prints the current state and counts.

### Important list-index lesson
```python
names = ["Adil", "Syed", "Ali", "Athif"]
names.remove("Adil")
print(names)     # ['Syed', 'Ali', 'Athif']
print(names[1])  # Ali, not Syed
```
Indexes represent positions, not permanent identifiers. Removing an earlier item shifts later items left. In the project, passing the intended name directly is clearer than relying on a changing numeric index.

### Project limitations
- Lists are stored in memory; data disappears when the program exits.
- String comparisons are case-sensitive.
- Names alone may not uniquely identify real people.
- A real application would usually need persistent storage, input validation, access controls, and audit logging.

## 6. Five Practice Questions With Solutions

### Q1. Write a function to calculate the square of a number.
```python
def square(number):
    return number * number

print(square(4))  # 16
print(square(7))  # 49
```
**Explanation:** The function accepts a number and returns its square; the caller can print or reuse that returned value.

### Q2. Explain parameter vs argument.
```python
def greet(name):    # parameter
    print("Hello", name)

greet("Adil")       # argument
```
**Answer:** `name` is the parameter in the definition, while `"Adil"` is the argument passed in the call.

### Q3. Check whether a name is in a list.
```python
names = ["Adil", "Syed", "Ali"]
if "Syed" in names:
    print("Found")
else:
    print("Not found")
```
**Output:** `Found`

### Q4. Explain why an index changes after removing an item.
```python
names = ["Adil", "Syed", "Ali"]
print(names[1])  # Syed
names.remove("Adil")
print(names[1])  # Ali
```
**Answer:** Removing `"Adil"` shifts the other items left; index `1` now refers to `"Ali"`.

### Q5. Restore a deleted name without creating a duplicate.
```python
names = ["Adil"]
deleted = ["Syed"]
restore = []

def restoreName(name):
    if name in names:
        print("Name already exists")
    elif name in deleted:
        deleted.remove(name)
        names.append(name)
        restore.append(name)
        print("Restored successfully")
    else:
        print("Name not found in deleted names")

restoreName("Syed")
restoreName("Adil")
restoreName("Rahul")
```
**Explanation:** Test the active list first, then the deleted list. Only a successful move updates the restore history.

## 7. Interview Questions and Answers

1. **What is a function in Python?** A reusable block of code for a specific task.
2. **Which keyword defines a function?** `def`.
3. **What is the difference between defining and calling a function?** Defining creates it; calling runs its body.
4. **What is a parameter?** A variable listed in a function definition that receives a value.
5. **What is an argument?** A value passed into a function call.
6. **What is a list?** An ordered, mutable collection of items.
7. **Can a list contain duplicate values?** Yes.
8. **What does `append()` do?** Adds one item to the end of the list.
9. **What does `remove()` do?** Removes the first matching value and raises `ValueError` if not found.
10. **What does `len()` return?** The number of items currently in a collection.
11. **What does `in` do?** Checks whether a value is present and returns a Boolean.
12. **What does `not in` do?** Checks whether a value is absent.
13. **What is zero-based indexing?** The first list item is at index `0`.
14. **Why check a value before removing it?** To avoid attempting to remove a value that is not present.
15. **What is the difference between `print()` and `return`?** `print()` displays a value; `return` passes a value back to the caller.
16. **Why did `names[1]` refer to a different item after deletion?** Removing an item shifts later values to lower indexes.
17. **Why keep active, deleted, and restored lists separately?** To track current active items, items awaiting restoration, and restore history in this learning example.
18. **What happens when a function has no explicit `return` statement?** It returns `None`.
19. **What is a limitation of this mini project?** It stores data only in memory, so it is lost when the program stops.
20. **How could this project be improved?** Add a menu, input validation, automated tests, and persistent file or database storage.

## 8. Five Coding Interview Questions and Answers

### 1. Add a name only if it does not already exist
```python
names = ["Adil", "Syed"]
name = "Ali"
if name not in names:
    names.append(name)
print(names)  # ['Adil', 'Syed', 'Ali']
```

### 2. Count items in a list
```python
names = ["Adil", "Syed", "Ali", "Athif"]
print(len(names))  # 4
```

### 3. Safely delete a name
```python
names = ["Adil", "Syed", "Ali"]
name = "Syed"
if name in names:
    names.remove(name)
print(names)  # ['Adil', 'Ali']
```

### 4. Move a deleted name to the active list
```python
names = ["Adil"]
deleted = ["Syed"]
name = "Syed"
if name in deleted and name not in names:
    deleted.remove(name)
    names.append(name)
print(names)   # ['Adil', 'Syed']
print(deleted) # []
```

### 5. Write a function that returns the number of active names
```python
names = ["Adil", "Syed", "Ali"]
def count_names():
    return len(names)

total = count_names()
print("Total active names:", total)  # Total active names: 3
```

## 9. Common Beginner Mistakes and Fixes

| Mistake | Why it happens | Fix |
|---|---|---|
| Forgetting `()` when calling a function | The function is referenced, not executed | Use `addname("Adil")` |
| Incorrect indentation | Python uses indentation for code blocks | Indent consistently |
| Removing a value that is missing | The value is not in the list | Check `if name in names` first |
| Expecting history to update by itself | Lists change only when code modifies them | Use `restore.append(name)` on successful restore |
| Assuming indexes stay the same after removal | Later elements shift left | Use the intended value or inspect the list again |
| Printing the whole list instead of one value | A list variable refers to the full collection | Use the current `name` variable when that is what you need |
| Treating `len(names)` as lifetime total additions | `len()` counts only current elements | Label it as the current active count |
| Restoring an already-active name | Could introduce a duplicate | Check `name in names` first |

## 10. Practice Plan

1. Type each example yourself rather than copying it blindly.
2. Predict the output before running the program.
3. Test duplicate names, missing names, and empty lists.
4. Explain each function: purpose, parameters, condition, list operation, and result.
5. Add a `searchname(name)` function.
6. Build a menu with Add, Delete, Restore, View, and Exit options.
7. Later, save records to a file or database so they persist after the program exits.

## 11. AI Assistance Disclosure and Learning Integrity

This study guide was drafted with AI assistance from the concepts and code explored during practice. The learner should personally test, review, adapt, and understand the examples before presenting this project as work they can explain. Be transparent in a portfolio or interview that it was a beginner practice project developed while learning with AI assistance.
