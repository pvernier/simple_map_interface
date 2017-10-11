# simple_map_interface
A basic map interface using Vue, Vuetify and Leaflet that can serve as a template.

### Check the demo [here](http://pvernier.github.io/demo/simple_map_interface/). ###

Steps:
* git clone https://github.com/pvernier/simple_map_interface.git
* cd simple_map_interface
* npm install
* npm run build
* open dist/index.html in your browser

The Webpack config includes:
* externalize CSS in a style.css file
* split JS into 2 files: vendor (vue, vuetify and leaflet) and app
* minfify JS files
