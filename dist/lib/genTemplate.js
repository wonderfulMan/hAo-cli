"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};exports.__esModule=!0;var cli_shared_utils_1=require("@lartplus/cli-shared-utils"),path_1=__importDefault(require("path")),copyTemplate_1=require("@lartplus/cli-shared-utils/dist/lib/copyTemplate"),choiseTemplateType=function(e){var t=cli_shared_utils_1.hasTypescript(e)?"typescript":"javascript";return path_1.default.resolve(__dirname,"../../template/"+t)};exports.genTemplateToTarget=function(e,t){var r=choiseTemplateType(e);copyTemplate_1.copyTemplate(t,r)};