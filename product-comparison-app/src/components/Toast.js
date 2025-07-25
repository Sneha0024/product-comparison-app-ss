import React, { useEffect } from "react";

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timeout = setTimeout(onClose, 3000); // Auto close in 3s
    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div className="toast">
      🚨 {message}
    </div>
  );
};

export default Toast;
