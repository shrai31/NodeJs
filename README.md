# NodeJs
<!-- code reference https://github.com/john-smilga/node-express-course/tree/main/01-node-tutorial -->

<!-- Node learning from sapientUdemy -->

<!-- 12th Video -->
GLOBAL Window is not present in node because there is no browser there is global variable

Some value refers to like

__dirname      -- path to current directory
__filename     -- file name
require        -- function to use modules(CommonJS)
module         -- info about current module(file)
process        -- info about env where the program is being executed

<!-- 14th Video modules -->

CommonJS, every file is module( by default)
Modules --> Encapsulated code (only share minimum)

module.exports = {object or function} receive like import

second way is---> module.exports.items = ['item1', 'item2']
but for object const person={ name:'himanshu'}
               module.exports.singlePerson = person


<!-- 17th Video modules -->
Built-in-module
   1) OS
   2) Path
   3) FS
   4) HTTP