import React from 'react';
import { ILayoutProps } from './types';
import { classNamePrefix } from './constants';
import Header from './Header';
import MainContent from './MainContent';
import styled from 'styled-components';

const Dd = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  background-color: #f5f5f5;
  -webkit-font-smoothing: antialiased;

  & > main {
    flex: 1;
    overflow: auto;
  }

  @media (min-width: 200px) and (max-width: 600px) {
    .os2edu-layout > header {
      height: 50px;
    }
    .logo-wrap .logo-title a {
      font-size: 16px;
    }

    .logo-wrap .logo-title .logo-subtitle {
      display: none;
    }
    .header-content {
      padding: 0 10px;
    }
    .header-content .extra-wrap {
      display: none;
    }
  }
`;

export { Header, MainContent };

const Layout = (props: React.PropsWithChildren<ILayoutProps>) => {
  const { headerProps, className: cln, children, ...restProps } = props;

  let className = `${classNamePrefix}-layout`;
  if (cln) {
    className += ` ${cln}`;
  }
  return (
    <Dd {...restProps} className={className}>
      <Header {...headerProps} />
      <main>{children}</main>
    </Dd>
  );
};

export default Layout;
