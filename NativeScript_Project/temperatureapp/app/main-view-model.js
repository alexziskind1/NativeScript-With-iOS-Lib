var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var observable = require("data/observable");
var view = require("ui/core/view");
var textFieldModule = require("ui/text-field");


var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        _super.call(this);
        this.counter = 42;
        this.set("message", this.counter + " taps left");  
    }
    HelloWorldModel.prototype.tapFtoC = function () {
        var tempVal = this.getTempFieldValue();
        var newTempVal = TemperatureConverter.fahrenheitToCelsius(tempVal);
        this.set("result", newTempVal);
    };
    HelloWorldModel.prototype.tapCtoF = function () {
        var tempVal = this.getTempFieldValue();
        var newTempVal = TemperatureConverter.celsiusToFahrenheit(tempVal);
        this.set("result", newTempVal);
    };
    HelloWorldModel.prototype.setup = function(page) {
        this.thePage = page;
    };
    HelloWorldModel.prototype.getTempFieldValue = function() {
        var tempField = view.getViewById(this.thePage, "tempInput"); //have to get field manually
        var tempVal = tempField.ios.text;
        return tempVal;
    };
    
    return HelloWorldModel;
})(observable.Observable);


exports.HelloWorldModel = HelloWorldModel;
exports.mainViewModel = new HelloWorldModel();
