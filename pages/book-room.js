import React from 'react'
import styles from '../components/bookRoom.module.scss'
import axios from 'axios'
import { useEffect,useState } from 'react'
function bookroom() {

    const [data, setdata] = useState()

    useEffect(() => {
        axios.get('https://university-living-api.vercel.app/').then((res) => {
            console.log("cd", res.data[0].rent)
            setdata(res.data)
        })
    }, [])

    return (
        <>
            <div className={styles.container}>
                <div>
                    <div className={styles.container__contain}>
                        <p>
                            CHAPTER KINGS CROSS(BRONZE ENSUITE)
                        </p>
                    </div>

                </div>
            </div>
            <div className={styles.wrapper}>
                <p>
                    Sep 24 - Aug 25 (51 Weeks) 7 September 2024 - 29 August 2025
                </p>
               {data && data.map((val,indx)=>{
                // console.log(val)
                return(
                    <div className={styles.box}>

                    <div style={{ width: '40%' }}>
                        <div>
                            <div className={styles.subbox}>
                                <p style={{ fontWeight: 'bolder' }}>
                                    Building
                                </p>
                                <p>Chapter Kings Cross</p>
                            </div>
                            <div className={styles.subbox}>
                                <p style={{ fontWeight: 'bolder' }}>
                                    Rent
                                </p>
                                <p>
                                    {val?.rent}</p>
                            </div>
                            <div className={styles.subbox}>
                                <p style={{ fontWeight: 'bolder' }}>
                                    Deposit
                                </p>
                                <p>{val?.deposit}</p>
                            </div>
                            <div className={styles.subbox}>
                                <p style={{ fontWeight: 'bolder' }}>
                                    Amenities
                                </p>
                                <p>{val.aminities}</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '40%' }}>
                        <div>
                            <p><b>Unit Spaces</b></p>
                            <div style={{ display: 'flex' }}>
                                <div>
                                    <p><b>Unit</b>{val.space[0].spaceUnit}</p>
                                    <p><b>Total Amount</b>{val.space[0].totalAmount}</p>
                                </div>
                                <div>
                                    <p><b>Unit</b>{val.space[1].spaceUnit}</p>
                                    <p><b>Total Amount</b>{val.space[1].totalAmount}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
               }) 
               }
            </div>
        </>
    )
}

export default bookroom