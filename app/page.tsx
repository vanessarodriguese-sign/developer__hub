import React from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Page () {
  console.log('Running on the server')
  console.log(process.env.NEXT_PUBLIC_APP_URL)
  return (
    <>
      <h1 data-testid="cypress-title">Starting the new developer hub</h1>
    </>
  )
}
