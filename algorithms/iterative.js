/*
For an odd number of disks:

Make the legal move between pegs A and C (in either direction),
Make the legal move between pegs A and B (in either direction),
Make the legal move between pegs B and C (in either direction),
Repeat until complete.

For an even number of disks:

Make the legal move between pegs A and B (in either direction),
Make the legal move between pegs A and C (in either direction),
Make the legal move between pegs B and C (in either direction),
Repeat until complete.

After each move check if the C peg is complete. In each case, a total of 2n − 1 moves are made. 
*/

function iterative(game, res){
    let steps=0;
    const startTime=Date.now();
    const disks=game.a.length
    const isOdd=!!(game.a.length%2)

    const makeLegalMove = (x, y) => {
        const posX = game[x][0]||100;
        const posY = game[y][0]||100;
        if ( posX<posY){
            res.write(x+y+"|");
            game[y].unshift(game[x].shift());  
        } else {
            res.write(y+x+"|");
            game[x].unshift(game[y].shift());
        }
        steps++;
    }

    if (isOdd) {
        do {
            makeLegalMove("a", "c")
            if(game.c.length==disks) break;
            makeLegalMove("a", "b")
            if(game.c.length==disks) break;
            makeLegalMove("b", "c")
        } while(game.c.length<disks);
    } else {
        do {
            makeLegalMove("a", "b")
            if(game.c.length==disks) break;
            makeLegalMove("a", "c")
            if(game.c.length==disks) break;
            makeLegalMove("b", "c")
        } while(game.c.length<disks);
    }
    const time = Date.now() - startTime;
    return {steps, time};
}


module.exports = { iterative }