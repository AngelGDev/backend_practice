const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let basicOpenings = {
    'terran': {
        'goal': '2 base, 2-1-1, 3 tank defense',
        'build': 
        [
        "14 depo start wall",
        '16 rax + gas',
        '@rax orbital command',
        '20 cc',
        '21 depo finish wall',
        '21 factory',
        '@factory techlab + rax',
        '@rax techlab + starport',
        '@starport reactor + 3rd cc'
        ],
    },
    'zerg': {
        "goal": "2 base, 6-8 roach defense",
    "build": 
        [
        "13 overlord",
        "16 hatch",
        "18 pool",
        "20 gas",
        "19 overlord",
        "22 queen x 2",
        "@100gas lair",
        "@queens creep queen(3rd)",
        "@300min roach warren + evo x 2",
        "3rd hatch"
        ],
    },
    'protoss':{
        'goal': '2 base, 2 gate, 1 robo',
        'build': 'pending',
    },
    'invalid race':{
        'build': 'invalid race'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/basic_openings/:race', (request, response) => {
    const inputRace = request.params.race.toLowerCase()
    if(basicOpenings[inputRace]){
        response.json(basicOpenings[inputRace])
    }else{
        response.json(basicOpenings['invalid race'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})