import React from 'react'
import {DataType} from "../types"

interface IJobListProps {
    item: DataType
}

const JobList: React.FC<IJobListProps> = (props) => {
    const {item} = props;
  return (
    <div className={item.new && item.featured ? "card grid left-border": "card grid"}>
      <div className="job-img">
        <img src={ item.logo } />
      </div>
      <div className="details">
        <div className="title">
          <div className="name bold">{item.company}</div>
          <div className="tags flex bold">
            {item.new && <div className="new tag">NEW!</div>}
            {item.featured && <div className="featured tag">FEATURED</div>}
        </div>
        </div>
        <div className="position bold cursor">
          {item.position}
        </div>
        <div className="features flex">
          <p>{item.postedAt}</p>
          <div className="dot">.</div>
          <p>{item.contract}</p>
          <div className="dot">.</div>
          <p>{item.location}</p>
        </div>
      </div>
      <div className="line"></div>
      <div className="skills grid bold">
        <button>{item.role}</button>
        <button>{item.level}</button>
        {item.languages?.map((lang)=>(
          <button key={lang}>{lang}</button>
        ))}
        {item.tools?.map((tool)=>(
          <button key={tool}>{tool}</button>
        ))}
      </div>
    </div>
  )
}

export default JobList