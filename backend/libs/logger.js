/*!
 * Copyright 2015 mifort.org
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var winston = require('winston');

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.File)({ //common file logger 
      name: 'common-file',
      filename: 'filelog-common.log',
      json: false
    }),
    new (winston.transports.File)({ //error file logger
      name: 'error-file',
      filename: 'filelog-error.log',
      handleExceptions: true,
      humanReadableUnhandledException: true,
      level: 'error',
      json: false
    }),
    new (winston.transports.Console)({
      colorize: 'all',
      level: 'debug',
      handleExceptions: true,
      humanReadableUnhandledException: true
    })
  ]
});

module.exports = logger;