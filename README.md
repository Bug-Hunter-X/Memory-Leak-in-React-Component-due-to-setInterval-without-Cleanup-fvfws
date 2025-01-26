# React setInterval Cleanup Bug

This repository demonstrates a common bug in React components: the improper use of `setInterval` without a cleanup function. This leads to memory leaks because the interval continues to run even after the component is unmounted.

## Bug Description
The `MyComponent` component uses `setInterval` to update a counter every second. However, it lacks a cleanup function to clear the interval when the component is unmounted or when the effect runs again. This results in multiple intervals running concurrently, consuming unnecessary resources and potentially causing unexpected behavior.

## Solution
The bug is fixed by using a cleanup function within the `useEffect` hook's return value. This function clears the interval using `clearInterval` when the component unmounts or when the effect runs again. This ensures that resources are released and the application runs smoothly.

## How to Run
1. Clone the repository
2. Run `npm install`
3. Run `npm start`