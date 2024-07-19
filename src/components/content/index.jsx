import React from 'react';
import Activity from '../pages/Activity';
import Archive from '../pages/Archive';

const Content = ({ activeTab, activityItems, archiveItems, loading }) => {
  return (
    <div className="content">
      {activeTab === '1' && <Activity activityItems={activityItems} />}
      {activeTab === '2' && <Archive archiveItems={archiveItems} />}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Content;
