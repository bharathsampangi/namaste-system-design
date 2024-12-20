import React, { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage";

const CHAT_MESSAGES_LIMIT = 100

const ChatWindow = () => {
    const [messages, setMessages] = useState([]);

    const nameList = [
        'Time','Past','Future','Dev',
        'Fly','Flying','Soar','Soaring','Power','Falling',
        'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
        'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
        'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
        'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
        'Mine','Your','Worst','Enemy','Hostile','Force','Video',
        'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
        'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
        'Script','Writer','Near','Close','Open','Cube','Circle',
        'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
        'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
        'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
        'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
        'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
        'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
        'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
        'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
        'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
        'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
        'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich',
        'Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey',
        'Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl',
        'Vortex','Paradox'
    ];

    const fetchData = () => {
        const data = [
          {
            id: 1,
            name: nameList[Math.floor(Math.random() * nameList.length)],
            photo:
              "https://img.freepik.com/free-vector/boy-wearing-mask_1450-110.jpg?ga=GA1.1.1634876070.1734566507&semt=ais_hybrid",
            message: "This is a live streaming chat video",
          },
        ];

        setMessages((prev) => {
            let newMessages = [...data, ...prev]
            newMessages = newMessages.splice(0, CHAT_MESSAGES_LIMIT)
            return newMessages
        })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            fetchData()
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className="w-full flex flex-col-reverse h-[600px] border border-black m-5 overflow-y-scroll">
            {messages.map((message, index) => <ChatMessage key={index} {...message}/>)}
        </div>
    )
}

export default ChatWindow