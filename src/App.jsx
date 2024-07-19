import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import Header from './components/header';
import Nav from './components/nav';
import Content from './components/content';
import ChangeButton from './components/changeButton';
import Footer from './components/footer';

import useCalls from './assets/api/useCalls';

const App = () => {
  const { calls, fetchCalls, archiveAll, unarchiveAll, loading } = useCalls();
  const [activeTab, setActiveTab] = useState('1');

  useEffect(() => {
    fetchCalls();
  }, []);

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  const handleArchiveAll = async () => {
    if (activeTab === '1') {
      await archiveAll();
      fetchCalls();
    }
  };

  const handleUnarchiveAll = async () => {
    if (activeTab === '2') {
      await unarchiveAll();
      fetchCalls();
    }
  };

  const handleArchiveCall = async (id) => {
    try {
      await fetchCalls();
    } catch (error) {
      console.error('Error archiving call:', error);
    }
  };

  const handleUnarchiveCall = async (id) => {
    try {
      await fetchCalls();
    } catch (error) {
      console.error('Error unarchiving call:', error);
    }
  };

  return (
    <div className="container">
      <Header />
      <Nav activeTab={activeTab} onChange={handleTabChange} />
      <ChangeButton
        activeTab={activeTab}
        onArchiveAll={handleArchiveAll}
        onUnarchiveAll={handleUnarchiveAll}
      />
      <Content
        activeTab={activeTab}
        activityItems={calls.filter((call) => !call.is_archived)}
        archiveItems={calls.filter((call) => call.is_archived)}
        loading={loading}
        onArchiveCall={handleArchiveCall}
        onUnarchiveCall={handleUnarchiveCall}
      />
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);

export default App;
