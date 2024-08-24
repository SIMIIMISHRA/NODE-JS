const   fs = require('fs');

fs.writeFile("hey.txt", "hey hello kaise ho", function (err, data) {
    if (err) console.error(err);
        else console.error("done");
    })

    //update
    //read
    //write
    //delete
    //rename
    //create