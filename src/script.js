var parser = require("../../parser/raml-js-parser-2/dist/index");
var path = require("path");

var parserDir = path.resolve(__dirname,"../../parser/raml-js-parser-2");

var testRelPaths = [
  "./src/raml1/test/data/parser/jsonscheme/test13/api.raml",
  "./TCK/raml-0.8/InvalidIncludeTags/test001/api.raml",
  "./TCK/raml-0.8/InvalidIncludeTags/test002/api.raml",
  "./TCK/raml-1.0/Examples/test059/api.raml",
  "./TCK/raml-1.0/InvalidIncludeTags/test001/api.raml",
  "./TCK/raml-1.0/InvalidIncludeTags/test002/api.raml"
];

var inputPaths = testRelPaths.map(function(x){return path.resolve(parserDir,x)});

for(var inputPath of inputPaths){
	
	console.log("Testing " + inputPath);
	var api = parser.loadApiSync(inputPath);
	var expanded = api.expand();
	var json = expanded.toJSON({ rootNodeDetails: true });
	
	console.log(JSON.stringify(json,null,2));
}