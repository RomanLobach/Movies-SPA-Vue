# vue_movie_app_vuetify_from_ui

Hello! This is a Movie App - a simple web application with movies database.

In this example was used Vue.js framework with Vue Router and Vuex. For styles was used mostly Vuetify.

There is known issues with Search component, and cycle realisation in Detail component (all this places marked by comments).
This application is a partial implementation of this API: https://developers.themoviedb.org/3

To run up the Application need to have an API key. To get the API key need to register here: https://www.themoviedb.org and go to Setting page of your profile.
After all you need to create an .env file in root derictory of the App with constat:
```
VUE_APP_API_KEY=Paste-your-API-key-here
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
