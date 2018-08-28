require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
	      <span>测试git提交</span>
	      <span>测试git提交第二次</span>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
