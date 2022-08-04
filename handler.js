'use strict';
const os = require('os');

module.exports.getOsInfo = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        osName: os.hostname(),
        osPlatform: os.platform(),
        osCPU: os.cpus(),
        // 1mb = 1048576
        // hi
        //이거 됨?
        // 왜 안됨?
        //55
        //66
        osMemory: os.totalmem() / 1048576,
      },
      null,
      2
    ),
  };
};
