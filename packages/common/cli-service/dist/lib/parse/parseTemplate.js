var _0x1d9b=['statSync','0x6','0x5','0x2','forEach','existsSync','readdirSync','0x8','0x9','public目录下没有任何与之entries的文件或者目录为空，请检查','__esModule','0x3','0xd','/index.ejs','push','exit','0x7','parseTemplate','0x1','0x0','isDirectory','@lartplus/cli-shared-utils','length','shift','0xa','error','/public','0x4'];(function(_0x33d1aa,_0x1d9b44){var _0x1893c0=function(_0xa94cde){while(--_0xa94cde){_0x33d1aa['push'](_0x33d1aa['shift']());}};_0x1893c0(++_0x1d9b44);}(_0x1d9b,0x13d));var _0x1893=function(_0x33d1aa,_0x1d9b44){_0x33d1aa=_0x33d1aa-0x0;var _0x1893c0=_0x1d9b[_0x33d1aa];return _0x1893c0;};var _0x2af1=[_0x1893('0x5'),_0x1893('0x13'),'map',_0x1893('0xd'),_0x1893('0x6'),_0x1893('0x1'),_0x1893('0x17'),_0x1893('0x10'),_0x1893('0x18'),_0x1893('0x0'),'filter',_0x1893('0x19'),'appName',_0x1893('0x4')];!function(_0x4f2ed9){!function(_0x1d79e5){for(;--_0x1d79e5;)_0x4f2ed9[_0x1893('0x5')](_0x4f2ed9[_0x1893('0xe')]());}(0xa2);}(_0x2af1);var _0x1e08=function(_0xcdd386,_0x4ac468){return _0x2af1[_0xcdd386=+_0xcdd386];};exports[_0x1e08('0xc')]=!0x0;var cli_shared_utils_1=require(_0x1893('0xc')),readChildDir=function(_0x317e75,_0x220d31){return _0x317e75[_0x1e08(_0x1893('0x1b'))](function(_0x223d71){var _0x46304f=_0x220d31+'/'+_0x223d71;return cli_shared_utils_1['fs'][_0x1e08(_0x1893('0x1a'))](_0x46304f)[_0x1893('0xb')]()&&_0x223d71;})[_0x1e08(_0x1893('0x2'))](Boolean);},diffTemplateDirname=function(_0x2313e1,_0xb16a47){var _0x2c9275=[];return _0xb16a47['forEach'](function(_0x12bb1f){var _0x4ca5f2=_0x2313e1[_0x1e08('0x3')](function(_0x2037f9){return _0x2037f9===_0x12bb1f[_0x1e08(_0x1893('0x15'))];})[0x0];_0x4ca5f2&&_0x2c9275[_0x1e08(_0x1893('0x7'))](_0x4ca5f2);}),_0x2c9275[_0x1e08(_0x1893('0x2'))](Boolean);},getTemplateNames=function(_0x56df61,_0x214a73){var _0x1977f0=[];return _0x56df61[_0x1e08(_0x1893('0x3'))](function(_0x11a44f){var _0x5949ba=_0x214a73+'/'+_0x11a44f+_0x1e08(_0x1893('0x14'));cli_shared_utils_1['fs'][_0x1e08(_0x1893('0x9'))](_0x5949ba)&&_0x1977f0[_0x1e08(_0x1893('0x7'))]({'dirName':_0x11a44f,'templatePath':_0x5949ba});}),_0x1977f0[_0x1e08('0x3')](Boolean);},parseTemplate=function(_0x375490,_0x35e9d1){var _0x435674,_0x42c816,_0x323b81=_0x375490['cwdPath']+_0x1893('0x11'),_0xf4bb37=[];return!cli_shared_utils_1['fs'][_0x1e08(_0x1893('0x9'))](_0x323b81)||0x0<(_0x435674=cli_shared_utils_1['fs'][_0x1e08(_0x1893('0x12'))](_0x323b81))[_0x1e08(_0x1893('0xf'))]&&0x0<(_0x42c816=readChildDir(_0x435674,_0x323b81))[_0x1893('0xd')]&&(_0x42c816=diffTemplateDirname(_0x42c816,_0x35e9d1),_0xf4bb37=getTemplateNames(_0x42c816,_0x323b81)),_0xf4bb37[_0x1e08('0xa')]<0x1&&(cli_shared_utils_1['notice'][_0x1e08(_0x1893('0xa'))]([_0x1e08(_0x1893('0x16'))]),process[_0x1e08('0xb')](0x0)),_0xf4bb37;};exports[_0x1893('0x8')]=parseTemplate;