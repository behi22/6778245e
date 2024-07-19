import React from 'react';
import { Tabs } from 'antd';

const Nav = ({ activeTab, onChange }) => {
  return (
    <Tabs activeKey={activeTab} onChange={onChange}>
      <Tabs.TabPane tab="Activity" key="1" />
      <Tabs.TabPane tab="Archive" key="2" />
    </Tabs>
  );
};

export default Nav;
