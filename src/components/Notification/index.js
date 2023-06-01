// Write your code here
import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <div className="not-container">
      <div className="div-container">{children}</div>
      <GrFormClose className="cross-icons" />
    </div>
  )
}

export default Notification
