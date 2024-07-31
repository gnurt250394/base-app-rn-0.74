/* eslint-disable import/order */

const {execSync} = require('child_process');

const {readFileSync, rmSync, writeFileSync} = require('fs');
const {resolve} = require('path');
(function () {
  const {argv} = process;

  const actualArgv = argv.slice(2);

  const IOS_FOLDER_NAME = 'app';

  const [path, bgColor, width, flavor, iosName] = actualArgv;

  execSync(
    `yarn react-native generate-bootsplash ${path} --background=${bgColor} --platforms=android,ios --logo-width=${width}  --assets-output=assets --flavor=${flavor}`,
    {stdio: 'inherit'},
  );
})();
