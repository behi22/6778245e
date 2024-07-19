import React from 'react';
import { Tabs } from 'antd';
import '../../css/app.css';

const Nav = ({ activeTab, onChange }) => {
  const tabItems = [
    { key: '1', tab: 'Activity' },
    { key: '2', tab: 'Archive' },
  ];

  return (
    <div className="appNav">
      <Tabs activeKey={activeTab} onChange={onChange} size={'large'}>
        {tabItems.map((item) => (
          <Tabs.TabPane key={item.key} tab={item.tab} />
        ))}
      </Tabs>
    </div>
  );
};

export default Nav;
