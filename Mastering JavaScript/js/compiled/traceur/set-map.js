"use strict";
var Departments = function Departments() {
  this._depts = new Set();
};
($traceurRuntime.createClass)(Departments, {
  addDepartment: function(dept) {
    if (!this._depts.has(dept)) {
      this._depts.add(dept);
    } else {
      console.log('Duplicate department was blocked: ' + dept);
    }
  },
  removeDepartment: function(dept) {
    this._depts.delete(dept);
  },
  clearDepartments: function() {
    this._depts.clear();
  },
  getAll: function() {
    return this._depts;
  }
}, {});
var depts = new Departments();
depts.addDepartment('Finance');
depts.addDepartment('HR');
depts.addDepartment('Finance');
var all = depts.getAll();
all.forEach(function(dept) {
  console.log('Found department using forEach ' + dept);
});
console.log('\n');
all.forEach((function(dept) {
  return console.log('Found department using forEach ' + 'with arrow function: ' + dept);
}));
console.log('\n');
for (var $__1 = all[Symbol.iterator](),
    $__2; !($__2 = $__1.next()).done; ) {
  try {
    throw undefined;
  } catch (dept) {
    {
      dept = $__2.value;
      {
        console.log('Found department using for of loop: ' + dept);
      }
    }
  }
}
