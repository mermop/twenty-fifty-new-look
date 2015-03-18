define(['knockout'], function(ko) {
  'use strict';

  ko.bindingHandlers.cityscape = {
    init: function(el) {
      
      var landscape = el;
      
      var parallaxLandscape = function(e) {

        var landscapeWidth = landscape.clientWidth,
            landscapeHeight = landscape.clientHeight,
            xOffset = -( (landscapeWidth / 2) - (e.pageX - landscape.offsetLeft) ),
            yOffset = (landscapeHeight - e.pageY);

        var layers = [
          {
            el: document.getElementById('landscape-layer-1'),
            width: 1200,
            yThreshold: 0.04
          },
          {
            el: document.getElementById('landscape-layer-2'),
            width: 1220,      
            yThreshold: 0.08
          },
          {
            el: document.getElementById('landscape-layer-3'),
            width: 1260,
            yThreshold: 0.15
          },
          {
            el: document.getElementById('landscape-layer-4'),
            width: 1315,
            yThreshold: 0.3
          }
        ];

        var transforms = [
          'msTransform',
          'webkitTransform',
          'mozTransform',
          'transform'
        ];

        layers.forEach(function(layer) {

          transforms.forEach(function(transform) {

            var parallaxOffset = -( (xOffset / landscapeWidth) * (layer.width - landscapeWidth) );

            layer.el.style[transform] = 'translate(' + parallaxOffset + 'px, ' + (yOffset * layer.yThreshold) + 'px)';

          });    
        });

      };

      landscape.addEventListener("mousemove", parallaxLandscape);
    }
  }
});

