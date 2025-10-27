import React from 'react'
import UxTopSection from '../../components/Ux/UxTopSection'
import UiDevelopment from '../../components/Ux/UiDevelopment'
import UiServices from '../../components/Ux/UiServices'
import UiTools from '../../components/Ux/UiTools'
import UiQuestions from '../../components/Ux/UiQuestions'

const Ui = () => {
  return (
    <div className='cursor-pointer'>
        <UxTopSection/>
                <UiDevelopment/>
        <UiServices/>
        <UiTools/>
        <UiQuestions/>
      
    </div>
  )
}

export default Ui
