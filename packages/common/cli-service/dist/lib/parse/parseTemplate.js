var _0x4326=['length','isDirectory','filter','0x8','push','public目录下没有任何与之entries的文件或者目录为空，请检查','0x4','0xc','notice','shift','0xf','/public','@lartplus/cli-shared-utils','exit','0xa','existsSync','0x2','0xb','readdirSync','0x0','/index.ejs','__esModule','0x5','0xd','0x6','0x7','cwdPath','forEach','0x10','0xe'];(function(_0x3f855a,_0x43265e){var _0x37f83c=function(_0x53c6e2){while(--_0x53c6e2){_0x3f855a['push'](_0x3f855a['shift']());}};_0x37f83c(++_0x43265e);}(_0x4326,0x74));var _0x37f8=function(_0x3f855a,_0x43265e){_0x3f855a=_0x3f855a-0x0;var _0x37f83c=_0x4326[_0x3f855a];return _0x37f83c;};var _0x1173=['error',_0x37f8('0x5'),_0x37f8('0x6'),'map',_0x37f8('0x13'),_0x37f8('0x9'),'parseTemplate',_0x37f8('0x1'),_0x37f8('0x18'),'statSync','appName',_0x37f8('0x11'),'length',_0x37f8('0x19'),_0x37f8('0xf'),_0x37f8('0x8'),_0x37f8('0x16')];!function(_0x56b8c1){!function(_0x49ddb9){for(;--_0x49ddb9;)_0x56b8c1['push'](_0x56b8c1[_0x37f8('0xd')]());}(0x10e);}(_0x1173);var _0x3f99=function(_0x2fa927,_0x260709){return _0x1173[_0x2fa927=+_0x2fa927];};exports[_0x3f99(_0x37f8('0x2'))]=!0x0;var cli_shared_utils_1=require(_0x37f8('0x10')),readChildDir=function(_0x49f60e,_0x3efde1){return _0x49f60e[_0x3f99(_0x37f8('0x1c'))](function(_0x2d6c11){var _0x3e29f7=_0x3efde1+'/'+_0x2d6c11;return cli_shared_utils_1['fs'][_0x3f99(_0x37f8('0xb'))](_0x3e29f7)[_0x3f99(_0x37f8('0xa'))]()&&_0x2d6c11;})[_0x37f8('0x6')](Boolean);},diffTemplateDirname=function(_0x20bb94,_0x241ad2){var _0x4c5981=[];return _0x241ad2[_0x37f8('0x1')](function(_0x3961ba){var _0x579ebd=_0x20bb94[_0x3f99(_0x37f8('0x1a'))](function(_0x5152c5){return _0x5152c5===_0x3961ba[_0x3f99(_0x37f8('0x1b'))];})[0x0];_0x579ebd&&_0x4c5981[_0x3f99('0x1')](_0x579ebd);}),_0x4c5981[_0x3f99(_0x37f8('0x1a'))](Boolean);},getTemplateNames=function(_0x14dcaa,_0xcc680b){var _0x30c9a9=[];return _0x14dcaa[_0x3f99(_0x37f8('0x12'))](function(_0x4e5978){var _0x100ba6=_0xcc680b+'/'+_0x4e5978+_0x3f99(_0x37f8('0x15'));cli_shared_utils_1['fs'][_0x3f99(_0x37f8('0x1d'))](_0x100ba6)&&_0x30c9a9[_0x37f8('0x8')]({'dirName':_0x4e5978,'templatePath':_0x100ba6});}),_0x30c9a9[_0x3f99(_0x37f8('0x1a'))](Boolean);},parseTemplate=function(_0x4db418,_0x46b044){var _0x489a2b,_0x17dab2,_0x1c3ea3=_0x4db418[_0x37f8('0x0')]+_0x3f99(_0x37f8('0x17')),_0x39b525=[];return!cli_shared_utils_1['fs'][_0x37f8('0x13')](_0x1c3ea3)||0x0<(_0x489a2b=cli_shared_utils_1['fs'][_0x3f99(_0x37f8('0x14'))](_0x1c3ea3))[_0x37f8('0x4')]&&0x0<(_0x17dab2=readChildDir(_0x489a2b,_0x1c3ea3))[_0x3f99('0xf')]&&(_0x17dab2=diffTemplateDirname(_0x17dab2,_0x46b044),_0x39b525=getTemplateNames(_0x17dab2,_0x1c3ea3)),_0x39b525[_0x3f99(_0x37f8('0xe'))]<0x1&&(cli_shared_utils_1[_0x37f8('0xc')][_0x3f99('0x3')]([_0x3f99(_0x37f8('0x7'))]),process[_0x3f99(_0x37f8('0x3'))](0x0)),_0x39b525;};exports[_0x3f99('0x9')]=parseTemplate;