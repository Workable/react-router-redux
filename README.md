# react-router-redux

Workable fork to make it work with IE8.

### Problems:
1. It does not use loose mode
2. It does not include the ES3 plugins and thus creates `{default:...}` instead of `{'default':...}`
3. It uses `Object.defineProperty` for multiple exports

### Fixes:
1. "es2015-loose" preset
2. "transform-es3-member-expression-literals" and "transform-es3-property-literals" plugins
3. The `ES2015 modules to CommonJS` transform is buggy and ignores the loose option and always creates exports by using Object.definePropertry

### Final solution:
Use Babel 5 for compilation

### Notes
Since this repo is going to be required as a github dependency, we include the **lib** folder with the compiled assets as well.

## Update notes
1. make changes to code
2. `$ npm run build`
3. commit and push compiled assets
