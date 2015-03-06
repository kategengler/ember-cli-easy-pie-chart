module.exports = {
  name: 'ember-cli-easy-pie-chart',

  included: function(app) {
    this._super.included(app);

    app.import('bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js');
  }
};
