import React from 'react';
import classes from './Modal.module.css'

const Modal = ({children, visible, setVisible}) => {
  
  const rootClasses = [classes.wrapper]
  if (visible) {
    rootClasses.push(classes.active)
  }
  
  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={classes.content} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;