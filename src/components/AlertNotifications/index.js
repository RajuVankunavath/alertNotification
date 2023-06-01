// Write your code here

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => {
  const renderAuthSuccess = () => (
    <Notification>
      <AiFillCheckCircle className="icon success" />
      <div className="heading-para-container">
        <h1 className="heading-items success">Success</h1>
        <p className="para">You can access all the files in the folder</p>
      </div>
    </Notification>
  )

  const renderAuthError = () => (
    <Notification>
      <RiErrorWarningFill className="icon error" />
      <div className="heading-para-container">
        <h1 className="heading-items error">Error</h1>
        <p className="para">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderAuthWarning = () => (
    <Notification>
      <MdWarning className="icon warning" />
      <div className="heading-para-container">
        <h1 className="heading-items warning">Warning</h1>
        <p className="para">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )
  const renderAuthInfo = () => (
    <Notification>
      <MdInfo className="icon info" />
      <div className="heading-para-container">
        <h1 className="heading-items info">Info</h1>
        <p className="para">Anyone on the internet can view these files</p>
      </div>
    </Notification>
  )

  return (
    <div className="app-container">
      <h1 className="heading">Alert Notifications</h1>
      {renderAuthSuccess()}
      {renderAuthError()}
      {renderAuthWarning()}
      {renderAuthInfo()}
    </div>
  )
}
export default AlertNotifications
