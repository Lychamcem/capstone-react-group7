import { Modal } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';

function ModalTrailer({ trailer, maPhim, isOpen, onClose }) {
    if (!isOpen) {
        return null;
    }

    return (
        <Modal show={isOpen} onClick={onClose}>
            {trailer?.map((item) => {
                <ReactPlayer
                    url={item.trailer}
                    config={{
                        youtube: {
                            playerVars: {
                                autoplay: 1,
                            },
                        },
                    }}
                />
            })}

        </Modal>
    )
}

export default ModalTrailer