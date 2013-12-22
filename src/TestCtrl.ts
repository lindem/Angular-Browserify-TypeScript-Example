/*
    Of course, in this (very basic) example, I mainly focus on Browserify.
    There's not much to do here, typescript-wise: controller functions return
    nothing, DOM-manipulating functions usually neither.
 */

function TestCtrl($scope:any, TestItems:string[]):void {
    function addItem():void {
        var text = $scope.edit;
        if (!text) {
            console.log("not pushing empty text");
        } else {
            console.log("pushing " + text +  " to items.");
            TestItems.push($scope.edit);
        }
        $scope.edit = "";
    }
    /* you can define a service later. */
    $scope.items = TestItems;
    $scope.addItem = addItem;
}

export = TestCtrl;