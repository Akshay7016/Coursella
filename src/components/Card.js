import React from 'react'
import { FcLike } from 'react-icons/fc'

const Card = ({ id, description, title, image }) => {
    return (
        <div>
            <div>
                <img src={image.url} alt={image.alt} />

                <div>
                    <button>
                        <FcLike fontSize="1.75rem" />
                    </button>
                </div>
            </div>
            <div>
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card