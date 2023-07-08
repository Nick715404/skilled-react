import React from 'react'
import styles from '../_videoStatus/Status.module.css';

function Status() {
  return (
    <div className='status'>
      <span className={styles.status__span}>Online</span>
    </div>
  )
}

export default Status
