console.log(process.argv[2]);
console.log(process.argv[3]);

console.clear();

process.argv.forEach(v => {
    console.log(v);
})

function foo() {
    bar();
}
function bar() {
    //打印的调用栈
    console.trace()
}
foo()
