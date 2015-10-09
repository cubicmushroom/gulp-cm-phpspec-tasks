# PHPSpec Gulp Tasks

Helpful PHPSpec Gulp tasks


## Setup

    $ npm install --save-dev gulp-cm-phpspec-tasks

## Usage

In your gruntfile.js…

    var phpspecTasks = require('gulp-cm-phpspec-tasks');
    
    var phpspecNamespace = 'Your\\Custom\\Namespace\\';
    
    phpspecTasks.addTasks(gulp, phpspecNamespace);
