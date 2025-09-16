const arr1 = [1,2,3,4,5];
const arr2 = Array.of(1,2,3,4,5);

class AddArray extends Array {
    addMethod() {
        this.push(this.length + 1);
    }
}

const arr3 = AddArray.of(1,2,3);
console.log(arr3 instanceof AddArray); // true
arr3.addMethod();
console.log(arr3);
