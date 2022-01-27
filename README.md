
## Installation

Cosmic requires [Node.js](https://nodejs.org/) v17.3.1+  and [Yarn](https://classic.yarnpkg.com/en/) v1.22.4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd cosmic-messaging\client
yarn install
yarn run start
```

```sh
cd cosmic-messaging\api
yarn install
yarn run start
```

```sh
cd cosmic-messaging\socket
yarn install
yarn run start
```

## Testing

After all servers are up and running follow these steps:

1. Go to [here](http://localhost:3000/signup) and create a new account with credentials
2. Hit CTRL + SHIFT + N to open a new seperate broswer instance and go [here](http://localhost:3000) to login a different account
3. Enter **cosmic** for both username and password to login
> Note: **cosmic** account is a test account so keys are already present at login
4. Open **Direct Messages** accordion on the left and click on the new account you created
5. Start conversation
> Note: Since **cosmic** account does not actually generate key on the device itself, ``it has to initiate conversation``
6. You can check what information server is relaying by checking **socket** server logs





[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
