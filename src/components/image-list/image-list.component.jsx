import React from 'react';

import './image-list.styles.css';
import { Image } from '../image/image.component';

export const ImageList = props => {
  return (
    <div className="image-list">
      {
        props.items.map(item => (
          <Image key={item.title} item={item}></Image>
        ))
      }
    </div>);
}