import Ember from 'ember';

export default Ember.Component.extend({
  classNames        : ['easyPieChart'],
  attributeBindings : ['dataPercent:data-percent'],

  easyPieChart: null,
  dataPercent : 0

  initEasyPieChart: function() {
    var easyPieChart = this.$().easyPieChart({
      barColor    : this.get('barColor'),
      trackColor  : this.get('trackColor'),
      scaleColor  : this.get('scaleColor'),
      scaleLength : this.get('scaleLength'),
      lineCap     : this.get('lineCap'),
      lineWidth   : this.get('lineWidth'),
      size        : this.get('size'),
      animate     : this.get('animate'),
      rotate      : this.get('rotate')
    });

    this.set('easyPieChart', easyPieChart);
  }.on('didInsertElement'),

  destroyEasyPieChart: function() {
    this.destroy();
  }.on('willDestroyElement'),
});
