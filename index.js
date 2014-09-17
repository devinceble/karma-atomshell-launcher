var fs = require('fs');

var AtomShell = function(baseBrowserDecorator, args) {
  baseBrowserDecorator(this);

  var flags = args.flags || [];

};

AtomShell.prototype = {
  name: 'AtomShell',

  DEFAULT_CMD: {
    linux: 'karma-atom'
  },
  ENV_CMD: 'ATOMSHELL_BIN'
};

AtomShell.$inject = ['baseBrowserDecorator', 'args'];


// PUBLISH DI MODULE
module.exports = {
  'launcher:AtomShell': ['type', AtomShell]
};
