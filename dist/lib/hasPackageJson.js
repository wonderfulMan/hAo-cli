"use strict";exports.__esModule=!0;var cli_config_1=require("@lartplus/cli-config");function hasPackageJson(a){var e=!1;try{e=require(cli_config_1.PATHS.getProjectPackagePath(a))}catch(a){e=!1}return e}exports.hasPackageJson=hasPackageJson;