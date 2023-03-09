# React kindergarten

Learning the under-the-hood workings of React by reimplementing a simple version of how React works

## The process

### JSX (JavaScript XML)

Javascript XML is an XML-like extension of JavaScript, it is a syntactic sugar extension that allows us to write html like syntax but that is transpired back to valid JS

In React, a JSX element like

```js
<h1>Hello world</h1>
```

is an equivalent to

```js
React.createElement("h1", null, "Hello world");
```

### Transpiring

As mentioned above JSX code need to be converted into native JS and the same for other ES6 syntax that is not natively supported by some old browsers that's where a transpirer comes into the picture. Apps tools like Babel, TypeScript can help to convert JSX into JS or different JavaScript versions

This project uses [ESbuild](https://esbuild.github.io/) as the transpirer

### Bundling

In a React codebase where the codebase will contain different types of files but in the end they will all be compiled into the same file that will be served along with the `index.html`. Tools like `Webpack`, `Rollup` are used to bundle all of the projects files into a single file

This project uses [ESbuild](https://esbuild.github.io/) as the bundler. ESbuild can be used as a transpirer or a bundler

## Content

The project is structured into two parts the part of the `react` package and the part of `react-dom`

### React DOM
