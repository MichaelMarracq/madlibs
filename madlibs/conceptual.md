### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  its a frontend framework that uses a reusable components isolated

- What is Babel?
  its a js compiler for backwards compatability with older browsers

- What is JSX?
  jsx is a syntax used in react for writing html in javascript files

- How is a Component created in React?
  you define a function that returns jsx html

- What are some difference between state and props?

  props are parameters for the component functions to pass data into/out of the components, while state is the react functionality for keeping track of data points for react apps

- What does "downward data flow" refer to in React?
  refers to passing data from parent components to child components through props

- What is a controlled component?

  controlled components have their value controlled by react

- What is an uncontrolled component?

  uncontrolled components use the browser to control it's state

- What is the purpose of the `key` prop when rendering a list of components?

  key prop is used to properly give components a unique identifier

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

  because if the list order ever changes, it can cause issues with rendering odf the component lists

- Describe useEffect. What use cases is it used for in React components?

  useEffect is used for things like fetching data or manually updating the DOM after its already been rendered without re-rendering

- What does useRef do? Does a change to a ref value cause a rerender of a component?

  useRef creates stored values that persist across component renders

- When would you use a ref? When wouldn't you use one?

  you would use a ref when you need to modify the dom directly and things of that nature that you cant do with state and props

- What is a custom hook in React? When would you want to write one?

  its creating a modular code hook that can be used across multiple components to reduce duplicative code
