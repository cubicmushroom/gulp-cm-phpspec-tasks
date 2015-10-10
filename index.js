var notify  = require('gulp-notify'),
    phpspec = require('gulp-phpspec'),
    yargs   = require('yargs'),
    shell   = require("shelljs");

/**
 * Add PHPSpec tasks
 * @param gulp
 * @param namespace
 * @param {{bin: {string}}} options
 */
module.exports.addTasks = function (gulp, namespace, options) {

  // -----------------------------------------------------------------------------------------------------------------
  // PHPSpec Tasks
  // -----------------------------------------------------------------------------------------------------------------

  var phpspecBin;

  var phpspecGlob = 'spec/**/*Spec.php';
  var srcGlob = 'src/**/*.php';

  options = options || {};

  phpspecBin = options.bin || 'vendor/bin/phpspec';

  gulp.task('desc', function () {
    var className;

    yargs.options({
      'c': {
        alias   : 'class',
        describe: 'Class to describe',
        type    : 'string', /* array | boolean | string */
        nargs   : 1
      }
    });

    if (!yargs.argv.h) {
      yargs.demand('c', 'Class (-c, --class) is required');
    }

    if (yargs.argv.h || !yargs.argv.c) {
      yargs.showHelp();
      return;
    }

    className = namespace.replace(/\\/g, '/') + yargs.argv.c;
    shell.exec(phpspecBin + ' desc ' + className);
  });

  // phpspec
  gulp.task('phpspec', function () {
    var options = {debug: true, notify: true};

    gulp.src(phpspecGlob)
      .pipe(phpspec(phpspecBin, options))
      .on('error', notify.onError({
        title  : "Testing Failed",
        message: "Error(s) occurred during PHPSpec test..."
      }));
  });

  // watch
  gulp.task('phpspec:watch', function () {
    gulp.watch([phpspecGlob, srcGlob], ['phpspec']);
  });
};