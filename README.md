# PHPSpec Gulp Tasks

Helpful PHPSpec Gulp tasks


## Setup

    $ npm install --save-dev gulp-cm-phpspec-tasks


## Usage

In your gruntfile.js…

    var phpspecTasks = require('gulp-cm-phpspec-tasks');
    
    var phpspecNamespace = 'Your\\Custom\\Namespace\\';
    
    phpspecTasks.addTasks(gulp, phpspecNamespace, [options]);


## Options

### options.bin

Sets the PHPSpec binary path, relative to the project root.

## Tasks

The following tasks are added by the package…


### $ gulp desc \<Class>

Runs `phpspec desc <phpspecNamespace><Class>`, and shows a notification if the tests fail.


### $ gulp phpspec
 
Runs `phpspec run`


### $ gulp phpspec:watch

Watches `spec/**/*Spec.php` and `src/**/*.php` files and runs the `phpspec` task each time they change.


## Roadmap

1. Add task to automatically generate `phpspec.yml.dist` file with namespace
1. Improve watcher to only run tests associated with changed file