"use strict";var __awaiter=this&&this.__awaiter||function(e,a,u,o){return new(u=u||Promise)(function(r,t){function i(e){try{n(o.next(e))}catch(e){t(e)}}function l(e){try{n(o.throw(e))}catch(e){t(e)}}function n(e){var t;e.done?r(e.value):((t=e.value)instanceof u?t:new u(function(e){e(t)})).then(i,l)}n((o=o.apply(e,a||[])).next())})},__generator=this&&this.__generator||function(r,i){var l,n,a,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(l)throw new TypeError("Generator is already executing.");for(;u;)try{if(l=1,n&&(a=2&t[0]?n.return:t[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,t[1])).done)return a;switch(n=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return u.label++,{value:t[1],done:!1};case 5:u.label++,n=t[1],t=[0];continue;case 7:t=u.ops.pop(),u.trys.pop();continue;default:if(!(a=0<(a=u.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){u=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){u.label=t[1];break}if(6===t[0]&&u.label<a[1]){u.label=a[1],a=t;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(t);break}a[2]&&u.ops.pop(),u.trys.pop();continue}t=i.call(r,u)}catch(e){t=[6,e],n=0}finally{l=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};exports.__esModule=!0;var path_1=__importDefault(require("path")),cli_shared_utils_1=require("@lartplus/cli-shared-utils"),cli_config_1=require("@lartplus/cli-config");function genBabelConfigFile(p){return __awaiter(this,void 0,void 0,function(){var t,r,i,l,n,a,u,o,s,c,_,f;return __generator(this,function(e){switch(e.label){case 0:return p.emit("gen_babel_start"),t=cli_shared_utils_1.getCliModule(p.lartplusRequirePath,"babel"),r=require(t).install,p.babelConfig=r(),i=cli_shared_utils_1.getCliModule(p.lartplusRequirePath,"babel",p.answers.framework),l=require(i).install,p.babelConfig=l(p.babelConfig),cli_shared_utils_1.hasTypescript(p.answers)&&(n=cli_shared_utils_1.getCliModule(p.lartplusRequirePath,"babel","typescript"),a=require(n).install,p.babelConfig=a(p.babelConfig)),u=p.babelConfig,o=u.sourceType,s=u.presets,c=u.plugins,_=cli_config_1.PATHS.getBableConfigFilePath(p.targetDir),f={sourceType:o,presets:JSON.stringify(s,null,2),plugins:JSON.stringify(c,null,2)},[4,cli_shared_utils_1.compileTemplate(cli_config_1.PATHS.getLartPlusBabelTemplatePath(path_1.default.resolve(__dirname,"../../../")),f,_,!1)];case 1:return e.sent(),p.emit("gen_babel_end"),[2]}})})}exports.genBabelConfigFile=genBabelConfigFile;