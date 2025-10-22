const arr = [
    {
        "id": 1001,
        'name': "qet"
    },
    {
        "id": 1002,
        'name': "qwerty"
    },
    {
        "id": 1003,
        'name': "asd"
    },
    {
        "id": 1004,
        'name': "drell"
    }
]

let res = arr.reduce((acc, item, ind) => {
        console.log(ind, item);
        return item.name.length > acc? item.name.length: acc
    });
console.log(res);

let res_ind = arr.reduce((acc, item, ind) => {
        console.log(ind, item, arr[acc]);
        return item.name.length > arr[acc].name.length? ind: acc
    }, 0);
console.log(res_ind);