if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

// Components
require('./components/motion-capture-recorder.js');
require('./components/motion-capture-player.js');
require('./components/avatar-recorder.js');
require('./components/avatar-player.js');
require('./components/stroke.js');

// Systems
require('./systems/motion-capture-recorder.js');
