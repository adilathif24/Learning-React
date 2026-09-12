# Day 3 — React Event Handling

**Date: 12 September 2026**

## Progress
### Event Handling — COMPLETED ✅

## Learning Method Used
For every concept:
1. Definition
2. Hindi/Hinglish explanation
3. Syntax + code example
4. Real-world example
5. Hands-on practice
6. Interview point
7. VS Code practice
8. GitHub documentation

## Topics Completed
- [x] Event Handling
- [x] `onClick`
- [x] Inline Event Handler
- [x] Event Handler Function
- [x] `onClick={handleClick}` vs `onClick={handleClick()}`
- [x] Event Handling + `useState`
- [x] `onChange`
- [x] Event Object
- [x] `event.target`
- [x] `event.target.value`
- [x] Controlled Input
- [x] Conditional UI with Event + State
- [x] Mouse Events: `onMouseEnter`, `onMouseLeave`, `onMouseOver`
- [x] `onSubmit`
- [x] `event.preventDefault()`
- [x] Form submission with controlled inputs
- [x] Passing arguments to event handlers
- [x] Multiple arguments: product ID, name, price
- [x] Event Handling + State mini-project
- [x] Bootstrap UI integration

## Real-World Example

Shopping Cart:

```text
Product: iPhone
Price: ₹70,000

[ Add to Cart ]
        ↓ click
Cart Items: 1
        ↓ click
Cart Items: 2
```

This demonstrates Event Handling + `useState` working together.

## Mini Project

**Product Order Form** — combines `useState`, controlled inputs, `onChange`, `onSubmit`, `preventDefault`, calculation, conditional rendering, and Bootstrap.

Flow:

```text
Product
  ↓
Quantity input
  ↓
onChange
  ↓
State update
  ↓
Add to Cart
  ↓
onSubmit
  ↓
preventDefault()
  ↓
price × quantity
  ↓
setSelectedItems()
  ↓
Conditional Rendering
  ↓
Order summary
```

## Interview Preparation

Completed questions include:
- What is Event Handling in React?
- What is `onClick`?
- `onClick={handleClick}` vs `onClick={handleClick()}`
- What is `onChange`?
- What is `event.target.value`?
- What is a controlled input?
- Why use `event.preventDefault()`?
- What is `onSubmit`?
- How to pass arguments to event handlers?
- How to pass custom arguments together with the event object?

## GitHub Updates

- `important-topics/event-handling.md` — topic notes added
- `important-questions/day-03-important-questions.md` — interview questions maintained
- `interview-preparation/day-03-react-event-handling.md` — interview preparation added

## Status

**Day 3 Event Handling — COMPLETED ✅**

## Next Topic

**Props as Children**
