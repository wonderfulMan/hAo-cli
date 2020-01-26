"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-01-26 14:06:30
 * @LastEditTime : 2020-01-26 14:09:16
 */
var typedi_1 = require("typedi");
var PackageManger = /** @class */ (function () {
    function PackageManger() {
    }
    PackageManger.prototype.config = function () {
        return {
            name: 'packageManger',
            type: 'list',
            message: '选择依赖管理',
            choices: [
                {
                    name: 'npm',
                    value: 'npm'
                },
                {
                    name: 'yarn',
                    value: 'yarn'
                }
            ]
        };
    };
    PackageManger = __decorate([
        typedi_1.Service()
    ], PackageManger);
    return PackageManger;
}());
exports["default"] = PackageManger;
