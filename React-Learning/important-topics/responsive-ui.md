# Responsive UI — React + Bootstrap

## Definition
Responsive UI is a user interface that adapts its layout and sizing to different screen sizes such as mobile, tablet and desktop.

## Hinglish Explanation
Screen mobile, tablet ya desktop ho, UI apne layout ko uske according adjust kare — isko responsive UI kehte hain.

## Explanation
React provides the component structure; responsive layout is implemented through CSS, media queries or CSS frameworks such as Bootstrap.

## Example
```jsx
<div className="container">
  <div className="row">
    <div className="col-12 col-sm-6 col-lg-3">Employee</div>
  </div>
</div>
```

## Real-world
Responsive grids are common in e-commerce product listings, HR dashboards, job portals and admin panels.

## Key Pattern
`col-12` → 1 card per row on mobile
`col-sm-6` → 2 columns from small breakpoint
`col-lg-3` → 4 columns from large breakpoint

## Hands-on
Employee cards using `employees.map()`, `key={employee.id}`, Bootstrap cards and responsive columns.

## Interview
**Q: How do you make a React UI responsive?**

**Answer:** I use CSS media queries or a responsive CSS framework such as Bootstrap. For a data-driven grid, I combine `map()` with responsive Bootstrap column classes.

## Common Mistakes
- Missing `row` around Bootstrap columns
- Fixed widths that break mobile layouts
- Incorrect breakpoint classes
- Missing stable keys for list items
