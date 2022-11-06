import React, { useState, useRef, useEffect } from 'react';
import { classNamePrefix } from '../../constants';
import DropDownIcon from '../Icons/Dropdown';
import styled from 'styled-components';

// import './index.css';

const DropdownDiv = styled.div`
  &.os2edu-dropdown {
    position: relative;
    line-height: 32px;
    .dropdown-trigger {
      gap: 8px;
      .dropdown-trigger-icon svg {
        cursor: pointer;
        margin-left: 2px;
        transform: scale(1.4);
        transition: all 0.1s ease 0s;
        font-size: 20px;

        &:hover {
          color: #1890ff;
        }
      }
    }
  }

  .dropdown-menu {
    position: absolute;
    right: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 4px;
    outline: none;
    width: fit-content;
    padding: 0;
    opacity: 0;
    min-width: 110px;
    transition: all 0.3s ease 0s;
    & > span {
      height: 36px;
      line-height: 36px;
      width: 100%;
      text-align: center;
      border-top: 1px solid #e8e8e8;
      padding: 0 20px;
      font-size: 14px;
      cursor: pointer;

      &:hover {
        background: #e6f7ff;
        color: #1890ff;
      }
      &:nth-child(1) {
        border-top: none;
      }
    }
  }

  &.os2edu-dropdown-open .dropdown-trigger .dropdown-trigger-icon svg {
    transition: all 0.1s ease 0s;
    transform: rotate(180deg) scale(1.4);
  }

  &.os2edu-dropdown-open .dropdown-menu {
    border-color: #e8e8e8;
    transition: all 0.3s ease 0s;
    height: fit-content;
    margin-top: 10px;
    padding: 10px 0;
    opacity: 1;
    &::before {
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      top: -8px;
      right: 12px;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid #e8e8e8;
    }
    &::after {
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      top: -7px;
      right: 12px;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid #fff;
    }
  }
`;

interface IMenuItem {
  key: string;
  title: string;
  onClick?(): void;
}

interface IProps {
  menu: IMenuItem[];
}
const Dropdown = (props: React.PropsWithChildren<IProps>) => {
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const openDropMenu = () => {
    setVisible(true);
    ref.current?.focus();
  };
  const closeDropMenu = () => {
    setVisible(false);
  };
  const handleItemClick = (item: IMenuItem) => {
    ref.current?.blur();
    closeDropMenu();
    item.onClick?.();
  };

  useEffect(() => {
    if (wrapperRef.current) {
      const { height } = wrapperRef.current.getBoundingClientRect();
      if (ref.current) {
        ref.current.style.top = `${height}px`;
      }
    }
  }, [wrapperRef.current, props.children]);

  return (
    <DropdownDiv
      ref={wrapperRef}
      className={`${classNamePrefix}-dropdown inline-flex-wrap ${
        visible ? `${classNamePrefix}-dropdown-open` : ''
      }`}
    >
      <div className="dropdown-trigger inline-flex-wrap" onClick={openDropMenu}>
        {props.children}
        <span className="dropdown-trigger-icon">
          <DropDownIcon />
        </span>
      </div>
      <div
        ref={ref}
        className="dropdown-menu"
        tabIndex={0}
        onBlur={closeDropMenu}
      >
        {props.menu.map((item) => (
          <span key={item.key} onClick={() => handleItemClick(item)}>
            {item.title}
          </span>
        ))}
      </div>
    </DropdownDiv>
  );
};
export default Dropdown;
