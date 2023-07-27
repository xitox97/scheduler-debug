import React, { useEffect } from 'react'

import { Scheduler } from 'devextreme-react'
import { useLazyGetPostsQuery } from './services/postApi'
import dayjs from 'dayjs'

const App: React.FC = () => {
  const [trigger, { data: dataSource, isLoading }] = useLazyGetPostsQuery()

  useEffect(() => {
    trigger()
  }, [])

  if (isLoading) {
    return <div>loading...</div>
  }

  const renderAppointment = (data: any) => {
    const { appointmentData } = data

    return <div role="appointment">{appointmentData.text}</div>
  }

  return (
    <>
      <p>Calendar</p>
      <Scheduler
        timeZone="America/Los_Angeles"
        dataSource={dataSource}
        views={['month']}
        defaultCurrentView="month"
        height={600}
        startDayHour={9}
        defaultCurrentDate={dayjs().toString()}
        appointmentRender={renderAppointment}
      />
    </>
  )
}

export default App
