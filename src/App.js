import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">gezi-pedia.com</a>
          </div>
          <div className="social">
       
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1 className="h">Çok Yakında Sizlerle</h1>
            <p>Gezginlerin deneyimlerini paylaştığı, sorularına gerçek cevaplar bulduğu yeni nesil seyahat forumu hazırlanıyor.</p>
          </div>
          <a href="mailto:erkanndemirr27@gmail.com">
            <div className="cta">Bize Sorun</div>
          </a>
        </div>
        <div className="footer">
          <span>made by <a className="underlined" href="" target="_blank" rel="noopener noreferrer">Slash Dijital</a></span>
        </div>
      </div>
    );
  }
}

export default App;