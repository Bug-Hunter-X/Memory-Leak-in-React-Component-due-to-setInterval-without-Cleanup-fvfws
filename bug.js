```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic to set interval only once
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Missing cleanup function to clear the interval
    // when the component unmounts or when the effect runs again
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```