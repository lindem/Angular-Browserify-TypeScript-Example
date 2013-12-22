/**
 * Created by lindem on 12/22/13.
 */

/*
    this file wires up the bits and pieces from the other files into the
    intened application. You *should* include the d.ts here, which I don't
    because this example focuses on how to use browserify to structure your
    code.

    Instead, I will just this once declare angular as any, so the runtime
    inspection won't bug me forever about angular not being defined.
 */

declare var angular:any;

import TestCtrl = require("./TestCtrl");
import TestItemsService = require("./TestItemsService");

var TestApp = angular.module("TestApp", []);

TestApp.controller("TestCtrl", ["$scope", "TestItems", TestCtrl]);
TestApp.factory("TestItems", TestItemsService);


