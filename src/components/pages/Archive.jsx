import React, { useState } from 'react';
import { Timeline, Button, message } from 'antd';
import { formatDateTime, formatDuration } from '../../assets/helper';
import { updateCall } from '../../assets/api';

const Archive = ({ archiveItems, onUnarchiveCall }) => {
  if (!archiveItems || archiveItems.length === 0) {
    return <p>No archived items to display</p>;
  }

  const [items, setItems] = useState(archiveItems);

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

  return (
    <div className="archive">
      <Timeline>
        {archiveItems.map((call) => (
          <Timeline.Item key={call.id}>
            <p>
              <strong>Caller's Number:</strong> {call.from}
            </p>
            <p>
              <strong>Call Type:</strong> {call.call_type}
            </p>
            <p>
              <strong>Created At:</strong>{' '}
              {formatDateTime(call.created_at).join(' ')}
            </p>
            <p>
              <strong>Duration:</strong> {formatDuration(call.duration)}
            </p>
            <Button type="primary" onClick={() => handleUnarchiveCall(call.id)}>
              Unarchive
            </Button>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};

export default Archive;
