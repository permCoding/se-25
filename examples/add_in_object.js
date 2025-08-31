const arr = [
    {
        id: 1001,
        title: "obj1"
    },
    {
        id: 1002,
        title: "obj2"
    },
    {
        id: 1003,
        title: "obj3"
    }
]

addFields = {
    "userName": "Name",
    "userStatus": "Admin"
}

const indexAdd = arr.findIndex(u => u.id === 1003);
if (indexAdd >= 0) {
    arr[indexAdd] = { ...arr[indexAdd], ...addFields}
}

console.log(arr);
