import React, { useState } from 'react';
import { Timeline, Button, message } from 'antd';
import { formatDateTime, formatDuration } from '../../assets/helper';
import { updateCall } from '../../assets/api';

const Activity = ({ activityItems, onArchiveCall }) => {
  if (!activityItems || activityItems.length === 0) {
    return <p>No activity items to display</p>;
  }

  const [items, setItems] = useState(activityItems);

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

  return (
    <div>
      <Timeline>
        {activityItems.map((item) => (
          <Timeline.Item key={item.id}>
            <p>
              <strong>Caller's Number:</strong> {item.from}
            </p>
            <p>
              <strong>Call Type:</strong> {item.call_type}
            </p>
            <p>
              <strong>Created At:</strong>{' '}
              {formatDateTime(item.created_at).join(' ')}
            </p>
            <p>
              <strong>Duration:</strong> {formatDuration(item.duration)}
            </p>
            <Button type="primary" onClick={() => handleArchiveCall(item.id)}>
              Archive
            </Button>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};

export default Activity;
