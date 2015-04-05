var observable = require("data/observable");
var view = require("ui/core/view");
var textFieldModule = require("ui/text-field");

var mainViewModel = new observable.Observable();

mainViewModel.set("result", '');
mainViewModel.set("origTemp", "100");
mainViewModel.thePage = null;

mainViewModel.setup = function(page) {
    mainViewModel.thePage = page;
};

mainViewModel.tapFtoC = function () {
    var tempVal = getTempFieldValue();
    var newTempVal = TemperatureConverter.fahrenheitToCelsius(tempVal);
    mainViewModel.set("result", newTempVal);
};

mainViewModel.tapCtoF = function () {
    var tempVal = getTempFieldValue();
    var newTempVal = TemperatureConverter.celsiusToFahrenheit(tempVal);
    mainViewModel.set("result", newTempVal);
};

var getTempFieldValue = function() {
    //var tempVal = mainViewModel.get("origTemp"); //this should work, but doesn't
    var tempField = view.getViewById(mainViewModel.thePage, "tempInput"); //have to get field manually
    var tempVal = tempField.ios.text;
    
    return tempVal;
};


exports.mainViewModel = mainViewModel;