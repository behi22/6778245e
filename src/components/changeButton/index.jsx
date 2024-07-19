import React from 'react';
import { Button } from 'antd';
import '../../css/app.css';

const ChangeButton = ({ activeTab, onArchiveAll, onUnarchiveAll }) => {
  return (
    <div className="changeButtonContainer">
      {activeTab === '1' && (
        <Button
          type="primary"
          style={{ backgroundColor: '#2AC420', borderColor: '#2AC420' }}
          onClick={onArchiveAll}
        >
          Archive All
        </Button>
      )}
      {activeTab === '2' && (
        <Button
          type="primary"
          style={{ backgroundColor: '#2AC420', borderColor: '#2AC420' }}
          onClick={onUnarchiveAll}
        >
          Unarchive All
        </Button>
      )}
    </div>
  );
};

export default ChangeButton;
