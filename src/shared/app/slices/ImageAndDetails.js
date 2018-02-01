import React from 'react';
import { Link } from 'react-router-dom';
import { Link as PrismicLink, RichText } from 'prismic-reactjs';
import PrismicConfig from '../../../prismic-configuration';

export const ImageAndDetails = (props) => {
  
  var details = props.slice;
  
  return (
    <section className="details content-section">
      <div className="details-left">
        <img src={ details.primary.detail_image_1.url } />
        <img src={ details.primary.detail_image_2.url } />
      </div>
      <div className="details-right">
        <img src={ details.primary.featured_image.url } />
      </div>
    </section>
  );
};

export default ImageAndDetails;