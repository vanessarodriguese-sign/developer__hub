import React from 'react'
import Image from 'next/image'
import { MainCarousel } from '../components/Carousel'
import { MainButton } from './MainButton'
import ApiDocD from '@/assets/esign-api-documentation-illo@2x.png'
import SignWorkFlowD from '@/assets/Signature-workflow-icon@2x.png'
import ESignatureIcon from '@/assets/esignature-icon.svg'
import OauthIcon from '@/assets/oauth-icon.svg'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function Hero () {
  return (
    <div className='flex flex-col'>
      <MainCarousel/>
      <div className='flex flex-row py-20 ps-123 pe-20 pb-24'>
        <div>
          <h2>Header 2</h2>
          <h3>Header 3</h3>
          <h5>Integrate E-Sign’s secure API to your software and enhance agreement automation. Some of the features include:</h5>
          <div>
            <h5>• Signing of documents</h5>
            <h5>• Request signatures from multiple parties</h5>
            <h5>• Document process automation</h5>
            <h5>• Multi-factor authentication</h5>
            <h5>• Live document tracking</h5>
          </div>
          <div>
            <h5>Here you’ll find guides to building your integration, and code examples that show you how to handle the most common scenarios.</h5>
          </div>
          <div className='hidden lg:flex flex-row ml-auto items-center ps-6 pe-123 gap-4'>
            <MainButton
              href=''
              content='LOGIN'
              bg='bg-light-blue'
              color='text-dark-blue'
              borderColor='border-dark-blue'
            />
            <MainButton
              href=''
              content='CONTACT US'
              bg='bg-dark-blue'
              color='text-white'
              borderColor='border-blue'
            />
          </div>
        </div>
        <div>
          <Image
            className='flex-grow pe-12'
            src={ApiDocD}
            alt='api doc'
            width={739}
            height={505}
          />
        </div>

      </div>
      <div className='flex flex-col align-items-center bg-light-gray'>
        <div className='d-flex flex-col align-items-center pt-24 px-123'>
          <h2 className='pb-1'>Feature Examples</h2>
          <div className='pb-6 w-2'>
            <h5>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
              At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            </h5>
          </div>
        </div>
        <div className='flex flex-row px-123 gap-5'>
          <div className='w-3 text-center mx-auto bg-white'>
            <Image

              className=''
              src={SignWorkFlowD}
              alt='api doc'
              width={62}
              height={62}
            />
            <h3 className='text-center'>Signature workflow via Iframe</h3>
            <p className='text-center'>Use E-signs iframe functionality to generate envelopes from within your own system.</p>
            <MainButton
              href=''
              content='Create Agreement using Iframe'
              bg='bg-dark-blue'
              color='text-white'
              borderColor='border-blue'
            />
          </div>
          <div className='w-3 text-center mx-auto bg-white'>
            <Image

              className=''
              src={ESignatureIcon}
              alt='ESignatureIcon'
              width={88.29}
              height={62}
            />
            <h3>One Click Send and Sign</h3>
            <p>Generate and sign an envelope in one click using API.</p>
            <MainButton
              href=''
              content='Click to sign agreement'
              bg='bg-dark-blue'
              color='text-white'
              borderColor='border-blue'
            />
          </div>
          <div className='w-3 text-center mx-auto bg-white'>
            <Image

              className=''
              src={OauthIcon}
              alt='OauthIcon'
              width={68.71}
              height={62}
            />
            <h3>Use OAuth 2 To Get Data</h3>
            <p>Retrieve account data using E-signs OAuth functionality.</p>
            <MainButton
              href=''
              content='Sign in with OAuth'
              bg='bg-dark-blue'
              color='text-white'
              borderColor='border-blue'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
