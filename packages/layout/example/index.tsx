import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Layout from '../src';

const App = () => {
  const headerProps = {
    subTitle: '课程培训2',
    extra: {
      customRender: <span onClick={() => console.log('click')}>社区首页</span>,
      dropMenu: [
        {
          key: 'first-11-2',
          title: 'first',
          onClick: () => console.log('first'),
        },
        {
          key: 'second',
          title: 'second',
          onClick: () => console.log('second'),
        },
        {
          key: 'third',
          title: 'third',
          onClick: () => console.log('third'),
        },
      ],
      userInfo: {
        phone: '17703401850',
      },
    },
  };
  return <Layout headerProps={headerProps} />;
};

ReactDOM.render(<App />, document.getElementById('root'));
