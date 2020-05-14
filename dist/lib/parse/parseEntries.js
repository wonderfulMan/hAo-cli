"use strict";var __awaiter=this&&this.__awaiter||function(e,a,o,l){return new(o=o||Promise)(function(r,t){function i(e){try{s(l.next(e))}catch(e){t(e)}}function n(e){try{s(l.throw(e))}catch(e){t(e)}}function s(e){var t;e.done?r(e.value):((t=e.value)instanceof o?t:new o(function(e){e(t)})).then(i,n)}s((l=l.apply(e,a||[])).next())})},__generator=this&&this.__generator||function(r,i){var n,s,a,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,s&&(a=2&t[0]?s.return:t[0]?s.throw||((a=s.return)&&a.call(s),0):s.next)&&!(a=a.call(s,t[1])).done)return a;switch(s=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return o.label++,{value:t[1],done:!1};case 5:o.label++,s=t[1],t=[0];continue;case 7:t=o.ops.pop(),o.trys.pop();continue;default:if(!(a=0<(a=o.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){o=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){o.label=t[1];break}if(6===t[0]&&o.label<a[1]){o.label=a[1],a=t;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(t);break}a[2]&&o.ops.pop(),o.trys.pop();continue}t=i.call(r,o)}catch(e){t=[6,e],s=0}finally{n=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};exports.__esModule=!0;var path_1=__importDefault(require("path")),cli_shared_utils_1=require("@lartplus/cli-shared-utils"),validateDir=function(e,t){var r=cli_shared_utils_1.fs.existsSync(e),i=cli_shared_utils_1.fs.existsSync(t);return r?!!i||(cli_shared_utils_1.notice.error(["enties目录不能删除"]),!1):(cli_shared_utils_1.notice.error(["请设置工作目录"]),!1)},readEntriesDir=function(r){return __awaiter(void 0,void 0,void 0,function(){var t;return __generator(this,function(e){return t=cli_shared_utils_1.fs.readdirSync(r),[2,{isMultiple:1<t.length,entriesFiles:t}]})})},composeEntries=function(e,r){return e.map(function(e){var t=e.split(".")[0];return t||(cli_shared_utils_1.notice.error(["entries目录下入口文件格式错误"]),process.exit(0)),{appName:t,fileExtName:path_1.default.extname(e),filePath:r+"/"+e}})},parseEntries=function(u){return __awaiter(void 0,void 0,void 0,function(){var t,r,i,n,s,a,o,l;return __generator(this,function(e){switch(e.label){case 0:return t=u.cwdPath,r=t+"/"+u.workDir,i=t+"/"+u.workDir+"/entries",validateDir(r,i)||process.exit(0),[4,readEntriesDir(i).catch(function(e){cli_shared_utils_1.notice.error([e]),process.exit(0)})];case 1:return n=e.sent(),null===(o=n)||void 0===o||o.isMultiple,s=null===(l=n)||void 0===l?void 0:l.entriesFiles,(a=composeEntries(s,i)).length<1&&(cli_shared_utils_1.notice.error(["entires目录下没有任何入口文件，请检查"]),process.exit(0)),[2,a]}})})};exports.parseEntries=parseEntries;