var _0x4632=['@lartplus/cli-shared-utils','assign','resolvedDependencies','^8.3.0','\x22^16.10.2\x22,','hasEslint','reactEslint','hasTypescript','vue','vueEslint','__esModule','^3.1.6','./resolvedLartplusCliVersion','\x22^5.1.2\x22','resolvedLartplusCliVersion'];(function(_0x1148f0,_0x4632bc){var _0x8668f0=function(_0x2bda01){while(--_0x2bda01){_0x1148f0['push'](_0x1148f0['shift']());}};_0x8668f0(++_0x4632bc);}(_0x4632,0xac));var _0x8668=function(_0x1148f0,_0x4632bc){_0x1148f0=_0x1148f0-0x0;var _0x8668f0=_0x4632[_0x1148f0];return _0x8668f0;};'use strict';exports[_0x8668('0x3')]=!0x0;var cli_shared_utils_1=require(_0x8668('0x8')),resolvedLartplusCliVersion_1=require(_0x8668('0x5')),LARTPLUS_VERSION_STR=resolvedLartplusCliVersion_1[_0x8668('0x7')](),DEV_DEPENDENCIES={'base':{'@lartplus/cli-service':LARTPLUS_VERSION_STR,'@lartplus/cli-postcss':LARTPLUS_VERSION_STR},'vue':{'@lartplus/cli-generator-vue':LARTPLUS_VERSION_STR,'@lartplus/cli-service-vue':LARTPLUS_VERSION_STR,'@lartplus/cli-babel-vue':LARTPLUS_VERSION_STR,'@lartplus/cli-prettier-vue':LARTPLUS_VERSION_STR},'react':{'@lartplus/cli-generator-react':LARTPLUS_VERSION_STR,'@lartplus/cli-service-react':LARTPLUS_VERSION_STR,'@lartplus/cli-babel-react':LARTPLUS_VERSION_STR},'typescript':{'typescript':'^3.7.5','@lartplus/cli-babel-typescript':LARTPLUS_VERSION_STR},'vueEslint':{'@lartplus/cli-eslint-vue':LARTPLUS_VERSION_STR},'reactEslint':{'@lartplus/cli-eslint-react':LARTPLUS_VERSION_STR}},DEPENDENCIES={'vue':{'vue':'^2.6.11','vue-router':_0x8668('0x4')},'react':{'react':'\x22^16.13.1\x22,','@hot-loader/react-dom':_0x8668('0xc'),'react-router-dom':_0x8668('0x6')}};exports[_0x8668('0xa')]=function(_0x736d9e,_0x300d4d){var _0x39182f=cli_shared_utils_1['getFrameworkName'](_0x736d9e),_0x5454ce=cli_shared_utils_1[_0x8668('0x0')](_0x736d9e),_0x3b7199=cli_shared_utils_1[_0x8668('0xd')](_0x736d9e),_0x3db6a4=Object[_0x8668('0x9')]({},DEV_DEPENDENCIES['base'],DEV_DEPENDENCIES[_0x39182f]),_0x34858f=Object['assign']({},DEPENDENCIES[_0x39182f]);return _0x5454ce&&(Object['assign'](_0x3db6a4,DEV_DEPENDENCIES['typescript']),Object[_0x8668('0x9')](_0x34858f,{'vue-class-component':'^7.2.3','vue-property-decorator':_0x8668('0xb')})),_0x3b7199&&Object[_0x8668('0x9')](_0x3db6a4,_0x8668('0x1')===_0x39182f?DEV_DEPENDENCIES[_0x8668('0x2')]:DEV_DEPENDENCIES[_0x8668('0xe')]),{'dependencies':_0x34858f,'devDependencies':_0x3db6a4};};