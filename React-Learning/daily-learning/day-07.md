# Day 7 — Responsive UI with Bootstrap + Employee Cards 📱💻

**Date: 15 September 2026**

## Progress

### Responsive UI — COMPLETED ✅

## Learning Method

For every topic, maintain the same pattern:

1. Explanation
2. Definition
3. Syntax / Example
4. Real-world connection
5. Hands-on task with code
6. Interview question + situation
7. Common mistakes

This structure is kept consistent across VS Code practice, browser notes and GitHub documentation.

---

# 1. Responsive UI

## Definition — English

Responsive UI is a user interface that adapts its layout and sizing to different screen sizes such as mobile, tablet and desktop.

## Definition — Hinglish

Screen mobile, tablet ya desktop ho, UI apne layout ko uske according adjust kare — isko responsive UI kehte hain.

## Explanation

React does not provide a separate responsive-layout system. Responsive behavior is normally implemented with CSS frameworks such as Bootstrap or CSS media queries.

## Basic CSS Example

```css
.container {
  display: flex;
  gap: 20px;
}

.card {
  flex: 1;
  padding: 30px;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

## Real-world Connection

E-commerce product grids, employee dashboards, job portals, admin panels and profile pages need to work across phones, tablets and desktops.

---

# 2. Bootstrap Responsive Grid

## Definition

Bootstrap's grid system uses rows and columns to create responsive layouts.

## Example

```jsx
<div className="container">
  <div className="row">
    <div className="col-12 col-md-4">Card 1</div>
    <div className="col-12 col-md-4">Card 2</div>
    <div className="col-12 col-md-4">Card 3</div>
  </div>
</div>
```

## Real-world Example

Product listing pages can show one product per row on small screens and multiple products per row on larger screens.

## Key Bootstrap Pattern

```text
col-12       → full width on small screens
col-sm-6     → 2 columns from small breakpoint
col-md-4     → 3 columns from medium breakpoint
col-lg-3     → 4 columns from large breakpoint
```

---

# 3. Hands-on Task — Employee Responsive Cards

## Requirements

- Use `employees.map()`
- Use `key={employee.id}`
- Show name
- Show role
- Show salary
- Use Bootstrap cards
- Mobile → 1 card
- Tablet → 2 cards
- Desktop → 4 cards

## Data

```jsx
const employees = [
  { id: 1, name: "Adil", role: "React Developer", salary: 50000 },
  { id: 2, name: "Rahul", role: "Java Developer", salary: 60000 },
  { id: 3, name: "Aman", role: "Frontend Developer", salary: 45000 },
  { id: 4, name: "Ahmed", role: "React Developer", salary: 55000 }
];
```

## Completed Implementation Pattern

```jsx
{employees.map((employee) => (
  <div
    key={employee.id}
    className="col-12 col-sm-6 col-lg-3 mb-4"
  >
    <div className="card h-100">
      <div className="card-body">
        <h5>{employee.name}</h5>
        <p>{employee.role}</p>
        <p>₹{employee.salary.toLocaleString()}</p>
      </div>
    </div>
  </div>
))}
```

## Layout Flow

```text
employees
   ↓
map()
   ↓
Bootstrap column
   ↓
Employee card
   ↓
Responsive layout
```

---

# 4. Real-world Situation

### Situation

A company has 100 employee records. The HR dashboard should show employee cards on desktop, tablet and mobile.

### Interview-style Answer

"I would render the employee data dynamically with `map()` and use Bootstrap's responsive grid classes. I would use `col-12` for mobile, `col-sm-6` for two cards at the small breakpoint, and `col-lg-3` for four cards on large screens. Each employee would use a stable `key` such as `employee.id`."

---

# 5. Interview Questions

### Q1. What is responsive UI?

**Answer:** Responsive UI adapts its layout and sizing to different screen sizes and devices.

### Q2. How do you make a React application responsive?

**Answer:** React handles the UI structure, while CSS, media queries or responsive frameworks such as Bootstrap can control the responsive layout.

### Q3. What does `col-12 col-sm-6 col-lg-3` mean?

**Answer:** It creates one column per row by default, two columns from the small breakpoint, and four columns from the large breakpoint.

### Q4. Why do we use `key={employee.id}`?

**Answer:** React uses keys to identify list items consistently when rendering and updating a list.

### Q5. Why use `map()` here?

**Answer:** `map()` transforms each employee data object into a React element so the UI can be rendered dynamically.

---

# 6. Interview Situation Questions

### Situation 1 — Mobile layout is broken

**Question:** Your employee cards look fine on desktop but overlap on mobile. What would you check?

**Answer:** I would inspect the responsive column classes, container/row structure, fixed widths and any custom CSS that prevents the cards from shrinking.

### Situation 2 — Cards are not rendering

**Question:** The API returns employees but no cards appear. What would you check?

**Answer:** I would verify the data shape, `map()` expression, console output, JSX structure and whether the array is actually populated.

### Situation 3 — React warning about keys

**Question:** React shows a key warning while rendering employees. What would you do?

**Answer:** I would provide a stable unique key such as `employee.id` rather than relying on an array index when a unique ID exists.

---

# 7. Common Mistakes

- Forgetting the Bootstrap `row` around columns
- Using only `col-12` and expecting desktop columns automatically
- Using an array index as key when a stable ID exists
- Hard-coding repeated employee cards instead of using `map()`
- Adding fixed widths that break mobile layouts
- Mixing responsive classes incorrectly

---

# Day 7 Summary

## Completed

- Responsive UI concept
- CSS media-query basics
- Bootstrap responsive grid
- `container`
- `row`
- Responsive columns
- Employee cards with `map()`
- Stable keys
- Mobile / tablet / desktop layouts
- Responsive UI interview preparation
- Situation-based interview preparation

## Day 7 Status

**RESPONSIVE UI — COMPLETED ✅**

## Phase 2 Status

- Component Structure — COMPLETED ✅
- Reusable Components — COMPLETED ✅
- Parent → Child Communication — COMPLETED ✅
- Search & Filtering — COMPLETED ✅
- Dynamic UI — COMPLETED ✅
- API Integration — COMPLETED ✅
- Responsive UI — COMPLETED ✅
- Tailwind CSS — SKIPPED / NOT CURRENTLY STUDYING ⏸️

## GitHub Record

Daily note:

```text
React-Learning/daily-learning/day-07.md
```

Topic note:

```text
React-Learning/important-topics/responsive-ui.md
```

Interview notes:

```text
React-Learning/interview-preparation/day-07-responsive-ui.md
```

## Next

Continue with **React Routing**: `BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`, and `useNavigate()`.
