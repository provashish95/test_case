const newman = require ('newman'); 
require('dotenv').config();

newman.run({
    collection: `https://api.postman.com/collections/10144528-94ba2c58-49e9-46f8-b038-c705b21e3a33?access_key=${process.env.access_key}`,

    //collection:require(`./collection/collection.json`), 
    reporters: 'htmlextra', 
    iterationCount: 1, 
    //environment: `./env.json`, 
    reporter:{
        htmlextra:{
            export:`./Reports/report.html`, //if not specified, the file will be written to `newman/` in the current working directory.
        }
            
        
    }, function (err){
        if (err) {throw err;}
        console.log('Collection run is completed'); 
    }

});