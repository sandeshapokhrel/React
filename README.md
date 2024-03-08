## Table of Contents

- [What is React?](#what-is-react)
- [Why should we learn React?](#why-should-we-learn-react)
- [Understanding Virtual DOM](#understanding-virtual-dom)
- [Example of Single Page App](#example-of-single-page-app)
- [What is a Library? (Using jQuery Example)](#what-is-a-library-using-jquery-example)
- [Understanding Modules and Named Exports with Example](#understanding-modules-and-named-exports-with-example)
- [Installing VS Code and Node.js on macOS](#installing-vs-code-and-nodejs-on-macos)
- [Installation of VS Code and Node.js on Windows](#installation-of-vs-code-and-nodejs-on-windows)
- [Installing Namaste React using create-react-app](#installing-namaste-react-using-create-react-app)
- [Running Namaste React](#running-namaste-react)
- [Understanding Folder Structure in a React App](#understanding-folder-structure-in-a-react-app)
- [Example for Components using Twitter](#example-for-components-using-twitter)
- [How to make Components?](#how-to-make-components)
- [What is JSX?](#what-is-jsx)
- [Hot Reloading](#hot-reloading)
- [Embedding Expressions in JSX](#embedding-expressions-in-jsx)
- [Creating New Project APNA CART](#creating-new-project-apna-cart)
- [Installing Extensions in VS Code](#installing-extensions-in-vs-code)
- [Adding Bootstrap in Apna Cart App](#adding-bootstrap-in-apna-cart-app)
- [Creating Navbar Component](#creating-navbar-component)
- [Planning Apna Cart App](#planning-apna-cart-app)
- [Rendering List using ProductList Component](#rendering-list-using-productlist-component)
- [Passing Data using Props](#passing-data-using-props)
- [What is a Pure Function in JavaScript?](#what-is-a-pure-function-in-javascript)
- [Creating Product Component](#creating-product-component)
- [Handling events with React elements](#handling-events-with-react-elements)
- [Understanding State](#understanding-state)
- [Using State Hook](#using-state-hook)
- [Creating Footer Component](#creating-footer-component)
- [Resetting State of All Components](#resetting-state-of-all-components)
- [Removing Items from List](#removing-items-from-list)
- [Conditional Rendering in JSX](#conditional-rendering-in-jsx)
- [Creating Form in React](#creating-form-in-react)
- [Debugging in React](#debugging-in-react)

## what-is-react

 React.js, an open-source JavaScript library developed by Facebook for building user interfaces (UIs) or UI components. React.js is widely used for creating single-page applications (SPAs) where content is dynamically updated without reloading the entire page.

Key Features
1. Component-Based Architecture
React.js enables developers to build encapsulated components that manage their state and can be composed to create complex UIs. Components are reusable and can be nested within each other.

2. Virtual DOM
React.js employs a virtual DOM (Document Object Model) to improve performance. This approach minimizes direct DOM manipulations by creating a virtual representation of the DOM in memory and updating only the parts that have changed.

3. JSX Syntax
JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript, making the creation of React elements more intuitive and readable.

4. Unidirectional Data Flow
React follows a unidirectional data flow, enabling data to flow from parent to child components. This facilitates understanding how data changes propagate through the application.

5. Declarative Syntax
React.js utilizes a declarative syntax, where developers describe the desired UI state, and React handles the updates to the DOM to match that description. This simplifies code understanding and reasoning.

6. React Hooks
Introduced in React 16.8, hooks are functions that enable developers to use state and other React features without writing a class. They facilitate the reuse of stateful logic across different components.

7. Ecosystem and Community
React has a vast and active ecosystem with various tools, libraries, and frameworks (such as React Router, Redux, and Next.js) that extend its capabilities and simplify common tasks in building web applications.

## why-should-we-learn-react

Here are concise points highlighting why you should learn React:

1. Industry Dominance: React is widely adopted by top tech companies and is in high demand in the job market.

2. Component-Based: Its component-based architecture promotes modularity and reusability, leading to more maintainable codebases.

3. Declarative Syntax: React's declarative syntax simplifies UI development by focusing on what the UI should look like rather than how to manipulate the DOM.

4. Virtual DOM: React's virtual DOM optimizes performance by efficiently updating only the components that have changed, resulting in faster rendering.

5. React Native: With React Native, you can leverage your React skills to build cross-platform mobile applications for iOS and Android.

6. Active Community: React has a thriving community that contributes libraries, tools, and resources, accelerating development and providing support.

7. Career Opportunities: Learning React enhances your marketability and opens up a wealth of career opportunities in frontend and full-stack development.

## understanding-virtual-dom

The Virtual DOM in React is a lightweight representation of the actual DOM. It enables React to efficiently update the UI by minimizing the number of DOM manipulations. When state or props change, React constructs a new virtual DOM, compares it with the previous one, and calculates the most efficient way to update the actual DOM. This process improves performance by reducing unnecessary re-renders and enhances user experience. Ultimately, the Virtual DOM contributes to React's reputation for fast and responsive web application.
