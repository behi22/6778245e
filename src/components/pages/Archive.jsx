import React, { useState } from 'react';
import { Timeline, Button, message } from 'antd';
import { formatDateTime, formatDuration } from '../../assets/helper';
import { updateCall } from '../../assets/api';
import CallCard from './CallCard';

const Archive = ({ activeTab, archiveItems, onUnarchiveCall }) => {
  if (!archiveItems || archiveItems.length === 0) {
    return <p>No archived items to display</p>;
  }

  const [items, setItems] = useState(archiveItems);
  const [expandedCallId, setExpandedCallId] = useState(null);

  const handleUnarchiveCall = async (id) => {
    try {
      await updateCall({ id, isArchived: false });
      onUnarchiveCall(id);
      message.success('Call unarchived successfully');
      const updatedItems = items.map((item) =>
        item.id === id ? { ...item, is_archived: false } : item
      );
      setItems(updatedItems);
    } catch (error) {
      console.error('Error unarchiving call:', error);
      message.error('Failed to unarchive call');
    }
  };

  const toggleCard = (id) => {
    if (expandedCallId === id) {
      setExpandedCallId(null);
    } else {
      setExpandedCallId(id);
    }
  };

  return (
    <div className="archive">
      <Timeline>
        {archiveItems.map((item) => (
          <Timeline.Item key={item.id}>
            <CallCard
              call={item}
              onAction={handleUnarchiveCall}
              actionLabel="Unarchive"
              isActive={expandedCallId === item.id}
              onClick={() => toggleCard(item.id)}
            />
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};

export default Archive;
