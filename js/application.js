document.addEventListener('DOMContentLoaded', function () {
    const fruits = ['Banana', 'Apple', 'Orange', 'Lemon'];
    let orderedList = document.getElementById('fruits-list');

    fruits.forEach(function (element) {
        let fruit;
        let li = document.createElement('li');

        element === 'Apple' ? fruit = ('Only ' + element) : fruit = element;
        li.innerHTML = fruit;
        orderedList.append(li);
    });
});
