var parser = require("../parser/raml-js-parser-2/dist/index");
var path = require("path");

var parserDir = path.resolve(__dirname,"../parser/raml-js-parser-2");
var testRelPath = "./src/raml1/test/data/TCK/raml-1.0/JSONErrorsPositioning/ReferenceTests/test002/api.raml";
var inputPath = path.resolve(parserDir,testRelPath);

var api = parser.loadApiSync(inputPath);
var expanded = api.expand();
var json = expanded.toJSON({ rootNodeDetails: true });

console.log(JSON.stringify(json,null,2));