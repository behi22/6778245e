import React from 'react';
import { Timeline } from 'antd';
import { formatDateTime, formatDuration } from '../../assets/helper';

const Activity = ({ activityItems }) => {
  if (!activityItems || activityItems.length === 0) {
    return <p>No activity items to display</p>;
  }

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
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};

export default Activity;
