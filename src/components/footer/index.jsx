import React from 'react';
import '../../css/app.css';
import {
  PhoneOutlined,
  UserOutlined,
  PoweroffOutlined,
  MessageOutlined,
  AudioOutlined,
} from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className="appFooter">
      <div className="appFooter-icons">
        <PhoneOutlined style={{ fontSize: '50px', color: '#2ac420' }} />
        <UserOutlined style={{ fontSize: '50px' }} />
        <PoweroffOutlined style={{ fontSize: '70px' }} />
        <MessageOutlined style={{ fontSize: '50px' }} />
        <AudioOutlined style={{ fontSize: '50px' }} />
      </div>
    </footer>
  );
};

export default Footer;
