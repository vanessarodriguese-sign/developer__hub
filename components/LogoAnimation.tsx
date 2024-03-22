import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import styles from './LogoAnimation.module.css'
import Image from 'next/image';


function NormalLogoAnimation() {
  const images = [
    {
      src: 'https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/beyondly-mono.svg'
    },
    {
      src: 'https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/evensure-mono.svg'
    },
    {
      src: 'https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/uk-fuels-mono.svg'
    },
    {
      src: 'https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/wanderlands-mono.svg'
    },
    {
      src: 'https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/Green-commute-initiative.svg'
    },
    {
      src: 'https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/Indigo Primary mono_SVG.svg'
    }
  ]

  const InfiniteLooper = function InfiniteLooper({
    animationDuration,
    direction,
    children,
  }: {
    animationDuration: number
    direction: 'right' | 'left'
    children: React.ReactNode
  }) {
    const [looperInstances, setLooperInstances] = useState(1)
    const outerRef = useRef<HTMLDivElement>(null)
    const innerRef = useRef<HTMLDivElement>(null)

    function resetAnimation() {
      if ((innerRef?.current) != null) {
        innerRef.current.setAttribute('data-animate', 'false')

        setTimeout(() => {
          if ((innerRef?.current) != null) {
            innerRef.current.setAttribute('data-animate', 'true')
          }
        }, 10)
      }
    }

    const setupInstances = useCallback(() => {
      if (((innerRef?.current) == null) || ((outerRef?.current) == null)) return

      const { width } = innerRef.current.getBoundingClientRect()

      const { width: parentWidth } = outerRef.current.getBoundingClientRect()

      const widthDeficit = parentWidth - width

      const instanceWidth = width / innerRef.current.children.length

      if (instanceWidth !== 0) {
        setLooperInstances(
          looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1,
        )
      }

      resetAnimation()
    }, [looperInstances])

    useEffect(() => { setupInstances(); }, [setupInstances])

    useEffect(() => {
      window.addEventListener('resize', setupInstances)

      return () => {
        window.removeEventListener('resize', setupInstances)
      }
    }, [looperInstances, setupInstances])



    return (
      <div className={styles.looper} ref={outerRef}>
        <div
          className={styles.looper__innerList}
          ref={innerRef}
          data-animate="true"
        >
          {[...Array(looperInstances)].map((_, ind) => (
            <div
              key={ind}
              className={styles.looper__listInstance}
              style={{
                animationDuration: `${animationDuration}s`,
                animationDirection:
                  direction === 'right' ? 'reverse' : 'normal',
              }}
            >
              {children}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <InfiniteLooper animationDuration={30} direction="left">
      <div className="hidden lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-24">
        {images.map((image, index) => (
          <div key={index}>
            <Image
              className="items-center"
              src={image.src}
              alt=""
              width={130}
              height={110}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-between items-center gap-12 lg:hidden">
        {images.map((image, index) => (
          <div key={index}>
            <Image
              className="items-center"
              src={image.src}
              alt=""
              width={80}
              height={70}
            />
          </div>
        ))}
      </div>
    </InfiniteLooper>
  )
}
// Memoize LogoAnimation component
export const LogoAnimation = memo(NormalLogoAnimation);
