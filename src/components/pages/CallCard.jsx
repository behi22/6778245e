import React, { useState } from 'react';
import { Card, Button, Typography } from 'antd';
import { formatDateTime, formatDuration } from '../../assets/helper';
import { updateCall } from '../../assets/api';

const { Text } = Typography;

const CallCard = ({ call, onAction, actionLabel }) => {
  const [expanded, setExpanded] = useState(false);

  const handleAction = async () => {
    try {
      await onAction(call.id);
      setExpanded(false);
    } catch (error) {
      console.error(`Error ${actionLabel.toLowerCase()} call:`, error);
    }
  };

  return (
    <Card
      title={`Caller's Number: ${call.from}`}
      onClick={() => setExpanded(!expanded)}
      style={{ marginBottom: 16, cursor: 'pointer' }}
    >
      <p>
        <strong>Call Type:</strong> {call.call_type}
      </p>
      <p>
        <strong>Created At:</strong> {formatDateTime(call.created_at).join(' ')}
      </p>

      {expanded && (
        <>
          <p>
            <strong>Duration:</strong> {formatDuration(call.duration)}
          </p>
          <p>
            <strong>Air Call Number:</strong> {call.air_call_number}
          </p>
          <Button type="primary" onClick={handleAction}>
            {actionLabel}
          </Button>
          <Button style={{ marginLeft: 8 }} onClick={() => setExpanded(false)}>
            Back to All Calls
          </Button>
        </>
      )}
    </Card>
  );
};

export default CallCard;
