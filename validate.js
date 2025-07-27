// import fs = require('fs');
// import schema from 'resume-schema';
// const resumeObject = JSON.parse(fs.readFileSync('./sample_CV.json', 'utf8'));
// resumeSchema.validate(resumeObject);

const fs = require('fs');
const resumeSchema = require('./validator'); // use your local validator.js
const resumeObject = JSON.parse(fs.readFileSync('./CV.json', 'utf8'));

resumeSchema.validate(resumeObject, (err, valid) => {
  if (err) {
    console.error("The resume was invalid:", err);
  } else {
    console.log("Resume validated successfully:", valid);
  }
});