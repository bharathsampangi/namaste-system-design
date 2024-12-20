import React from "react"

const ChatMessage = ({name, photo, message}) => {
    return (
        <div className="flex p-2">
            <img className="h-10 w-10 rounded-full" alt={name} src={photo} />
            <p className="p-2">
                <span className="font-bold p-2">{name} - </span>
                <span>{message}</span>
            </p>
        </div>
    )
}

export default ChatMessage