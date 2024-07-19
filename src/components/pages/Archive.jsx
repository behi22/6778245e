import React from 'react';
import { Timeline } from 'antd';
import { formatDateTime, formatDuration } from '../../assets/helper';

const Archive = ({ archiveItems }) => {
  if (!archiveItems || archiveItems.length === 0) {
    return <p>No archived items to display</p>;
  }

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
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};

export default Archive;
