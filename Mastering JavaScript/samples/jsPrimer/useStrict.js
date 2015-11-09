'use strict';

//Fails since it hasn't been defined and could be global
street = '123 Mai St.'; 
console.log('Name value: ' + name);

//Can't use delete
delete name;

//Can't have duplicate properties
var person = {
    name: 'Jim',
    name: 'Michelle' //Can't have a duplicate
};

//Can't use "eval" or "arguments"
var eval = ...;
for ( var eval in ... ) {}
function eval(){}
function test(eval){}
function(eval){}


//Can't use JavaScript "with" statement
function foo() {
  var title = "Not the page title";
  with (document) {
    write(title + "<br />");
    write("contains a with statement");
  }
}

//Removes accidental access to global object by assigning 'this" a value of undefined
function foo() {
    'use strict';
    return this;
}
foo(); //returns undefined

/* Can't use any future reserved keywords
implements
interface
let
package
private
protected
public
static
yield
*/

//Throws an exception when trying to update a non-writable 
//property (rather than silently failing)
function foo() {
    'use strict';
    var obj = Object.defineProperties({}, {
        prop1 : {
            value : 1,
            writable : false
        }
    });

    obj.prop1 = 2; //throw error
}

//Throw an error when trying to add a property to a
//non-extensible object/variable
function foo() {
    'use strict';
    var obj = {prop1 : 1};

    Object.preventExtensions(obj);
    obj.prop2 = 2; //Can't extend so throws error
}

//See the following pages for additional information
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FFunctions_and_function_scope%2FStrict_mode
//http://cjihrig.com/blog/javascripts-strict-mode-and-why-you-should-use-it/


