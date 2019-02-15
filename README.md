# component-trace-element-finder
Simple functions that help finding DOM elements through "component trace".

### React - babel plugin
To get it working you can simply use https://github.com/x-kom/babel-plugin-react-component-trace-data-attr with default `separator` and `attribute` options.

### Manual usage
You can also manually add `data-component-trace` attributes to your dom elements and separate the component names using single space.

## API
| Method name | Description |
|-------------|-------------|
| **`findAllComponentsByTrace`**<br>`(name: string, parent?: Element)` | Returns all elements that have `name` in their trace. Use `parent` to search only within the given element. |
| **`findTopComponentsByTrace`**<br>`(name: string, parent?: Element)` | Returns all elements that have `name` in their trace but **are not contained** within elements that have `name` in their trace too. Use `parent` to search only within the given element. |

## Example
Consider the following HTML markup
```html
<h1 data-component-trace="component second-component header-of-component">
  <span data-component-trace="component second-component header-of-component icon">
    🌠
  <span>
  Witness me
</h1>
<div data-component-trace="component second-component content-of-component">
  <span data-component-trace="component second-component content-of-component icon">
    💥
  <span>
  What a day, what a lovely day!
</div>
```

If you call 
```js
findAllComponentsByTrace('second-component')
```
you will get a set with all shown elements: `h1`, `div` and two `span`s. However when you change the function to 
```js
findTopComponentsByTrace('second-component')
```
you will get only `h1` and `div`, since `span`s are inside the `h1`/`div` and thus are not considered a "top" component here.

You can use parent to search for an element iside any other given element
```js
const header = findTopComponentsByTrace('header-of-component');
const iconInHeader = findTopComponentsByTrace('icon', header[0]);
```
