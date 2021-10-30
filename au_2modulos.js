const fs = require('fs'); // file sistem


fs.readFile('./au.txt', 'utf8', (err, data ) => {
    if (err) {
        console.log(err);

    }
    console.log(data);

})
