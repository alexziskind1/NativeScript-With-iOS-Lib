var vmModule = require("./main-view-model");
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.mainViewModel;
    vmModule.mainViewModel.setup(page);
}
exports.pageLoaded = pageLoaded;
