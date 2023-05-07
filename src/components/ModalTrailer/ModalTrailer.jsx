import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import ReactPlayer from 'react-player';

function ModalTrailer({ trailer, isOpen, onClose }) {
    if (!trailer) {
        return null;
    }

    return (
        <Modal show={isOpen} onClick={onClose}>
            {trailer?.map((item) => {
                <div key={item.maPhim}>
                    <ReactPlayer
                        url={item.trailer}
                        width="100px"
                        height="200px"
                        playing={true}
                        controls={false}
                    />
                </div>
            })}

        </Modal>
    )
}

export default ModalTrailer