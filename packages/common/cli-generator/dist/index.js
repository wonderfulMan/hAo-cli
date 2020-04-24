"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-02-01 14:58:57
 * @LastEditTime : 2020-04-24 14:45:27
 */
/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-02-01 14:58:57
 * @LastEditTime : 2020-03-27 14:02:40
 */
var events_1 = require("events");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var cli_babel_1 = require("@lartplus/cli-babel");
var cli_shared_utils_1 = require("@lartplus/cli-shared-utils");
var resolvedPackage_1 = require("./lib/resolvedPackage");
var utils_1 = require("./utils");
var FILE_TPM_PATH = path_1["default"].resolve(__dirname, '../template');
var catchErrorAndExit = function (err) {
    cli_shared_utils_1.notice.error([err]);
    process.exit(0);
};
var Generator = /** @class */ (function (_super) {
    __extends(Generator, _super);
    function Generator(targetDir, projectName, answers) {
        var _this = _super.call(this) || this;
        _this.targetDir = targetDir;
        _this.projectName = projectName;
        _this.answers = answers;
        _this.babelConfig = cli_babel_1.getBabelConfig();
        return _this;
    }
    /**
     * 创建文件
     */
    Generator.prototype.create = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.innerCreate()["catch"](catchErrorAndExit)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Generator.prototype.innerCreate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.genProjectName()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.genPkgFile()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.resolvePkgDependencies()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.generatorProjectConfigFile()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.generatorBabelConfigFile()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.genProjectTypescriptConfig()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.genProjectSubject()];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Generator.prototype.genProjectName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var has;
            return __generator(this, function (_a) {
                has = fs_1["default"].existsSync(this.targetDir);
                if (!has) {
                    fs_1["default"].mkdirSync(this.targetDir);
                }
                else {
                    Promise.reject('请确认目录是否已经存在！');
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * @description 生成package.json依赖
     * @param targetDir 当前cli生成文件夏商文路径
     * @param answers cli选项
     */
    Generator.prototype.genPkgFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var templatePath, targetPath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.emit('gen_package_start');
                        templatePath = FILE_TPM_PATH + '/package.tpl';
                        targetPath = this.targetDir + "/package.json";
                        return [4 /*yield*/, cli_shared_utils_1.compileTemplate(templatePath, resolvedPackage_1.resolvedPackage(this.answers, this.projectName), targetPath, true)];
                    case 1:
                        _a.sent();
                        this.emit('gen_package_end');
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @description 下载依赖
     */
    Generator.prototype.resolvePkgDependencies = function () {
        return __awaiter(this, void 0, void 0, function () {
            var child;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        child = cli_shared_utils_1.execa(this.answers.packageManger, ['install'], {
                            cwd: this.targetDir,
                            stdio: 'inherit'
                        });
                        this.emit('resolve_dependencies_start');
                        return [4 /*yield*/, child.then(function () { return _this.emit('resolve_dependencies_end'); })["catch"](function (error) { return Promise.reject(error); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @description 生成配置文件到目标项目根目录
     */
    Generator.prototype.generatorProjectConfigFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var templatePath, templateData, targetPath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.emit('gen_configFile_start');
                        templatePath = FILE_TPM_PATH + '/lartplus.config.tpl';
                        templateData = {
                            framework: this.answers.framework,
                            typescript: this.answers.feature.some(function (it) { return it === 'typescript'; })
                        };
                        targetPath = this.targetDir + "/lartplus.config.js";
                        return [4 /*yield*/, cli_shared_utils_1.compileTemplate(templatePath, templateData, targetPath, false)];
                    case 1:
                        _a.sent();
                        this.emit('gen_configFile_end');
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @description 调用框架相关以及基础包生成babel配置
     */
    Generator.prototype.generatorBabelConfigFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modulePath, frameworkBabelModule, modulePath_1, typescriptBabelModule, _a, sourceType, presets, plugins, templatePath, targetPath, templateData;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.emit('gen_babel_start');
                        modulePath = this.targetDir + "/node_modules/@lartplus/cli-babel-" + this.answers.framework;
                        frameworkBabelModule = require(modulePath).install;
                        this.babelConfig = frameworkBabelModule(this.babelConfig);
                        if (cli_shared_utils_1.hasTypescript(this.answers)) {
                            modulePath_1 = this.targetDir + "/node_modules/@lartplus/cli-babel-typescript";
                            typescriptBabelModule = require(modulePath_1).install;
                            this.babelConfig = typescriptBabelModule(this.babelConfig);
                        }
                        _a = this.babelConfig, sourceType = _a.sourceType, presets = _a.presets, plugins = _a.plugins;
                        templatePath = path_1["default"].resolve(__dirname, '../template/babel.config.tpl');
                        targetPath = this.targetDir + "/babel.config.js";
                        templateData = {
                            sourceType: sourceType,
                            presets: JSON.stringify(presets),
                            plugins: JSON.stringify(plugins)
                        };
                        return [4 /*yield*/, cli_shared_utils_1.compileTemplate(templatePath, templateData, targetPath, false)];
                    case 1:
                        _b.sent();
                        this.emit('gen_babel_end');
                        return [2 /*return*/];
                }
            });
        });
    };
    Generator.prototype.genProjectSubject = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modulePath, ServiceClass, serviceClass;
            return __generator(this, function (_a) {
                this.emit('gen_dir_start');
                modulePath = this.targetDir + "/node_modules/@lartplus/cli-generator-" + utils_1.getFrameworkName(this.answers);
                ServiceClass = require(modulePath)["default"];
                serviceClass = new ServiceClass(this.answers);
                serviceClass.insertTemplateToTarget(this.targetDir);
                this.emit('gen_dir_end');
                return [2 /*return*/];
            });
        });
    };
    Generator.prototype.genProjectTypescriptConfig = function () {
        return __awaiter(this, void 0, void 0, function () {
            var templatePath, include, targetPath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.answers.feature.includes('typescript')) return [3 /*break*/, 2];
                        this.emit('gen_typescriptConfig_start');
                        templatePath = path_1["default"].resolve(__dirname, '../template/tsconfig.json.tpl');
                        include = ['src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'];
                        if (this.answers.framework === 'vue') {
                            include.push('src/**/*.vue');
                        }
                        targetPath = this.targetDir + "/tsconfig.json";
                        return [4 /*yield*/, cli_shared_utils_1.compileTemplate(templatePath, { include: JSON.stringify(include) }, targetPath, false)];
                    case 1:
                        _a.sent();
                        this.emit('gen_typescriptConfig_end');
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    return Generator;
}(events_1.EventEmitter));
exports["default"] = Generator;