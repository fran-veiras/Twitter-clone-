import styles from './styles.module.css';
import React from 'react';

export const Avatar = ({ alt, src, text }) => {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} alt={alt} src={src} title={alt}></img>
      {text && <strong>{text}</strong>}
    </div>
  );
};
