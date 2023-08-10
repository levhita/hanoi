/* Notes:
 * Reach 28 in 33033 milliseconds ~500Mb
 * Breaks at 29 with a CORS error, probably has to do with a streaming 
 * Manually streaming the data is a win,
 * Shorting the data to "ab" strings is very efficient
 * Data consuption at 28 disks is ~500Mb at 50 would be 9 Gb, is this possible?
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
    let steps=0;
    const startTime=Date.now();
    
    let chunk=""
    const writeChunk = () => {
        res.write(chunk);
        chunk="";
    }
    
    solver = (a, from, aux, to) => {
        if(a==1){
            chunk+=from+to
            // This algorithm doesn need the full simulation
            //game[to].unshift(game[from].shift());  
            steps++;

            // We don't check on every call, only on a==1's
            if(chunk.length>1024*1024){
                writeChunk();
            }
        } else {
            solver(a-1, from, to, aux);
            chunk+=from+to
            // This algorithm doesn need the full simulation
            //game[to].unshift(game[from].shift());  
            steps++;
            solver(a-1, aux, from, to);
        }
    }
    solver(game.a.length, "a", "b", "c");
    writeChunk();
    const time = Date.now() - startTime;
    return {steps, time};
}

module.exports = { recursive }