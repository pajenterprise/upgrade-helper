import React, { useState } from 'react'
import { Popover, Button, Checkbox, Input } from 'antd'
import { SHOW_LATEST_RCS } from '../../utils'
import styled from 'styled-components'

const InputContainer = styled.div({
  marginTop: '16px'
})
const Settings = ({ handleSettingsChange, appName, setAppName }) => {
  const [popoverVisibility, setVisibility] = useState(false)

  const handleClickChange = visibility => setVisibility(visibility)

  const updateCheckboxValues = checkboxValues =>
    handleSettingsChange(checkboxValues)

  return (
    <Popover
      placement="bottomRight"
      content={
        <>
          <Checkbox.Group onChange={updateCheckboxValues}>
            <div>
              <Checkbox value={SHOW_LATEST_RCS}>{SHOW_LATEST_RCS}</Checkbox>
            </div>
          </Checkbox.Group>
          <InputContainer>
            <h4>What's your app name?</h4>
            <Input
              value={appName}
              onChange={e => {
                setAppName(e.target.value)
              }}
              placeholder="MyAwesomeApp"
            />
          </InputContainer>
        </>
      }
      trigger="click"
      visible={popoverVisibility}
      onVisibleChange={handleClickChange}
    >
      <Button icon="setting" />
    </Popover>
  )
}

export default Settings
