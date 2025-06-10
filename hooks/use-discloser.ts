import { useState } from 'react';

/**
 * Mostly use with modal
 */
export const useDiscloser = () => {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  function toggle() {
    setIsOpen(!isOpen);
  }

  return { isOpen, isClose: !isOpen, open, close, toggle };
};
