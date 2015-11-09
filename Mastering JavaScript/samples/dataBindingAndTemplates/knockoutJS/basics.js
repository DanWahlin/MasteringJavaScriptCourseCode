var helloWorldViewModel = {
    name: ko.observable("Seth"),
    city: ko.observable("Chandler")
};
ko.applyBindings(helloWorldViewModel);