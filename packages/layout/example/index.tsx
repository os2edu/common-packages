import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Layout, { MainContent } from '../src';

const App = () => {
  const headerProps = {
    subTitle: '课程培训2',
    extra: {
      customRender: <span onClick={() => console.log('click')}>社区首页</span>,
      dropMenu: [
        {
          key: 'first',
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
  return (
    <Layout headerProps={headerProps}>
      <MainContent>主内容</MainContent>
    </Layout>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
