flaming-hipster
===============

Learning exercise on implementing Ember's DS.RESTFulAdapter in default mode as well as customized.
### Installation

This is set up to be a Heroku deployment with MongoHQ add-on

If you want to run it locally: 

Install and run Mongodb <http://docs.mongodb.org/manual/installation/>

	npm install
	node server/server.js
	
Point your browser at
	
	http://localhost:8080

### Roadmap
- Implement Accessory Model as a one-to-many relationship with Hipster
- Allow user to add new accessories via the Hipster Edit screen
- Sideload newly created Accessories with the Hipster create/update call, resolve ids and return

### Notes
- This is still a work in progress.
- The name of the repo was suggested by GitHub
