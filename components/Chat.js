import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';
import ChatMessage from './ChatMessage';

const HAPPY = [55357, 56832];
const SAD = [55357, 56864];
const NEUTRAL = [55357, 56848];

class Chat extends Component {
  state = { chats: [] };

  componentDidMount() {
    this.pusher = new Pusher(process.env.PUSHER_APP_KEY, {
      cluster: process.env.PUSHER_APP_CLUSTER,
      encrypted: true
    });

    this.channel = this.pusher.subscribe('chat-room');

    this.channel.bind('new-message', ({ chat }) => {
      this.setState(prev => ({ chats: [...prev.chats, chat] }));
    });

    this.pusher.connection.bind('connected', () => {
      axios.post('/messages').then(res => {
        this.setState({ chats: res.data.messages });
      });
    });
  }

  componentWillUnmount() {
    this.pusher.disconnect();
  }

  handleKeyUp = e => {
    if (e.keyCode === 13 && !e.shiftKey) {
      const message = e.target.value.trim();
      if (!message) return;

      const chat = {
        user: this.props.activeUser,
        message,
        timestamp: +new Date()
      };

      axios.post('/message', chat);
      e.target.value = '';
    }
  };

  render() {
    return (
      <Fragment>
        <div className="p-3 bg-light border-bottom">
          <strong>{this.props.activeUser}</strong>
        </div>
        <div className="px-3 py-2" style={{ height: '300px', overflowY: 'scroll' }}>
          {this.state.chats.map((chat, i) => {
            const emoji = chat.sentiment > 0 ? HAPPY : chat.sentiment < 0 ? SAD : NEUTRAL;
            const isCurrentUser = chat.user === this.props.activeUser;

            return (
              <div
                key={i}
                className="mb-2"
                style={{ backgroundColor: '#f8f9fa', padding: '6px 10px', borderRadius: '8px' }}
              >
                <div style={{ marginBottom: '4px' }}>
                  <span>{String.fromCodePoint(...emoji)} </span>
                  <strong style={{ color: '#333', fontSize: '14px' }}>{chat.user}</strong>
                </div>
                <ChatMessage
                  message={chat.message}
                  position={isCurrentUser ? 'right' : 'left'}
                />
              </div>
            );
          })}
        </div>
        <textarea
          className="form-control"
          onKeyUp={this.handleKeyUp}
          placeholder="Type and press Enter"
        />
      </Fragment>
    );
  }
}

export default Chat;
