import React from 'react';
import { Link } from 'react-router-dom';
import { Link as PrismicLink, RichText } from 'prismic-reactjs';
import PrismicConfig from '../../../prismic-configuration';

export const Squares = (props) => {
  
  var squares = props.slice;
  
  return (
    <section className="squares content-section">
      <div className="squares-left">
        <div className="square-top"><img src={ squares.primary.image1.url } /></div>
        <div className="square-bottom"><img src={ squares.primary.image2.url } /></div>
      </div>
      <div className="squares-right">
        <div className="square-top"><img src={ squares.primary.image3.url } /></div>
        <div className="square-bottom"><img src={ squares.primary.image4.url } /></div>
      </div>
    </section>
  );
};

export default Squares;