import React from 'react';
import { Card, Button } from 'antd';
import { formatDateTime, formatDuration } from '../../assets/helper';

const CallCard = ({ call, onAction, actionLabel, isActive, onClick }) => {
  const handleAction = async () => {
    try {
      await onAction(call.id);
    } catch (error) {
      console.error(`Error ${actionLabel.toLowerCase()} call:`, error);
    }
  };

  return (
    <Card
      title={`Call From: ${call.from}`}
      onClick={onClick}
      style={{
        marginBottom: 16,
        cursor: 'pointer',
        backgroundColor: isActive ? '#f0f0f0' : 'inherit',
      }}
    >
      <strong>{call.direction}</strong>
      <p>{formatDateTime(call.created_at).join(' ')}</p>
      {isActive && (
        <>
          <p>
            <strong>Recieved By: </strong>
            {call.to}
          </p>
          <p>
            <strong>{call.call_type}</strong>
          </p>
          <p>
            <strong>Call Duration: </strong>
            {formatDuration(call.duration)}
          </p>
          <Button type="primary" onClick={handleAction}>
            {actionLabel}
          </Button>
        </>
      )}
    </Card>
  );
};

export default CallCard;
