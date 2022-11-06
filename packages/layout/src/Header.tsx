import React from 'react';
import { IHeaderProps } from './types';
import { logoURL, avatarURL, classNamePrefix } from './constants';
import DropDown from './components/Dropdown';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  height: 56px;
  font-size: 13px;
  color: #1e1e1e;
  background-color: #fff;

  & > .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 32px;
    .inline-flex-wrap {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .extra-wrap,
    .logo-wrap {
      gap: 6px;
    }

    .logo-wrap .logo-title {
      font-size: 18px;
      font-weight: 600;
      display: inline-flex;
      flex-direction: column;
      gap: 8px;
      align-items: flex-start;
      color: #333;
    }

    .logo-wrap .logo-title a {
      text-decoration: none;
      color: #333;
    }
    .logo-wrap .logo-title a:hover {
      opacity: 0.8;
    }

    .logo-wrap .logo-title .logo-subtitle {
      font-size: 14px;
      font-weight: 200;
      cursor: pointer;
    }

    .logo-wrap .logo-title .logo-subtitle:hover {
      color: #ff589e;
      opacity: 0.8;
    }
  }
`;

const Header = (props: IHeaderProps) => {
  const { logo, title, subTitle, extra, ...restProps } = props;
  const renderUserInfo = () => {
    return (
      <>
        <img
          width={30}
          src={extra?.userInfo?.avatar || avatarURL}
          alt="avatar"
        />
        {extra?.userInfo?.phone}
      </>
    );
  };
  return (
    <HeaderStyled {...restProps} className={`${classNamePrefix}-header`}>
      <div className="header-content">
        <div className="inline-flex-wrap logo-wrap">
          <img
            style={{ width: 46 }}
            src={logo || logoURL}
            alt="logo"
            id="logo"
          />
          <div className="logo-title">
            <a href="https://os2edu.cn/homepage/">
              {title || '开源操作系统社区'}
            </a>
            {subTitle && <span className="logo-subtitle">{subTitle}</span>}
          </div>
        </div>
        <div className="inline-flex-wrap extra-wrap">
          {extra?.customRender && (
            <span className="inline-flex-wrap extra-wrap-custom">
              {extra.customRender}
            </span>
          )}
          {extra?.userInfo && (
            <>
              {extra.dropMenu ? (
                <DropDown menu={extra.dropMenu}>{renderUserInfo()}</DropDown>
              ) : (
                <span className="inline-flex-wrap">{renderUserInfo()}</span>
              )}
            </>
          )}
        </div>
      </div>
    </HeaderStyled>
  );
};
export default Header;
