"use strict";
var $__8,
    $__9,
    $__12,
    $__13,
    $__15,
    $__16;
var values = [9.99, .50];
var oldTotal = values[0],
    oldTax = values[1];
var $__7 = [9.99, .50],
    total = ($__8 = $__7[$traceurRuntime.toProperty(Symbol.iterator)](), ($__9 = $__8.next()).done ? void 0 : $__9.value),
    tax = ($__9 = $__8.next()).done ? void 0 : $__9.value;
var $__10 = {
  total: 9.99,
  tax: .50
},
    total2 = $__10.total2,
    tax2 = $__10.tax2;
console.log('Destructuring an array.');
console.log('Total: ' + total + ' Tax: ' + tax);
console.log('\nDestructuring an object literal.');
console.log('Total2: ' + total2 + ' Tax2: ' + tax2);
var colors = ['red', 'yellow', 'green'],
    redOld = colors[0],
    yellowOld = colors[1],
    greenOld = colors[2];
var $__11 = ['red', 'yellow', 'green'],
    red = ($__12 = $__11[$traceurRuntime.toProperty(Symbol.iterator)](), ($__13 = $__12.next()).done ? void 0 : $__13.value),
    yellow = ($__13 = $__12.next()).done ? void 0 : $__13.value,
    green = ($__13 = $__12.next()).done ? void 0 : $__13.value;
console.log(("Destructuring colors: " + red + " " + yellow + " " + green));
var $__14 = ['red', 'yellow', 'green'],
    red2 = ($__15 = $__14[$traceurRuntime.toProperty(Symbol.iterator)](), ($__16 = $__15.next()).done ? void 0 : $__16.value),
    green2 = ($__15.next(), ($__16 = $__15.next()).done ? void 0 : $__16.value);
console.log(("Destructuring with an ignore: " + red2 + " " + green2));
console.log('\n');
var pets = [{
  name: "Fido",
  type: 'Dog',
  treats: {
    treat1: "Chewie",
    treat2: "Chicken"
  },
  age: 10
}, {
  name: "Maestro",
  type: 'Dog',
  treats: {
    treat1: "Chew Stick",
    treat2: "Turkey Chew"
  },
  age: 5
}];
var $__3 = true;
var $__4 = false;
var $__5 = undefined;
try {
  for (var $__1 = void 0,
      $__0 = (pets)[$traceurRuntime.toProperty(Symbol.iterator)](); !($__3 = ($__1 = $__0.next()).done); $__3 = true) {
    var $__17 = $__1.value,
        n = $__17.name,
        t = $__17.type,
        $__18 = $__17.treats,
        t1 = $__18.treat1,
        t2 = $__18.treat2;
    {
      console.log((n + " is a " + t + " who likes " + t1 + " and " + t2 + " treats"));
    }
  }
} catch ($__6) {
  $__4 = true;
  $__5 = $__6;
} finally {
  try {
    if (!$__3 && $__0.return != null) {
      $__0.return();
    }
  } finally {
    if ($__4) {
      throw $__5;
    }
  }
}
