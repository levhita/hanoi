
const { recursive } = require('../algorithms/recursive');
const { iterative } = require('../algorithms/iterative');
function solve(req, res) {
    console.log(req.body.a.length)
    const optimal=howManySteps(req.body.a.length)
    console.log(optimal);
    res.writeHead(200, {
        'Content-Type': 'application/json',
    })
    res.write('{"solution":"');
    const {steps, time} = iterative(req.body, res)
    res.write('", "steps":'+steps+',"optimal":'+optimal+',"time":'+time+'}')
    res.end();
}

function howManySteps(disks){
    if(disks==1){
        return 1;
    }
    return 2*howManySteps(disks-1)+1
}

module.exports = { solve }
