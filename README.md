ovation-web-ui
==============

Installation process

Install Homebrew

Install node 
- `brew install node`

Confirm install
- `which node`
- `which nom`

Install phantomjs for tests
- `brew install phantomjs`

Install yeoman, grunt, and bower
- `npm install -g yo grunt-cli bower`

Install mocha-phantomjs
- `npm install -g mocha-phantomjs`

Install mocha generator
- `npm install -g generator-mocha-amd`

Install marionette generator
- `npm install -g generator-marionette`

Update gem
- `sudo gem update —system`

Install compass
- `sudo gem install compass`

Go to ui directory and run `grunt` to start the test server

If you get ruby/SASS error you may need to reinstall SASS
`sudo gem uninstall SASS` (say yes to prompts)
`sudo gem install sass`

Install bower components
- `bower install`

Start the server
- `grunt`
