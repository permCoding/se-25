(function () {
    console.log("label-01");

    setTimeout(function cb1() {
        console.log("callback-01");
    });

    console.log("label-02");

    setTimeout(function cb2() {
        console.log("callback-02");
    }, 0);

    console.log("label-03");
})();

// label-01
// label-02
// label-03
// callback-01
// callback-02