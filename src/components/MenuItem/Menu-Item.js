import React from 'react';
import classes from './menu-item.module.scss';

const MenuItem = ({ title, imageUrl, size }) => {

  const menuStyle = size ? `${classes.menuItem} ${classes.large}` : `${classes.menuItem}`;

  return (
    <div className={menuStyle}>
      <div className={classes.backgroundImage}
        style={{
          backgroundImage: `url(${imageUrl})`
        }} />
      <div className={classes.content}>
        <h1 className={classes.title}>
          {title.toUpperCase()}
        </h1>
        <span className={classes.subtitle}>
          Shop Now
        </span>
      </div>
    </div>
  )
}

export default MenuItem;

