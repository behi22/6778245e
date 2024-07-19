import { useState, useEffect } from 'react';
import { getCalls, updateCall } from '../api';
import { message } from 'antd';

const useCalls = () => {
  const [calls, setCalls] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCalls();
  }, []);

  const fetchCalls = async () => {
    setLoading(true);
    try {
      const data = await getCalls();
      setCalls(data);
    } catch (error) {
      console.error('Error fetching calls:', error);
    } finally {
      setLoading(false);
    }
  };

  const archiveAll = async () => {
    setLoading(true);
    try {
      const updatedCalls = await Promise.all(
        calls.map(async (call) => {
          if (!call.is_archived) {
            await updateCall({ id: call.id, isArchived: true });
            return { ...call, is_archived: true };
          }
          return call;
        })
      );
      setCalls(updatedCalls);
      message.success('All calls archived successfully');
    } catch (error) {
      console.error('Error archiving calls:', error);
      message.error('Failed to archive all calls');
    } finally {
      setLoading(false);
    }
  };

  const unarchiveAll = async () => {
    setLoading(true);
    try {
      const updatedCalls = await Promise.all(
        calls.map(async (call) => {
          if (call.is_archived) {
            await updateCall({ id: call.id, isArchived: false });
            return { ...call, is_archived: false };
          }
          return call;
        })
      );
      setCalls(updatedCalls);
      message.success('All calls unarchived successfully');
    } catch (error) {
      console.error('Error unarchiving calls:', error);
      message.error('Failed to unarchive all calls');
    } finally {
      setLoading(false);
    }
  };

  return {
    calls,
    loading,
    fetchCalls,
    archiveAll,
    unarchiveAll,
  };
};

export default useCalls;
