import './JobPeriod.styl'

import PropTypes from 'prop-types'
import React from 'react'

export default function JobPeroid ({ company, period, title, detail }) {
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

JobPeroid.propTypes = {
  company: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired
}
