import React from 'react'
import styles from './index.module.scss'
// import './index.scss'
export default function YSS() {
  return (
    <>
        <style global jsx>{`
    body{
        background-color: #9090ff;
        background-image: url(https://wyj-1301188774.file.myqcloud.com/images/code/code_background.png);
        background-size: auto;
    background-origin: border-box;
    background-clip: border-box;
        animation: animatedBackground 5s linear infinite ;
    }

    @keyframes animatedBackground {
        from {
          background-position: 0% 0%;
    <div>ShenINin</div>
        }
        to {
          background-position: 0% 100%;
        }
      }
      `}</style>
        <div className={styles.yss}>
            yss
        </div>
    </>
  )
}
