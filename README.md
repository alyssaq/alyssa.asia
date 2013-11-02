[alyssa.asia](www.alyssa.asia) static site
=========

Powered By Google App Engine - Python 2.7

## Runnning alyssa.asia locally
Clone the repository
    > git clone https://github.com/alyssaq/alyssa.asia.git

Get node dependencies (Assuming [nodejs](nodejs.org) and [npm](npmjs.org) is installed)
    > npm install

Build production-ready site (Assuming [grunt](gruntjs.com) is installed)
    > grunt 

Run the site using GoogleAppEngineLauncher. 
More details in next section.

### Running Google App Engine dev webserver
You can run the development web server either via GoogleAppEngineLauncher or command line.

Command Line to start at port 8000:    
*Note: Assumes that GoogleAppEngineLauncher has created a symlink to dev_appserver.py* 

    > dev_appserver.py appengine_content/ --skip_sdk_update_check=yes --port=8000 --admin_port=8009

### Get Started with app engine
https://developers.google.com/appengine/docs/python/gettingstartedpython27/helloworld

### Using Gruntjs
Gruntjs requires package.json and gruntfile.js   

    > npm init   
    > npm install grunt grunt-contrib-htmlmin --save-dev
