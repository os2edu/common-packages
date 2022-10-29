import React from 'react';
import { IHeaderProps } from './types';
import { classNamePrefix, logoURL, avatarURL } from './constants';
import DropDown from './components/Dropdown';

const Header = (props: IHeaderProps) => {
  const { logo, title, subTitle, extra, ...restProps } = props;
  const renderUserInfo = () => {
    return (
      <span className="inline-flex-wrap">
        {extra?.userInfo?.phone}
        <img
          width={30}
          src={extra?.userInfo?.avatar || avatarURL}
          alt="avatar"
        />
      </span>
    );
  };
  return (
    <header {...restProps}>
      <div className={`header-content ${classNamePrefix}-layout-content`}>
        <div className="inline-flex-wrap logo-wrap">
          <img src={logo || logoURL} alt="logo" id="logo" />
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
                renderUserInfo()
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
