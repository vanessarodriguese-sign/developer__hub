import GraphDropdown from '@/components/GraphDropdown'
import React from 'react'

export default function Dashboard() {
	return (
    <div className='bg-gradient-to-b from-gray to-white px-9 md:ps-10 md:pe-11 lg:px-32'>
      <h1 className='pt-11 pb-4'>Dashboard</h1>
      <div className='flex flex-row'>
        <GraphDropdown 
          title='YOUR ACCOUNT' 
          classNames='left-14'
          options={[
            { label: 'Dashboard', href: '/' },
            { label: 'Billing', href: '/' },
            { label: 'Team', href: '/' },
            { label: 'Connected Accounts', href: '/' },
            { label: 'Presets', href: '/' }
          ]}
        />
        <GraphDropdown 
          title='API' 
          classNames='left-30'
          options={[
            { label: 'Region', href: '/' },
            { label: 'Authorisation', href: '/' },
            { label: 'Jobs', href: '/' },
            { label: 'Webhooks', href: '/' },
            { label: 'Tasks', href: '/' },
            { label: 'Sandbox', href: '/' }
          ]}
        />
      </div>
      
      <div> Convertion</div>
      <div> Graph </div>
      <div>GraphCard</div>

      
    </div>
  )
}