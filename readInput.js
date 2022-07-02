// process.stdin.resume();
// process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

// process.stdin.on("end", function () {
//    main(stdin_input);
// });
process.on('SIGINT', function(){
    // process.stdout.write('\n end \n');
    main(stdin_input);
    process.exit();
});

function main(input) {
    // console.log(input)
    process.stdout.write(input + ".\n");       // Writing output to STDOUT
}