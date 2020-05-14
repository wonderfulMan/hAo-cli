"use strict";var __awaiter=this&&this.__awaiter||function(e,o,l,c){return new(l=l||Promise)(function(r,t){function n(e){try{i(c.next(e))}catch(e){t(e)}}function a(e){try{i(c.throw(e))}catch(e){t(e)}}function i(e){var t;e.done?r(e.value):((t=e.value)instanceof l?t:new l(function(e){e(t)})).then(n,a)}i((c=c.apply(e,o||[])).next())})},__generator=this&&this.__generator||function(r,n){var a,i,o,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(a)throw new TypeError("Generator is already executing.");for(;l;)try{if(a=1,i&&(o=2&t[0]?i.return:t[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,t[1])).done)return o;switch(i=0,o&&(t=[2&t[0],o.value]),t[0]){case 0:case 1:o=t;break;case 4:return l.label++,{value:t[1],done:!1};case 5:l.label++,i=t[1],t=[0];continue;case 7:t=l.ops.pop(),l.trys.pop();continue;default:if(!(o=0<(o=l.trys).length&&o[o.length-1])&&(6===t[0]||2===t[0])){l=0;continue}if(3===t[0]&&(!o||t[1]>o[0]&&t[1]<o[3])){l.label=t[1];break}if(6===t[0]&&l.label<o[1]){l.label=o[1],o=t;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(t);break}o[2]&&l.ops.pop(),l.trys.pop();continue}t=n.call(r,l)}catch(e){t=[6,e],i=0}finally{a=o=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};exports.__esModule=!0;var path_1=__importDefault(require("path")),cli_shared_utils_1=require("@lartplus/cli-shared-utils"),typedi_1=require("typedi"),creator_1=__importDefault(require("./creator"));function creatCommdanerText(e){var t=cli_shared_utils_1.figlet.textSync(e,{font:"Standard"});cli_shared_utils_1.notice.normalLogger.call(Object.create(null),t)}function create(o){return __awaiter(this,void 0,void 0,function(){var t,r,n,a,i;return __generator(this,function(e){switch(e.label){case 0:return creatCommdanerText("lartplus/cli"),t=process.cwd(),n=(r="."===o)?path_1.default.relative("../",t):o,a=path_1.default.resolve(t,o||"."),cli_shared_utils_1.validateProjectName(n),cli_shared_utils_1.fs.existsSync(a)?r?[4,cli_shared_utils_1.inquirer.prompt({name:"ok",type:"confirm",message:"您确定要在当前文件下创建？"})]:[3,2]:[3,4];case 1:return e.sent().ok?[3,4]:[2];case 2:return[4,cli_shared_utils_1.inquirer.prompt({name:"action",type:"list",message:"检测到当前目录内部文件夹和项目名一致",choices:[{name:"Overwrite",value:"overwrite"},{name:"Cancel",value:"cancel"}]})];case 3:if(!(i=e.sent().action))return[2];if("overwrite"!==i)return[2];cli_shared_utils_1.notice.warn(["正在删除当前目录下的所有文件夹"]),cli_shared_utils_1.fs.removeSync(a),cli_shared_utils_1.notice.success(["删除成功"]),e.label=4;case 4:return typedi_1.Container.set([{id:"projectName",value:n},{id:"targetDir",value:a}]),typedi_1.Container.get(creator_1.default).create(),[2]}})})}exports.default=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return __awaiter(void 0,void 0,void 0,function(){return __generator(this,function(e){return[2,create.apply(void 0,t).catch(function(e){return cli_shared_utils_1.notice.error([e])})]})})};