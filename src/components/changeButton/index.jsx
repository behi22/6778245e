import React from 'react';
import { Button } from 'antd';

const ChangeButton = ({ activeTab, onArchiveAll, onUnarchiveAll }) => {
  return (
    <div>
      {activeTab === '1' && <Button onClick={onArchiveAll}>Archive All</Button>}
      {activeTab === '2' && (
        <Button onClick={onUnarchiveAll}>Unarchive All</Button>
      )}
    </div>
  );
};

export default ChangeButton;
