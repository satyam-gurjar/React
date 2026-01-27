🚀 React Learning Journey (Day-Wise Notes)

This repository documents my day-by-day learning of React, focusing on understanding how React works internally, core concepts, and commonly used hooks.

# Day 1: How React Is Built & How It Works

What I Learned

React is a JavaScript library for building user interfaces

React uses a Virtual DOM to update UI efficiently

UI updates happen through a process called reconciliation

I built a small custom React-like implementation to understand:

How components render

How updates happen internally

Key Takeaway

React updates only what changes, not the entire DOM.

# Day 2: Babel, Components, Props, Fragment

## Babel

Babel is a JavaScript compiler that converts JSX into plain JavaScript.

<h1>Hello</h1>

⬇ Converted to:

React.createElement("h1", null, "Hello");

## Components

A component is a JavaScript function that returns JSX.
Component names must start with a capital letter.

```javascript
function Hello() {
  return <h1>Hello React</h1>;
}
```

## Props

Props are data passed to components, similar to function parameters.

```javascript
function Welcome({ name }) {
  return <h2>Hello {name}</h2>;
}
<Welcome name="Satya" />;
```

## Fragment

Fragments allow returning multiple elements without extra divs.

```HTML
<>
  <h1>Title</h1>
  <p>Description</p>
</>
```

# Day 3: useState Hook

## useState

useState allows a component to store data and re-render UI when data changes.

const [count, setCount] = useState(0);

```javascript
<button onClick={() => setCount(count + 1)}>Count: {count}</button>
```

# Day 4: useEffect Hook

## useEffect

Used for side effects such as:

API calls

Timers

Event listeners

```javascript
useEffect(() => {
  console.log("Component mounted");
}, []);
```

# Day 5: Performance Hooks

## React.memo

Prevents unnecessary re-renders when props don’t change.

```javascript
const Child = React.memo(() => {
  return <h1>Child Component</h1>;
});
```

## useMemo

Memoizes expensive calculations.

```javascript
const result = useMemo(() => heavyCalculation(num), [num]);
```

## useCallback

Memoizes functions to prevent re-creation on every render.

```javascript
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

# Day 6: useRef Hook

## useRef

Stores values without triggering re-render.

Common Uses

Accessing DOM elements

Storing interval / timeout IDs

Keeping mutable values

```javascript
const inputRef = useRef(null);

<input ref={inputRef} />
<button onClick={() => inputRef.current.focus()}>
  Focus Input
</button>
```

# Day 7: Forms & Validation

## React Hook Form

Library for handling forms efficiently with minimal re-renders.

```javascript
const { register, handleSubmit } = useForm();

<form onSubmit={handleSubmit((data) => console.log(data))}>
  <input {...register("name")} />
  <button type="submit">Submit</button>
</form>;
```

## Zod Validation

Zod is used for schema-based validation.

```javascript
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
});
``;
```
