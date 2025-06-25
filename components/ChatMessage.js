import React from 'react';

const ChatMessage = ({ message, position }) => {
  const isRight = position === 'right';
  return (
    <div className={`d-flex ${isRight ? 'justify-content-end' : 'justify-content-start'} my-1`}>
      <div className="p-2 bg-secondary text-white rounded" style={{ maxWidth: '60%' }}>
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;
