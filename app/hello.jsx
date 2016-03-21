
function innerHello() {
    var element = document.createElement('h1');

    element.innerHTML = 'Hello world';

    return element;
};

export { innerHello as hello };
