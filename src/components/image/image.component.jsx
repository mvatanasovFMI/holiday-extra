import React from 'react';

import './image.styles.css';

export const Image = ({ item }) => {
  return (
    <div className="image-container">
      <img alt={item.title} src={item.media.m}></img>
      <h2> {item?.title} by <i>{item?.author}</i></h2>
      <p> {item?.description} </p>
      <p> {item.tags} </p>
    </div>
  );
}