"use strict";
var Departments = function Departments() {
  this._depts = new Map();
};
($traceurRuntime.createClass)(Departments, {
  addDepartment: function(key, desc) {
    if (!this._depts.has(key)) {
      this._depts.set(key, desc);
    } else {
      console.log('Duplicate department was blocked: ' + dept);
    }
  },
  getDepartment: function(key) {
    return this._depts.get(key);
  },
  removeDepartment: function(key) {
    this._depts.delete(key);
  },
  clearDepartments: function() {
    this._depts.clear();
  },
  getAll: function() {
    return this._depts;
  }
}, {});
var depts = new Departments();
depts.addDepartment('Finance', 'Process bills');
depts.addDepartment('HR', 'Human Resources and Healthcare');
depts.addDepartment('Finance', 'Process the bills');
var all = depts.getAll();
all.forEach(function(val, key) {
  console.log('Found department using forEach ' + key + ': ' + val);
});
console.log('\n');
all.forEach((function(val, key) {
  return console.log('Found department using forEach ' + 'with arrow function: ' + key + ': ' + val);
}));
console.log('\n');
for (var $__1 = all[Symbol.iterator](),
    $__2; !($__2 = $__1.next()).done; ) {
  try {
    throw undefined;
  } catch (val) {
    try {
      throw undefined;
    } catch (key) {
      try {
        throw undefined;
      } catch ($__3) {
        {
          {
            $__3 = $__2.value;
            key = $__3[0];
            val = $__3[1];
          }
          {
            console.log('Found department using for of loop: ' + key + ': ' + val);
          }
        }
      }
    }
  }
}
