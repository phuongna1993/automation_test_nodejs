exports.config ={

    specs:[
        "TC_001_Login.js"
    ],
    capabilities:[
        {
            browserName: "chrome"
        }
    ],
    runner: 'local',

    // Declare server info
    hostname: 'localhost',
    port: 9515,
    path: '/',

    //Test framwork
    framework: 'mocha',
    mochaOpts:{
        ui: 'bdd'
    }
}