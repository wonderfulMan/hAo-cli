"use strict";exports.__esModule=!0;var cli_shared_utils_1=require("@lartplus/cli-shared-utils"),CreateStyleVueRules=function(){function s(s,e){this.context=s,this.chain=e,this.shouldExtract="dev"!==this.context.mode}return s.prototype.apploaders=function(s,e,t,o){var a,r=(null===(a=this.context.configFile)||void 0===a?void 0:a.cssSouceMap)||!0;this.shouldExtract?s.use("extract-css-plugin").loader(cli_shared_utils_1.maybeLoader("mini-css-extract-plugin")).options({hmr:!this.shouldExtract}):s.use("vue-style-loader").loader(cli_shared_utils_1.maybeLoader("vue-style-loader")).options({sourceMap:r,shadowMode:!0});var l=this.calcCssLoaderOptions(r,e);s.use("css-loader").loader(cli_shared_utils_1.maybeLoader("css-loader")).options(l),s.use("postcss-loader").loader(cli_shared_utils_1.maybeLoader("postcss-loader")).options({sourceMap:r}),t&&s.use(t).loader(cli_shared_utils_1.maybeLoader(t)).options(Object.assign({sourceMap:r},o))},s.prototype.createRules=function(s,e,t,o){var a=this.chain.module.rule(s).test(e),r=a.oneOf("vue-normal").resourceQuery(/\?vue/);this.apploaders(r,!1,t,o);var l=a.oneOf("vue-module").resourceQuery(/module/);this.apploaders(l,!0,t,o);var u=a.oneOf("normal");this.apploaders(u,!1,t,o);var i=a.oneOf("normal-modules").test(/\.module\.\w+$/);this.apploaders(i,!0,t,o)},s.prototype.calcCssLoaderOptions=function(s,e){var t={sourceMap:s,importLoaders:2};return e&&(t.localIdentName="[name]_[local]_[hash:base64:5]",t.modules=!0),t},s.prototype.buildStyle=function(){this.createRules("css","/.css$/"),this.createRules("less","/.less$/","less-loader"),this.createRules("stylus","/.styl(us)?$/","stylus-loader"),this.createRules("postcss","/.p(ost)?css$/"),this.createRules("sass","/.sass$/","sass-loader"),this.createRules("scss","/.scss$/","sass-loader")},s}();exports.CreateStyleVueRules=CreateStyleVueRules;