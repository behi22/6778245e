import { useState, useEffect } from 'react';
import { getCalls, updateCall, resetCalls } from '../api';

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
    } catch (error) {
      console.error('Error archiving calls:', error);
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
    } catch (error) {
      console.error('Error unarchiving calls:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetAllCalls = async () => {
    setLoading(true);
    try {
      await resetCalls();
      fetchCalls();
    } catch (error) {
      console.error('Error resetting calls:', error);
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
    resetCalls: resetAllCalls,
  };
};

export default useCalls;
