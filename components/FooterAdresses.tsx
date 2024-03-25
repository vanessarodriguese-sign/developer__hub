import React from 'react'
import Image from 'next/image'

export default function FooterAdresses() {
	return (
		<>
      <div className="text-white pt-11 pb-6 md:pt-4 md:pb-5">
        {/* Desktop & Tablet */}
        <div className='flex flex-row'>
          <div className="pe-14 md:pe-11">
            <Image
              className="grow"
              src="https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/esign-logo-desktop.svg"
              alt="Esign Logo"
              width={151}
              height={51}
            />
          </div>
          <div className="lg:flex-grow md:pe-8">
            <div className="lg:text-base lg:leading-5 font-bold md:text-xs md:leading-13">UK</div>
            <div className="lg:text-sm md:text-9 md:leading-13">
              <div>12 Princes Dock, Liverpool</div>
              <div>L3 1BG </div>
              <div>E-Sign (UK) Itd © 2024 </div>
              <div>Company No. 07937425</div>
              <div>VAT No. 157595663</div>
            </div>
          </div>
          <div className="lg:flex-grow md:pe-8">
            <div className="lg:text-base lg:leading-5 lg:font-light md:text-xs md:leading-13 md:font-bold">IoM</div>
            <div className="lg:text-sm md:text-9 md:leading-13">
              <div>50 Athol Street, Douglas</div>
              <div>Isle of Man, IM1 1JB</div>
              <div>E-Sign Ltd. © 2024</div>
              <div>Company Registration </div>
              <div>Number: 130978C</div>
            </div>
          </div>
          <div className="lg:flex-grow md:pe-8">
            <div className="text-xs leading-13 font-bold lg:hidden">EU</div>
            <div className="lg:text-sm md:text-9 md:leading-13">
              <div>Five Lamps Place</div>
              <div>77-80 Amiens St</div>
              <div>Dublin 1</div>
              <div>Ireland</div>
            </div>
          </div>
          <div className="md:pe-8">
            <div className="text-xs leading-13 font-bold lg:hidden">US</div>
            <div className="lg:text-sm md:text-9 md:leading-13">
              <div>Suite 8500 </div>
              <div>One World Trade Center</div>
              <div>New York, 10007</div>
              <div>United States</div>
            </div>
          </div>
        </div>
      </div>
    </>
	)
}
