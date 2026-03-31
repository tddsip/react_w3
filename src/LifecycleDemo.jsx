import { useEffect, useState } from 'react';

function LifecycleDemo() {
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState([]);

  // componentDidMount - chạy 1 lần khi component mount
  useEffect(() => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev, `[${timestamp}] Mounted - Component được tạo`]);
    console.log('Mounted - Component được tạo');
  }, []);

  // componentDidUpdate - chạy mỗi khi count thay đổi
  useEffect(() => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev, `[${timestamp}] Updated - Count: ${count}`]);
    console.log('Updated - Count:', count);
  }, [count]);

  // componentWillUnmount - chạy khi component unmount
  useEffect(() => {
    return () => {
      const timestamp = new Date().toLocaleTimeString();
      console.log('Unmounted - Component bị xóa');
      alert(`[${timestamp}] Unmounted - Component bị xóa`);
    };
  }, []);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleClearLogs = () => {
    setLogs([]);
  };

  return (
    <div className="lifecycle-container">
      <div className="lifecycle-box">
        <h2>Lifecycle Demo</h2>

        <div className="counter-section">
          <p className="counter-text">Count: <span>{count}</span></p>
          <button onClick={handleIncrement} className="increment-btn">
            Tăng Count
          </button>
        </div>

        <div className="logs-section">
          <div className="logs-header">
            <h3>Lifecycle Logs</h3>
            <button onClick={handleClearLogs} className="clear-btn">
              Xóa Logs
            </button>
          </div>
          <div className="logs-box">
            {logs.length === 0 ? (
              <p className="no-logs">Chưa có log nào</p>
            ) : (
              logs.map((log, index) => (
                <div key={index} className="log-item">
                  {log}
                </div>
              ))
            )}
          </div>
        </div>

        <p className="info-text">
          Mở DevTools Console để xem chi tiết. Unmount component để thấy "Unmounted" log.
        </p>
      </div>
    </div>
  );
}

export default LifecycleDemo;