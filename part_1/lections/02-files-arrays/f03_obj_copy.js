const obj = {
    id: 0,
    rate: 1000,
    coord: {
        x: 0,
        y: 0
    },
    func: () => True
}

// так только поверхностное копирование
const copy1 = {...obj}
const copy2 = Object.assign({}, obj)
const copy3 = JSON.parse(JSON.stringify(obj)) // теряются методы

copy1.id = 1
copy1.coord.x = 911

copy2.id = 2
copy2.coord.x = 404

copy3.id = 3
copy3.coord.x = 333

console.log(obj)
console.log(copy1)
console.log(copy2)
console.log(copy3)

// для глубокого клонирования - либо написать свою рекурсию
// либо подключить lodash / deep copy

const copy4 = obj;
obj.id = 4; obj['rate'] = 2002; obj.coord = { x: 100, y: 100 };
console.log(copy4);
