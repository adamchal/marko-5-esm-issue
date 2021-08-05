# Marko 5 ESM Issue

Clone this repo and install the marko@5 dependency
```shell
npm i
```

Attempt to output the rendered HTML
```shell
node index.js
```

Using `marko.load()` to load the Marko template
```javascript
import marko from "marko";
(async () => {
  const template = marko.load("./test.marko");
  const rendered = await template.render();
  console.log(rendered.getOutput());
})();
```

Result
```
WARNING!!
Using `marko/compiler` has been deprecated, please upgrade to the `@marko/compiler` module.
  at node:internal/modules/cjs/loader:1095:14

/marko-5-esm-issue/components/foo.marko:1
div -- foo
       ^^^

SyntaxError: Unexpected identifier
    at Object.compileFunction (node:vm:352:18)
    at wrapSafe (node:internal/modules/cjs/loader:1025:15)
    at Module._compile (node:internal/modules/cjs/loader:1059:27)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1124:10)
    at Module.load (node:internal/modules/cjs/loader:975:32)
    at Function.Module._load (node:internal/modules/cjs/loader:816:12)
    at Module.require (node:internal/modules/cjs/loader:999:19)
    at require (node:internal/modules/cjs/helpers:93:18)
    at Object.<anonymous> (/marko-5-esm-issue/test.marko:9:36)
    at Module._compile (node:internal/modules/cjs/loader:1095:14)
```

However, if you `marko.load` the component _before_ loading the template, it works.
```javascript
import marko from "marko";
(async () => {
  marko.load("./components/foo.marko"); // now it works
  const template = marko.load("./test.marko");
  const rendered = await template.render();
  console.log(rendered.getOutput());
})();
```

Successful/expected output (ignore the WARNING!! for now).
```html
WARNING!!
Using `marko/compiler` has been deprecated, please upgrade to the `@marko/compiler` module.
  at node:internal/modules/cjs/loader:1095:14

<h1>Demonstrating Marko 5 ESM issue</h1><div>foo</div>
```
