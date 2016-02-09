// Generated by CoffeeScript 1.10.0
var Layout, LayoutMixin, React, merge;

React = require('react');

merge = require('xtend');

LayoutMixin = require('./mixin');

Layout = React.createClass({
  displayName: 'Layout',
  mixins: [LayoutMixin],
  statics: {
    hasReactLayout: true
  },
  getDefaultProps: function() {
    return {
      component: React.DOM.div
    };
  },
  render: function() {
    var component, extraProps, ref, style;
    ref = this.props, component = ref.component, style = ref.style;
    extraProps = {};
    extraProps.style = merge(style || {}, this.getLocalLayout());
    extraProps.children = this.applyLayoutToChildren(this.props.children);
    return component(merge(this.props, extraProps));
  }
});

module.exports = Layout;