#!/usr/bin/env node
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-03-17 15:05:30
 * @LastEditTime : 2020-03-20 14:55:16
 */
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
var readConfigFile_1 = require("./lib/readConfigFile");
var createComponents_1 = require("./lib/createComponents");
function initSevice() {
    return __awaiter(this, void 0, void 0, function () {
        var program, cliVersion, context, contextJson;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    program = new cli_shared_utils_1.commander.Command();
                    cliVersion = cli_shared_utils_1.getPackageVersion('cli-service', __dirname + '/../');
                    return [4 /*yield*/, readConfigFile_1.readConfigFile()];
                case 1:
                    context = _a.sent();
                    process.env.LARTPLUS_CONTEXT = JSON.stringify(__assign(__assign({}, context), { cwdPath: process.cwd(), workDir: 'src', typescript: true }));
                    contextJson = JSON.parse(process.env.LARTPLUS_CONTEXT);
                    program.version(cliVersion)
                        .usage('<command> 选项');
                    program
                        .command('new <option> [file]')
                        .description('创建例如 components components/xxxx')
                        .action(function (action, filePath) {
                        switch (action) {
                            case 'components':
                                createComponents_1.createComponents(contextJson, action, filePath);
                                break;
                            case 'page':
                                createComponents_1.createComponents(contextJson, action, filePath);
                                break;
                            default:
                                cli_shared_utils_1.notice.error(['暂不支持components/page以外的文件创建']);
                                break;
                        }
                        // create(name)
                    });
                    program.parse(process.argv);
                    return [2 /*return*/];
            }
        });
    });
}
initSevice();
