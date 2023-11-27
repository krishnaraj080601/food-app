#parcel
Dev Build
Local Server
HMR = Hot Module Replacement
File Watching Algorithm - written in C++
Caching - Faster Builds
Image Optimization
Minification
Bundling
Compress
Consistent Hashing
Code Splitting
Differential Bundling - support older browsers
Diagnostic
Error Handling
HTTPs
Tree Shaking - remove unused code
Different dev and prod bundles

#JSX:
jsx is not html in js
html like syntax
js transpiled before reach into the js engine trnaspile is done by parcel -babel
jsx -babel transpiles into react.createlement(object) -html element(render)
babel transform the code

#react components
everything in a react is a components
class base components-old
functional base components-new
(normal javascript function) is a functional returning the react element(some piece of jsx)
when we use dynamically send the data use it a props
conflict driven ui
controlling ur ui using data conflict from the backend
ui and data layer to form the app
not using keys are unacceptable
dont use index
 unique id as key


 Two types of Export/Import

Default Export/Import
export default Component; import Component from "path";

Named Export/Import
export const Component; import {Component} from "path";