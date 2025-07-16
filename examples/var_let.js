function test_var_let() {
    console.log(var_1);  // undefined
    console.log(var_2);  // Cannot access 'var_2' before initialization
    var var_1 = 123;
    let var_2 = 456;
}

test_var_let();
