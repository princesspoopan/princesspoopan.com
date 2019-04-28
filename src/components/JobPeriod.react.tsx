import './JobPeriod.styl'
import * as React from 'react'

interface Props {
  company: string,
  period: string,
  title: string,
  detail: string
}

export const JobPeroid = ({ company, period, title, detail }: Props) => {
  return (
    <div className='job-period'>
      <div className='job-period__first-line'>
        <span className='job-period__company'>{company}</span>
        &nbsp;-&nbsp;
        <span className='job-period__period'>{period}</span>
      </div>
      <div className='job-period__title'>
        {title}
      </div>
      <div className='job-period__detail'>
        {detail}
      </div>
    </div>
  )
}

