
import {b,c} from './module1.mjs'  // original name is must for the named export
import abc from './module1.mjs'   // any name can be assigned to the default export
console.log(b)
console.log(c)
console.log(abc)