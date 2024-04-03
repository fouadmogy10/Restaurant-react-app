import React from 'react'
import { Card as CB } from 'react-bootstrap'

const Card = ({item,count}) => {
  return (
    <CB className="bg-transparent border-0 text-center best-card">
                <CB.Body className='d-flex flex-column  gap-4' style={{
                    minHeight:"300px"
                }}>
                  <CB.Title>
                    <div className="img d-flex justify-content-center">
                      <img
                        src={item.img}
                        width={80}
                        height={80}
                        alt=""
                        style={{
                          marginRight: "-30px",
                          zIndex: "1",
                        }}
                      />
                      <div
                        className="bg-primary-color d-flex justify-content-center align-items-center text-white rounded-circle circle"
                        style={{
                          width: "100px",
                          height: "100px",
                        }}
                      >
                        {count}
                      </div>
                    </div>
                  </CB.Title>
                  <CB.Subtitle className=" text-red fs-4 fw-bold title">
                    {item.title}
                  </CB.Subtitle >
                  <CB.Text className="text-start  text-link fw-bold desc">
                   {item.desc}
                  </CB.Text>
                
                </CB.Body>
              </CB>
  )
}

export default Card