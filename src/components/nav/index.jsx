import React from 'react';
import { Tabs } from 'antd';

const Nav = ({ activeTab, onChange }) => {
  const tabItems = [
    { key: '1', tab: 'Activity' },
    { key: '2', tab: 'Archive' },
  ];

  return (
    <Tabs activeKey={activeTab} onChange={onChange}>
      {tabItems.map((item) => (
        <Tabs.TabPane key={item.key} tab={item.tab} />
      ))}
    </Tabs>
  );
};

export default Nav;
