"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,l,a,o){return new(a=a||Promise)(function(t,n){function r(e){try{s(o.next(e))}catch(e){n(e)}}function i(e){try{s(o.throw(e))}catch(e){n(e)}}function s(e){var n;e.done?t(e.value):((n=e.value)instanceof a?n:new a(function(e){e(n)})).then(r,i)}s((o=o.apply(e,l||[])).next())})},__generator=this&&this.__generator||function(t,r){var i,s,l,a={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]},e={next:n(0),throw:n(1),return:n(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function n(n){return function(e){return function(n){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,s&&(l=2&n[0]?s.return:n[0]?s.throw||((l=s.return)&&l.call(s),0):s.next)&&!(l=l.call(s,n[1])).done)return l;switch(s=0,l&&(n=[2&n[0],l.value]),n[0]){case 0:case 1:l=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,s=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(!(l=0<(l=a.trys).length&&l[l.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!l||n[1]>l[0]&&n[1]<l[3])){a.label=n[1];break}if(6===n[0]&&a.label<l[1]){a.label=l[1],l=n;break}if(l&&a.label<l[2]){a.label=l[2],a.ops.push(n);break}l[2]&&a.ops.pop(),a.trys.pop();continue}n=r.call(t,a)}catch(e){n=[6,e],s=0}finally{i=l=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,e])}}};exports.__esModule=!0;var cli_shared_utils_1=require("@lartplus/cli-shared-utils"),cli_config_1=require("@lartplus/cli-config"),genPkgFile_1=require("./genPkgFile"),resolvedInstallDependencies_1=require("../resolve/resolvedInstallDependencies");exports.genEslintByLartplus=function(o){return __awaiter(void 0,void 0,void 0,function(){var n,t,r,i,s,l,a;return __generator(this,function(e){switch(e.label){case 0:return(n=cli_shared_utils_1.getCliModule(o.lartplusRequirePath,"eslint",cli_shared_utils_1.getFrameworkName(o.answers)),t=require(n),r=t.exportGetDeps,i=t.genEslintRcFile,(s=cli_shared_utils_1.hasPackageJson(o.targetDir))&&"boolean"!=typeof s)?(s.devDependencies=__assign(__assign({},s.devDependencies),r(o.answers)),[4,genPkgFile_1.genPkgFile(o,JSON.stringify(s,null,2))]):[3,4];case 1:return e.sent(),[4,resolvedInstallDependencies_1.resolvedInstallDependencies(o)];case 2:return(e.sent(),l=i(o.answers))?(a=cli_config_1.PATHS.getEslintRcPath(o.targetDir),[4,cli_shared_utils_1.fs.writeFileSync(a,"module.exports = "+JSON.stringify(l,null,2))]):[3,4];case 3:e.sent(),e.label=4;case 4:return[2]}})})};