import React, { Component } from 'react';
import Layout from '../components/Layout';
import Chat from '../components/Chat';

class IndexPage extends Component {
  state = { user: null };

  handleKeyUp = e => {
    if (e.keyCode === 13) {
      this.setState({ user: e.target.value });
    }
  };

  render() {
    const { user } = this.state;
    return (
      <Layout pageTitle="Realtime Chat">
        <main className="container-fluid h-100 bg-dark text-light">
          <div className="row h-100">
            <div className="col-md-8 d-flex align-items-center justify-content-center">
              {!user ? (
                <input
                  type="text"
                  className="form-control text-center"
                  placeholder="What's your name?"
                  onKeyUp={this.handleKeyUp}
                />
              ) : (
                <h1>Hello, {user}</h1>
              )}
            </div>
            <div className="col-md-4 bg-white p-0">
              {user && <Chat activeUser={user} />}
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}

export default IndexPage;
