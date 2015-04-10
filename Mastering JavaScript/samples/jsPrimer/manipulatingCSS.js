var container = document.getElementById('container'),
    container2 = document.getElementById('container2');

container.addEventListener('click', function () {
    this.style.backgroundColor = 'navy';
    this.style.color = 'white';
});

container2.addEventListener('click', function (e) {
    if (this.className.indexOf('block') > -1) {
        this.className = this.className.replace(/(?:^|\s)block(?!\S)/g, '');
        this.innerHTML = "Click Me to Change CSS Class";
    }
    else {
        //Preserve any existing classes
        this.className += ' block';
        this.innerHTML = "Click Me Again to Change Back!";
    }
});
