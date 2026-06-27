const fs = require('fs');
const pdfParse = require('pdf-parse');

let dataBuffer = fs.readFileSync('Vibe2Ship - Problem Statements & Submission Guidelines.pdf');

pdfParse(dataBuffer).then(function(data) {
    fs.writeFileSync('vibe2ship.txt', data.text);
    console.log('Done');
});
