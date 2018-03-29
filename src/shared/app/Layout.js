/**
 * The menu content that is rendered here is queried on
 * the server-side in src/server/index.js.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Link as PrismicLink, RichText } from 'prismic-reactjs';
import PrismicConfig from '../../prismic-configuration';

export const Layout = (props) => {

  const menu = props.menu.data.menu_links.map(function(menuItem, index){
    var menuLink = PrismicLink.url(menuItem.link, PrismicConfig.linkResolver);
    var label = RichText.asText(menuItem.label);
    return <li key={index}><Link to={menuLink}>{label}</Link></li>;
  });
  
  return(
    <div className="app-container">
      <header className="site-header">
        <nav>
          <ul>{menu}</ul>
        </nav>
      </header>
      <div>{props.children}</div>
      <footer>
        <p>Published with  <a href="https://prismic.io" target="_blank">prismic.io</a> and  <a href="https://github.com/lamenath/arielle.git" target="_blank">React Universal</a><br/><a href="https://prismic.io" target="_blank"><img src="/images/logo-prismic.svg" className="footer-logo"/></a></p>
      </footer>
    </div>
  );
};

export default Layout;