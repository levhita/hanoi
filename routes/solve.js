

const { recursive } = require('../algorithms/recursive');
// Iterative won, about 40% faster
// const { iterative } = require('../algorithms/iterative');
function solve(req, res) {
    // Both algorithms give optimal solutions, we can skip this
    // const optimal=howManySteps(req.body.a.length)
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Transfer-Encoding': 'chunked'
    })
    res.write('{"solution":"');
    const {steps, time} = recursive(req.body, res)
    res.write('", "steps":'+steps+',"time":'+time+'}')
    res.end();
}

/* function howManySteps(disks){
    if(disks==1){
        return 1;
    }
    return 2*howManySteps(disks-1)+1
} */

module.exports = { solve }
