var _0x3f4d=['clear','\x20DONE\x20','whiteBright','black','error','__esModule','bgGreen','\x20ERROR\x20','join','map','__importDefault','chalk','default','warn','log'];(function(_0x89c731,_0x3f4d12){var _0x71086a=function(_0x402b9b){while(--_0x402b9b){_0x89c731['push'](_0x89c731['shift']());}};_0x71086a(++_0x3f4d12);}(_0x3f4d,0x88));var _0x7108=function(_0x89c731,_0x3f4d12){_0x89c731=_0x89c731-0x0;var _0x71086a=_0x3f4d[_0x89c731];return _0x71086a;};'use strict';var __importDefault=this&&this[_0x7108('0x9')]||function(_0x377dbe){return _0x377dbe&&_0x377dbe[_0x7108('0x4')]?_0x377dbe:{'default':_0x377dbe};};exports['__esModule']=!0x0;var chalk_1=__importDefault(require(_0x7108('0xa'))),warnLogger=console[_0x7108('0xc')],normalLogger=console[_0x7108('0xd')],errorLogger=console[_0x7108('0x3')],clear=console[_0x7108('0xe')];exports['notice']={'warn':function(_0x19f669){warnLogger(chalk_1[_0x7108('0xb')][_0x7108('0x2')]['bgYellow']('\x20WARN\x20')+chalk_1[_0x7108('0xb')][_0x7108('0x1')]('\x20'+_0x19f669[_0x7108('0x8')](function(_0x36d295){return _0x36d295;})['join']('/n')));},'error':function(_0x272a21){errorLogger(chalk_1[_0x7108('0xb')][_0x7108('0x2')]['bgRed'](_0x7108('0x6'))+chalk_1[_0x7108('0xb')][_0x7108('0x1')]('\x20'+_0x272a21['map'](function(_0x4e7ecd){return _0x4e7ecd;})[_0x7108('0x7')]('/n')));},'success':function(_0x1ed2c6){normalLogger(chalk_1[_0x7108('0xb')][_0x7108('0x2')][_0x7108('0x5')]('\x20SUCCESS\x20')+chalk_1[_0x7108('0xb')][_0x7108('0x1')]('\x20'+_0x1ed2c6[_0x7108('0x8')](function(_0x1b6201){return _0x1b6201;})['join']('/n')));},'done':function(_0x475c4d){normalLogger(chalk_1[_0x7108('0xb')][_0x7108('0x2')]['bgGreen'](_0x7108('0x0'))+chalk_1[_0x7108('0xb')][_0x7108('0x1')]('\x20'+_0x475c4d[_0x7108('0x8')](function(_0x232051){return _0x232051;})[_0x7108('0x7')]('/n')));},'clear':clear,'errorLogger':errorLogger,'normalLogger':normalLogger,'warnLogger':warnLogger};