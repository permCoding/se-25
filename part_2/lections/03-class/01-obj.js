const log = console.log;

/** объявим объект без класса и динамически добавим свойства */
const ex01 = () => {
    let obj = {}
    log(obj)
    
    obj.x = 12
    obj.y = 10

    log(obj)
    console.table(obj)
    // delete obj.x
    // delete obj["x"]
    let key_del = "x"
    delete obj[key_del]
    log(obj)
}

/** добавим метод */
const ex02 = () => {
    let obj = { "x": 12, "y": 10 }
    log(obj)

    obj.get_divmod = function () {
        let a = this.x, b = this.y
        return { 'div': int_div(a,b), 'mod': a%b }
    }
    log(obj)
    
    let result = obj.get_divmod(13, 4)
    log(result)
    
    let { div, mod } = result
    log(`div = ${div}, mod = ${mod}`)

    log(Object.keys(obj))
    log(Object.values(obj))
    log(Object.entries(obj))
    log(Object.entries(obj.get_divmod))
    Object.entries(obj).forEach(([key, value]) => {
        if (typeof value === 'function') {
            log(`${key}:`, value.toString());
        }
    });
}

const int_div = (a, b) => Math.floor(a/b)

console.clear()
ex01(); log()
ex02()
