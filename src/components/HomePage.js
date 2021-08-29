import React from 'react';
import classes from './homepage.module.scss';

const HomePage = () => {
  return (
    <div className={classes.homepage}>
      <div className={classes.directoryMenu}>
        <div className={classes.menuItem}>
          <div className={classes.content}>
            <h1 className={classes.title}>
              Hats
            </h1>
            <span className={classes.subtitle}>
              Shop Now
            </span>
          </div>
        </div>
        <div className={classes.menuItem}>
          <div className={classes.content}>
            <h1 className={classes.title}>
              Jacket
            </h1>
            <span className={classes.subtitle}>
              Shop Now
            </span>
          </div>
        </div>
        <div className={classes.menuItem}>
          <div className={classes.content}>
            <h1 className={classes.title}>
              Sneakers
            </h1>
            <span className={classes.subtitle}>
              Shop Now
            </span>
          </div>
        </div>
        <div className={classes.menuItem}>
          <div className={classes.content}>
            <h1 className={classes.title}>
              Womens
            </h1>
            <span className={classes.subtitle}>
              Shop Now
            </span>
          </div>
        </div>
        <div className={classes.menuItem}>
          <div className={classes.content}>
            <h1 className={classes.title}>
              Mens
            </h1>
            <span className={classes.subtitle}>
              Shop Now
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;