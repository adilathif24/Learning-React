# Day 3 — React Event Handling + Workshop Topics

**Date: 14 September 2026**

## Progress
### Event Handling — COMPLETED ✅
### React Workshop Practical Flow — LEARNED ✅

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

## Topics Completed — Event Handling
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

## Today's Workshop Learning

The workshop/practical discussion added the following real-world React flow:

### 1. API Data → UI
After fetching data from an API, the data can be rendered dynamically on the React UI.

Flow:
```text
API
 ↓
Fetch data
 ↓
Store / use data
 ↓
Render data on UI
```

### 2. Searching and Filtering
The fetched data can be searched and filtered so users can find relevant records instead of viewing the complete dataset.

Flow:
```text
API Data
 ↓
Render list
 ↓
Search / Filter
 ↓
Show matching results
```

### 3. React Router
For navigation between views in a React application, React Router can be used instead of normal anchor-based page navigation.

Key idea:
- Routes decide which component/view should be displayed.
- Navigation changes the displayed view without requiring a traditional full-page navigation flow.

### 4. SPA — Single Page Application
A React SPA can keep the application on one page while different components/views are loaded or updated as the user navigates.

Concept:
```text
One React Application
        ↓
Different Routes / Views
        ↓
Different Components Render
```

### 5. Practical Real-World Flow
The workshop discussion connected these concepts into a practical application flow:

```text
API Fetching
   ↓
Dynamic Data Rendering
   ↓
Search / Filtering
   ↓
React Router
   ↓
SPA Navigation
   ↓
Real React Application
```

## Real-World Example

A Job Dashboard can use this same flow:
- Fetch job data from an API.
- Display jobs dynamically.
- Search jobs by title or keyword.
- Filter jobs by relevant criteria.
- Use React Router for different views such as Jobs, Job Details, and About.
- Keep the application as a SPA while changing views/components.

## Event Handling Real-World Example

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

## Mini Project — Product Order Form

This combines `useState`, controlled inputs, `onChange`, `onSubmit`, `preventDefault`, calculation, conditional rendering, and Bootstrap.

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

Workshop-related interview points learned today:
- How do you render API data in React?
- Why are search and filtering useful in a data-driven React UI?
- What is React Router?
- Why use routing in a React application?
- What is an SPA?
- How does API → UI → search/filter → routing fit together in a real application?

## GitHub Updates

- `important-topics/event-handling.md` — event handling notes
- `important-topics/api-data-rendering.md` — API data rendering, search/filtering, Router and SPA notes
- `important-questions/day-03-important-questions.md` — interview questions maintained and expanded
- `interview-preparation/day-03-react-event-handling.md` — interview preparation and workshop flow added
- `interview-preparation/day-03-workshop-practical-flow.md` — workshop practical interview preparation

## Status

**Day 3 — Event Handling + Today's Workshop Learning — COMPLETED ✅**

## Next Topic

**Props as Children**
