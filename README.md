
My online resume at [alyssa.asia](http://www.alyssa.asia)
=========

Powered By Google App Engine - Python 2.7

## Setting up alyssa.asia locally
1. Install [nodejs](http://nodejs.org), [npm](https://npmjs.org), [grunt](http://gruntjs.com)
1. Clone the repository:
  `git clone https://github.com/alyssaq/alyssa.asia.git`
1. Get node dependencies: `npm install`

Build production-ready site. <br>
Html, css will be minimised and client & server files copied to `app` folder

    $ grunt

To watch for file changes and build site:

    $ grunt dev

From the *app* folder, run the site using GoogleAppEngineLauncher or command line.
More details on running Python GAE server in the next section and on [google dev site](https://developers.google.com/appengine/docs/python/tools/devserver).

### Running Google App Engine dev webserver
You can run the development web server either via GoogleAppEngineLauncher or command line.

Command Line to start at port 9000 and admin port 9009:
*Note: Assumes that GoogleAppEngineLauncher has created a symlink to dev_appserver.py*

    $ dev_appserver.py app --skip_sdk_update_check=yes --port=9000 --admin_port=9009

Open `http://localhost:9000`

### Deploy to Google App Engine
To upload the finished application to Google App Engine, run the following command:

    $ appcfg.py update app

Or click **Deploy** in the Google App Engine Launcher and enter your Google username and password at the prompts.

### Get Started with app engine
https://developers.google.com/appengine/docs/python/gettingstartedpython27/helloworld

### License
[MIT](http://alyssaq.github.io/mit-license/)