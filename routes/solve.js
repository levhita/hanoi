
const { recursive } = require('../algorithms/recursive');

function solve(req, res) {
    //console.log(req.body.a.length)
    console.log();
    res.setHeader('Content-Type', 'application/json');
    res.write('{"solution":"');
    const {steps, time} = recursive(req.body, res)
    res.write('", "steps":'+steps+',"optimal":'+howManySteps(req.body.a.length)+',"time":'+time+'}');
    res.end();
}

function howManySteps(disks){
    if(disks==1){
        return 1;
    }
    return 2*howManySteps(disks-1)+1
}

module.exports = { solve }
