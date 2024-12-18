import React from 'react'
import { LANG } from '../utils/langConstant'

const About = ({lang}) => {
    const data = LANG[lang]

    return (
        <div>
            <h2 className="font-medium">{data.title}</h2>
            <p>
                {data.desc}
            </p>
            <h2 className="font-medium">{data.title2}</h2>
            <p>
                {data.desc}
            </p>
            <h2 className="font-medium">{data.title3}</h2>
            <p>
                {data.desc}
            </p>
            <h2 className="font-medium">{data.title4}</h2>
            <p>
                {data.desc}
            </p>
        </div>
    )
}

export default About