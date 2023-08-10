/* Notes:
 * Reach 28 in 59142 milliseconds ~500Mb
 * Keeps memory usage flat
*/

function iterative(game, res){
    let steps=0;
    const startTime=Date.now();
    const disks=game.a.length
    const isOdd=!!(game.a.length%2)
    
    let chunk="";
    const writeChunk = () => {
        res.write(chunk);
        chunk="";
    }
    
    const makeLegalMove = (x, y) => {
        steps++;
        const posX = game[x][0]||100;
        const posY = game[y][0]||100;
        if ( posX<posY){
            chunk+=x+y
            game[y].unshift(game[x].shift());  
        } else {
            chunk+=y+x
            game[x].unshift(game[y].shift());
        }
        steps++;
    }

    if (isOdd) {
        do {
            makeLegalMove("a", "c");
            if(game.c.length==disks) break;
            makeLegalMove("a", "b");
            if(game.c.length==disks) break;
            makeLegalMove("b", "c");
            
            if(chunk.length>1024*1024){
                writeChunk();
            }
        } while(game.c.length<disks);
    } else {
        do {
            makeLegalMove("a", "b");
            if(game.c.length==disks) break;
            makeLegalMove("a", "c");
            if(game.c.length==disks) break;
            makeLegalMove("b", "c");
            
            if(chunk.length>1024*1024){
                writeChunk();
            }
        } while(game.c.length<disks);
    }
    writeChunk();
    const time = Date.now() - startTime;
    return {steps, time};
}


module.exports = { iterative }