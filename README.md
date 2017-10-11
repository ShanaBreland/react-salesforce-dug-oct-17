# React in Salesforce

Presented to the New York Salesforce Developer User Group in October 2017. Feel free to log issues to this repo or reach out via [Twitter](https://www.twitter.com/rogermitchell) if there are any questions, comments, etc.

## Prerequisites

1. Set up a new Salesforce Developer Edition org [here](https://developer.salesforce.com/signup), or use an existing DE org
1. Install Node and npm from [NodeJS.org](https://nodejs.org/en/download/)
1. Install React Dev Tools for [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
1. Install Requestly for [Chrome](https://chrome.google.com/webstore/detail/requestly-redirect-url-mo/mdnleldcmiljblolnjhpnblkcekpdkpa?hl=en) or [Firefox](https://www.requestly.in/home/)

## Getting Started

Open up your Terminal of choice, `git clone` this repository to your local machine, and `cd` into the top level directory. This contains two directories: **start** and **finish**.

**start** contains the base set of files before we begin developing any of the application. This is meant to provide a slight advantage to avoid building out each of the config files required for the project.

**finish** contains the set of files that we built during the hands on workshop. If you are interested in peeking ahead, you may do that too!

### It'd be great to `start` here...

Let's get started by executing the commands below.

- `cd start` to change directories
- `npm install` to install a set of dependent packages that are referenced in `package.json` 

While `npm install` fetches tons of packages, let's talk about what each of these 3 fles does:

- **package.json** contains the set of (development) dependencies that our project has, and is modified over time as we include different modules to assist us with our project
- **webpack.config.js** has configuration settings for the [**webpack**](https://webpack.github.io/) module that is installed based on our project's dependencies; this helps compile a set of JS and CSS files that are referenced in `App.js` (and the files referenced by those files, etc) into a single file called `app.js`, which is what we ultimately reference and deploy to Salesforce
- **.babelrc** has configuration settings for the [**babel**](https://babeljs.io/) transpiler that ensures we are compiling our React and ES6 code into JavaScript that most browsers support

After we're done with this, we're going to create 2 new directories inside of `start`:

- `dev`
- `build`

Within `dev`, create new files called `App.js` and `App.css`. This will be the starting point for all of our application code.

Here's roughly what you want `App.js` to look like at the start:

```
import React from 'react';
import ReactDOM from 'react-dom';
import '/App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {

	}

	render() {
		return(
			<div>
				Hello New York City!
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
```

We're importing the **react** and **react-dom** packages that will allow us to build React components, use its lifecycle methods, and mount our application into the page's DOM inside of an element that has `id="app"` (we'll see what this looks like later when we create our Visualforce page).



### ... but you can skip ahead to the `finish` line too
