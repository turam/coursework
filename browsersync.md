# Auto refreshing with Browsersync

## Installation

Ensure node and npm are installed. Instructions are in the Getting setup guide.

```
$ node --version
v9.8.0

$ npm --version
5.6.0
```

Note: Your version numbers may be different.

```
npm install -g browser-sync
```

If you're install gives a permission error on Mac OS, try this command:

```
sudo npm install -g browser-sync
```

It will ask you for your password, it won't show you each character as your typing.

You may get errors to the screen in either case, but the application may still have installed. To verify browser-sync is installed, run this command:

```
$ browser-sync --version
```

You should see version number, something like 2.23.6 (although it may be different). If you see anything other than a version number, the application likely did not install correctly. Due to the complex configuration of each installation of Mac OS, unfortunately I am not able to debug every situation. browser-sync is a helpful tool in developing websites, but it is not a absolute requirement for this course. So it is okay to continue on with the assignments and tutorials with hitting Command+R to refresh the browser every time you make a change to the HTML, CSS (and eventually javascript) files.

## Starting a server

The power of Browsersync is it can start a local webserver (will be important later in this course) and watch for file changes. When ever you save a file, it will automatically update the preview of your webpage with those changes.

```
browser-sync start --server --files="**/*"
```

## Visit the local webserver

Alt+Click on the URL or visit http://localhost:3000/ in Chrome to view your website.

It will start the server in the directory you run the command and try to open the index.html in the same directory the command is run. If there is no index.html in the same directory, you will see a Cannot GET / error.

If you have files in folders, you will need to manually type that folder (it will likely be case-sensitive) into the URL.

## Opening an index file in a folder

Imagine you have a directory that looks like this:

```
| index.html
| README.md
| .gitignore
| coffee
| |____index.html
| |____css
| | |____styles.css
| |____images
| | |____...
```

The "coffee/index.html" file would be visible in a browser at: http://localhost:3000/coffee/

## Stopping the server

Use the Command+C key combination in the terminal to stop the server.

```
$ ^C
```

## Resources

- [Browsersync command line options](https://browsersync.io/docs/command-line)
- [Basic example of Browsersync 'start' command](https://scotch.io/tutorials/how-to-use-browsersync-for-faster-development)