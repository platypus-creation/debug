## Debug

Low impact debug directive to show highlighted json on keyboard shortcut

    SHIFT + D to toggle debug

### Installation

    bower install angular-debug
    
### Usage

  - Include debug.js and json-viewer.css into your app.
  - Add platypus.debug as a module dependency to your app : `angular.module('YOUR_APP', ['platypus.debug'])`
  - Use the directive with you json content
  
`<debug data="MY_JSON"></debug>`
    

