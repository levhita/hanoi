/* Breaks at 24 because of the heap
 * Notes:
 * Manually streaming the data is a win,
 * Shorting the data to "ab|" strings is very efficient
 * Data consuption at 24 disks is just 25.17Mb at 50 would be 13 Gb, is this possible?
 * Shoud be possible to pack each movement in 2 bits (00)spacer,(01)a,(10)b,(11)c. against 24 bits of ac| solution
 * It would still make 50 disk in 1Gb

Some patterns seem to arrise between odd and even numbers
1 ac|
2 ab|ac|bc|
3 ac|ab|cb|ac|ba|bc|ac|
4 ab|ac|bc|ab|ca|cb|ab|ac|bc|ba|ca|bc|ab|ac|bc|
5 ac|ab|cb|ac|ba|bc|ac|ab|cb|ca|ba|cb|ac|ab|cb|ac|ba|bc|ac|ba|cb|ca|ba|bc|ac|ab|cb|ac|ba|bc|ac|
6 ab|ac|bc|ab|ca|cb|ab|ac|bc|ba|ca|bc|ab|ac|bc|ab|ca|cb|ab|ca|bc|ba|ca|cb|ab|ac|bc|ab|ca|cb|ab|ac|bc|ba|ca|bc|ab|ac|bc|ba|ca|cb|ab|ca|bc|ba|ca|bc|ab|ac|bc|ab|ca|cb|ab|ac|bc|ba|ca|bc|ab|ac|bc|

*/
function recursive(game, res){
    steps=0;
    startTime=Date.now();
    solver = (a, from, aux, to) => {
        if(a==1){
            res.write(from+to+"|");
            steps++;
        } else {
            solver(a-1, from, to, aux);
            res.write(from+to+"|");
            steps++;
            solver(a-1, aux, from, to);
        }
    }
    solver(game.a.length, "a", "b", "c");
    const time = Date.now() - startTime;
    return {steps, time};
}


module.exports = { recursive }