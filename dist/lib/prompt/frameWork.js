"use strict";var __decorate=this&&this.__decorate||function(e,t,r,o){var c,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var i=e.length-1;0<=i;i--)(c=e[i])&&(a=(n<3?c(a):3<n?c(t,r,a):c(t,r))||a);return 3<n&&a&&Object.defineProperty(t,r,a),a};exports.__esModule=!0;var typedi_1=require("typedi"),FrameWorkPrompt=function(){function e(){}return e.prototype.config=function(){return{name:"framework",message:"选择开发框架:",type:"list",choices:[{name:"Vue",value:"vue"},{name:"React",value:"react"}]}},e=__decorate([typedi_1.Service()],e)}();exports.default=FrameWorkPrompt;