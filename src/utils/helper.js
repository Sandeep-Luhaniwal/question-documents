// NAVIGATION LINK CONFIGURATION

export const QUESTION_ANSWER_LIST = [
    {
      title: "What is HTML ?",
      description: "HTML (HyperText Markup Language) is the standard markup language used to create web pages. It provides the basic structure of a webpage by using a system of tags and elements to define the content and layout.",
    },
    {
      title: "What is CSS ?",
      description: "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation and design of a document written in HTML or XML. While HTML provides the structure and content of a webpage, CSS is responsible for how that content is visually displayed, including layout, colors, fonts, and spacing.",
    },
    {
      title: "What is function ?",
      description: "A function is a reusable block of code designed to perform a specific task or set of tasks. Functions are fundamental in programming and allow developers to write cleaner, more modular, and maintainable code by breaking down complex problems into smaller, more manageable parts.",
    },
    {
      title: "How Many Types of Components?",
      description: "In the context of front-end development, especially in frameworks like React, components are the building blocks of user interfaces. There are two main types of components: 1. Functional Components 2. Class Components",
    },
    {
      title: "What is Difference in Components Types?",
      description: "1. Syntax:- Functional Components: Defined as JavaScript functions that return JSX. Class Components: Defined using ES6 classes that extend React.Component and include a render() method. 2. State Management:-Functional Components:Before React 16.8, hey were stateless and could not manage their own state.After React 16.8, they can use hooks (e.g., useState, useEffect) to manage state and lifecycle events.  Class Components: Have a built-in state management using this.state.State can be updated using this.setState.  3. Lifecycle:- MethodsFunctional Components:Do not have traditional lifecycle methods like componentDidMount or componentDidUpdate.Hooks like useEffect can be used to mimic these lifecycle behaviors.Class Components:Have access to a full set of lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount, etc.). 4. PerformanceFunctional Components:- Generally perform better because they are simpler and don’t have the overhead of lifecycle methods.Class Components: Can be less performant due to the additional complexity of lifecycle methods and state management. 5. Code Length and Readability:- Functional Components:Typically shorter and easier to read. More concise since they are just functions without the need for this or constructor.Class Components: More verbose due to the need for this, constructors, and lifecycle methods.Can be harder to read, especially with complex logic. 6. Hooks:- Functional Components: Can use React hooks to add state and side-effects.Class Components: Cannot use hooks, rely on lifecycle methods and this.state for similar functionality. 7. Community Preference:- Functional Components: Increasingly preferred due to the introduction of hooks, which make them more powerful and easier to use.Class Components: Still used, but their usage has decreased in favor of functional components with hooks. Conclusion:- Functional components are now the standard for most new React development, thanks to their simplicity and the power of hooks. Class components are still important to know, especially for working with older codebases or certain complex scenarios." ,
    },
    {
      title: "What is Hooks?",
      description: "Hooks are a feature in React that allow you to use state and other React features in functional components. Introduced in React 16.8, hooks let you 'hook into' React's state and lifecycle features without needing to write a class component.",
    },
    {
      title: "How many Types of Hooks?",
      description: "React provides a variety of built-in hooks, and developers can also create custom hooks. Here's a list of the most commonly used built-in hooks: Basic Hooks: useState: Manages state in functional components. useEffect: Handles side effects, such as data fetching or manually changing the DOM. useContext: Accesses values from a React context. Additional Hooks: useReducer: Manages complex state logic, similar to how a reducer works in Redux. useCallback: Memoizes a function to prevent it from being recreated on every render. useMemo: Memoizes a value to prevent expensive calculations on every render. useRef: Accesses DOM elements or persists values across renders without causing re-renders. useImperativeHandle: Customizes the instance value that is exposed when using ref in parent components. useLayoutEffect: Similar to useEffect, but runs synchronously after all DOM mutations. useDebugValue: Displays a label for custom hooks in React DevTools. Custom Hooks: Custom Hooks: You can create your own hooks by combining built-in hooks. These custom hooks follow the naming convention of starting with 'use' (e.g., useFetch, useForm). Specialized Hooks (less commonly used): useTransition: Manages the transition state for rendering updates, particularly for deferred state transitions. useDeferredValue: Returns a deferred version of the value that updates at a lower priority. useId: Generates a unique ID for use in component trees. useSyncExternalStore: Used to subscribe to external data sources, often in state management libraries. useInsertionEffect: Runs code after DOM mutations but before the browser has painted, primarily for CSS-in-JS libraries. These hooks cover most scenarios you'll encounter in React development. You can combine these hooks in various ways to manage state, effects, context, and more efficiently within your components.",
    },
    {
      title: "What is Life Cycle?",
      description: "In the context of React, the component lifecycle refers to the sequence of events (or phases) that a React component goes through from its creation to its removal from the DOM. Understanding these phases allows developers to effectively manage and control component behavior during rendering, updating, and unmounting.",
    },
    {
      title: "How Many Types of Life Cycle?",
      description: "In React, the component lifecycle is divided into distinct phases, each with specific types of lifecycle methods or hooks that correspond to different stages in a component's existence. Here's an overview of the lifecycle types and associated methods/hooks: 1. Mounting:- Definition: This phase occurs when a component is created and inserted into the DOM. 2. Updating:- Definition: This phase occurs when a component is re-rendered due to changes in props or state. 3. Unmounting:- Definition: This phase occurs when a component is being removed from the DOM. 4. Error Handling:- Definition: This phase handles errors during rendering, in lifecycle methods, or in constructors of the whole component tree.",
    },
    
  ];
