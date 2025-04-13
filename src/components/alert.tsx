import { useState, useEffect } from 'react';
import { XMarkIcon, CheckCircleIcon, ExclamationTriangleIcon, ExclamationCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

const Alert = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [message, setMessage] = useState('Hello')
  const [closable, setClosable] = useState(true)
  const type = 'info'
  const duration = 5000
  const onClose = ()=>{
    setMessage('Now closed')
  }

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  const alertTypes = {
    success: {
      bg: 'bg-green-50',
      text: 'text-green-800',
      border: 'border-green-100',
      icon: <CheckCircleIcon className="h-5 w-5 text-green-500" />,
    },
    error: {
      bg: 'bg-red-50',
      text: 'text-red-800',
      border: 'border-red-100',
      icon: <ExclamationCircleIcon className="h-5 w-5 text-red-500" />,
    },
    warning: {
      bg: 'bg-yellow-50',
      text: 'text-yellow-800',
      border: 'border-yellow-100',
      icon: <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />,
    },
    info: {
      bg: 'bg-blue-50',
      text: 'text-blue-800',
      border: 'border-blue-100',
      icon: <InformationCircleIcon className="h-5 w-5 text-blue-500" />,
    },
  };

  const currentType = alertTypes[type] || alertTypes.info;

  return (
    <div className={`fixed top-4 right-4 z-50 w-full max-w-sm ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
      <div className={`rounded-lg p-4 shadow-lg ${currentType.bg} ${currentType.border} border`}>
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {currentType.icon}
          </div>
          <div className="ml-3 flex-1">
            <p className={`text-sm font-medium ${currentType.text}`}>
              {message}
            </p>
          </div>
          {closable && (
            <div className="ml-4 flex-shrink-0 flex">
              <button
                className={`inline-flex rounded-md ${currentType.bg} ${currentType.text} hover:${currentType.bg.replace('50', '100')} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${type}-500`}
                onClick={handleClose}
              >
                <span className="sr-only">Close</span>
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Alert;