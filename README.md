# meteor-react-mui-starter-app

This project is to create a codebase for every app use stack Meteor + React + Material-UI.

## Screen shot

<img src="https://github.com/manhhailua/meteor-react-mui-starter-app/raw/master/public/screen-shot.png" alt="mobile-screen-shot" />

## Guides

#### Installation

Ensure that you have `git` and `meteor` installed.

```
git clone https://github.com/manhhailua/meteor-react-mui-starter-app.git

cd meteor-react-mui-starter-app/

meteor npm install -g yarn

meteor yarn install

meteor
```

Now you are good to go developing your new app.

#### Testing

Current testing stack is: Mocha - Chai - Enzyme.

To start testing as you type:

```
meteor yarn run test
```

In case you want to run the test just once:

```
meteor yarn run test:once
```

#### Styling

SASS was integrated into this repo. So, you can use [sass](http://sass-lang.com/) or pure css in your own way.

If you choose SASS for your app, please `@import` them to `/client/main.scss` or `/imports/ui/components/App/App.scss`. Do not directly import `.scss` file to your component, that causes testing failures and breaks sass global variables.

## Author

Manh Pham <manhhailua@gmail.com>

## License

MIT