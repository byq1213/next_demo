import React, { useEffect, useState } from 'react'
import s from './index.module.scss'
import * as dayjs from 'dayjs'
function formatTime(time){
    return time.toLocaleString().replaceAll('/', '-')
}
export default function ShenINin() {

    const [time, setTime] = useState(new Date());
    // requestAnimationFrame(() => {
    //     setTime(new Date())
    // })
    
    useEffect(()=>{
        // return function(){
            requestAnimationFrame && requestAnimationFrame(()=>{
                setTime(new Date())
            })
        // }
    })
    return (
        <div className={s.sin}>
            <style global jsx>{`
            body{
                background-image: linear-gradient(#348afe, #fff);
                background-repeat: no-repeat;
            }
      `}</style>
            <div className={s.first}>
                <div className={s.name}>
                    白*琦
                    <span className={s.iconfont} style={{ marginLeft: 4, color: '#999' }}>&#xe7b2;</span>
                </div>
                <div className={s.time}>{dayjs().format('YYYY-MM-DD HH:mm:ss')}</div>
                <div className={s.qrcode}>
                    <img src="./images/qrcode.png" alt="" />
                </div>

                <div className={s.state}>
                    <img src="./images/code_green.png" alt="" />
                </div>

                <div className={s.refreshBtn}>
                    <span className={s.iconfont}>&#xe641;</span>
                    <span>刷新健康码</span>
                </div>
            </div>
            <div className={s.second}>
                <div className={s.left}>
                    <p className={s.line1}>
                        <span className={s.iconfont}>&#xe627;</span>
                        <span style={{ margin: '0 2px' }}>核酸检测</span>
                        <span className={s.iconfont}> &#xe743;</span>
                    </p>
                    <div className={s.line2}>
                        <span className={s.dayNum}>24</span>
                        <span className={s.hoursUnit}>小时阴性</span>
                    </div>
                    <div className={s.line3}>{dayjs().subtract(1, 'day').format('YYYY-MM-DD')} 8:10:00</div>
                </div>
                <div className={s.right}>
                    <p className={s.line1}>
                        <span className={s.iconfont}>&#xe715;</span>
                        <span className={s.text}>新冠疫苗</span>
                        <span className={s.iconfont}>&#xe743;</span>
                    </p>
                    <p className={s.line2}>第3针</p>
                    <p className={s.line3}>已接种第200天</p>
                    <p className={s.line4}>{dayjs().format('YYYY-MM-DD')}</p>
                </div>
            </div>
            <div className={s.three}>

                <span className={s.text}>
                    <img src="./images/local.png" alt="" />
                    <span>出示行程卡</span>
                </span>
                <span className={s.rightText}>
                    <span className={s.t}>核酸行程</span>
                    <span className={s.iconfont}>&#xe743;</span>
                </span>
            </div>
        </div>
    )
}
