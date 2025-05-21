const addClass = (obj, keyName) => {
    let arr = obj.className.split(' ');
    if (arr.indexOf(keyName) < 0) {
        arr.push(keyName);
        obj.className = arr.join(' ');
    }
}

var obj = {
    className: 'open menu'
}

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');

console.log(obj.className);


/*
    В объекте есть свойство className, 
    которое содержит список «классов» – слов, разделенных пробелом:
    
    var obj = {
        className: 'open menu'
    }
    
    Создайте функцию addClass(obj, 'cls'), 
    которая добавляет в список класс cls, 
    но только если его там еще нет:
    
    addClass(obj, 'new'); // obj.className='open menu new'
    addClass(obj, 'open'); // без изменений (класс уже существует)
    addClass(obj, 'me'); // obj.className='open menu new me'
    console.log(obj.className); // "open menu new me"

    Ваша функция не должна добавлять лишних пробелов.
*/