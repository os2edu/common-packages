import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Layout from '../src';

const App = () => {
  const headerProps = {
    subTitle: '课程培训',
    extra: {
      customRender: <span onClick={()=> console.log('click')}>社区首页</span>,
      userInfo: {
        phone: '17703401850',
      }
    },
  };
  return <Layout headerProps={headerProps} />;
};

ReactDOM.render(<App />, document.getElementById('root'));
