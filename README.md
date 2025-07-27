# JSON Academic CV Schema

### Introduction 

JSON Academic CV Schema is a JSON schema (think template) that academics can use to contain all the information needed to generate their CV. This is a fork of the [jsonresume-schema](https://github.com/jsonresume/resume-schema) repository which was modified for academic CVs

You can use the Academic CV schema for creating your own academic CV json file. You can then reference this json file whenever you create your CVs, websites, or online profiles making it a good place to store and organize all your academic achievements. 

The project also includes validators which can be used to ensure all your data is correctly specified and no errors have been made.

The schema is contained in `schema.json`. You can copy and paste the code into [a json schema viewer](https://navneethg.github.io/jsonschemaviewer/) to visualize the schema.

### Getting started

I suggest forking this project then creating your own CV `json` file by copying and editing `sample.CV.json`. As you create your `json` CV, ensure that your entries are valid using the validator. 

#### Using the validator

To validate your CV, ensure it is named `CV.json` and saved in the same folder as `validate.js`. Ensure you have `npm` installed then download the `schema` package by entering the following into your terminal
```
npm install --save @jsonresume/schema
```

Next run the `validate.js` script 

```
node validate.js
```
which will return either a success or failure message.
### Contribute

Feel free to submit and issue or fork this project to do what you like. If you have any feedback about the project I'm happy to talk.
