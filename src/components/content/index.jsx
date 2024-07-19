import React from 'react';
import '../../css/content.css';
import Activity from '../pages/Activity';
import Archive from '../pages/Archive';

const Content = ({
  activeTab,
  activityItems,
  archiveItems,
  onArchiveCall,
  onUnarchiveCall,
  loading,
}) => {
  return (
    <div className="content">
      {activeTab === '1' && (
        <Activity activityItems={activityItems} onArchiveCall={onArchiveCall} />
      )}
      {activeTab === '2' && (
        <Archive
          archiveItems={archiveItems}
          onUnarchiveCall={onUnarchiveCall}
        />
      )}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Content;
