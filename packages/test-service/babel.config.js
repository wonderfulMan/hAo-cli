/*
 * @Author: hAo
 * @LastEditors  : hAo
 * @Date: 2020-04-14 15:12:30
 * @LastEditTime : 2020-04-14 19:14:40
 */
module.exports = function(api) {
    console.log(1);
    api.cache(true);
    return {
        presets: [["@babel/preset-env",{"corejs":3,"useBuiltIns":"usage"}]],
        plugins: ["@babel/plugin-proposal-object-rest-spread","@babel/plugin-syntax-dynamic-import","@babel/plugin-proposal-class-properties"]
    }
}