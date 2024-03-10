// USBDetection.js
import React, { useEffect, useState } from 'react';
import usbDetection from 'usb-detection';

const USBDetection = ({ onUSBInsert }) => {
  const [usbDetected, setUsbDetected] = useState(false);

  useEffect(() => {
    const handleInsert = (device) => {
      setUsbDetected(true);
      onUSBInsert(device);
    };

    const handleRemove = () => {
      setUsbDetected(false);
    };

    // Start USB detection
    usbDetection.startMonitoring();

    // Event listeners
    usbDetection.on('add', handleInsert);
    usbDetection.on('remove', handleRemove);

    // Clean up on component unmount
    return () => {
      usbDetection.stopMonitoring();
      usbDetection.removeAllListeners();
    };
  }, [onUSBInsert]);

  return <div>{usbDetected ? 'USB Device Inserted' : 'Waiting for USB device...'}</div>;
};

export default USBDetection;
