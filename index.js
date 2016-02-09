/**
 * Created by carla on 2016/01/17.
 */

slidr.create('slidr-id', {
    after: function(e) { console.log('in: ' + e.in.slidr); },
    before: function(e) { console.log('out: ' + e.out.slidr); },
    breadcrumbs: true,
    controls: 'border',
    direction: 'horizontal',
    fade: false,
    keyboard: true,
    overflow: true,
    pause: true,
    theme: '#FFFF',
    timing: { 'linear': false},
    touch: true,
    transition: 'linear'
}).start();