import React from "react"

const AccordionItem = ({title, body, isOpen, setIsOpen}) => {
    return (
        <div className="border border-black round">
            <div className="font-bold p-2 bg-slate-200 flex justify-between" onClick={setIsOpen}>
                <span>{title}</span>
                <span>⬇️</span>
            </div>
            {isOpen && <div>{body}</div>}
        </div>
    )
}

export default AccordionItem