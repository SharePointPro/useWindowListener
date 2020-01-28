# useWindowListener
An example of how to use a standard window event listener with React hooks.

# Usage
To subscribe: 
```
const [ eventDetails ] = useWindowListener('eventName');

useEffect(() => {
    if (eventDetails) {
      onEventHit(eventDetails)
    }
  }, [eventDetails]);

const onEventHit = (eventDetails) => {
  console.log(eventDetails);
}
```

To dispatch:
```
window.dispatchEvent(new CustomEvent('eventName', { detail: {any: object }))

```
