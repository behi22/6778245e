import React from 'react';

const TabContentsComponent = ({ activeTab, activityItems, archiveItems }) => {
  return (
    <div>
      {activeTab === '1' && (
        <div>
          {activityItems.map(item => (
            <p key={item.id}>{item.text}</p>
          ))}
        </div>
      )}
      {activeTab === '2' && (
        <div>
          {archiveItems.map(item => (
            <p key={item.id}>{item.text}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default TabContentsComponent;
