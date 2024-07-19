import React, { useState } from 'react';
import { Timeline, Button, message } from 'antd';
import { formatDateTime, formatDuration } from '../../assets/helper';
import { updateCall } from '../../assets/api';
import CallCard from './CallCard';

const Activity = ({ activeTab, activityItems, onArchiveCall }) => {
  if (!activityItems || activityItems.length === 0) {
    return <p>No activity items to display</p>;
  }

  const [items, setItems] = useState(activityItems);
  const [expandedCallId, setExpandedCallId] = useState(null);

  const handleArchiveCall = async (id) => {
    try {
      await updateCall({ id, isArchived: true });
      onArchiveCall(id);
      message.success('Call archived successfully');
      const updatedItems = items.map((item) =>
        item.id === id ? { ...item, is_archived: true } : item
      );
      setItems(updatedItems);
    } catch (error) {
      console.error('Error archiving call:', error);
      message.error('Failed to archive call');
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
    <div>
      <Timeline>
        {activityItems.map((item) => (
          <Timeline.Item key={item.id}>
            <CallCard
              call={item}
              onAction={handleArchiveCall}
              actionLabel="Archive"
              isActive={expandedCallId === item.id}
              onClick={() => toggleCard(item.id)}
            />
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};

export default Activity;
