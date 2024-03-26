'use client'
import React, { useState } from 'react'
import { GoPlus } from "react-icons/go"
import { IconContext } from 'react-icons'

interface FaqProps {
  answer?: any
  question?: any
}

export const FaqQuestion = ({ question, answer }: FaqProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleQuestion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="">
      <div className="border-b-2 border-gray">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={handleToggleQuestion}
        >
          <div className="flex justify-left py-6 items-center">
            {question}
          </div>
          <IconContext.Provider value={{ size: '1.3em'}}>
            <GoPlus/>
          </IconContext.Provider>
        </div>
        {isOpen && (
          <div className="pt-4 flex">
            <div>
              <div className=''>
                {answer}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export const Faq = () => {
  const questions = [
    { 
      question: 'What is an API?',
      answer: 'xx'
    },
    { 
      question: 'What are the Benefits of using API?',
      answer: 'Answer here...'
    },
    { 
      question: 'What is E-Sign’s API used for?',
      answer: 'Answer here...'
    },
    { 
      question: 'Why choose an API service from E-Sign?',
      answer: 'Answer here...'
    },
    { 
      question: 'Authentication',
      answer: 'Answer here...'
    },
    { 
      question: 'Terminology',
      answer: 'Answer here...'
    },
    { 
      question: 'Response Codes',
      answer: 'Answer here...'
    },
  ]

  return (
    <div
      className='pb-12 px-9 text-15 leading-26 text-dark-blue bg-white font-normal'
      id="faq"
    >
      {questions.map((item: any, index: number) => (
          <FaqQuestion
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
    </div>
  )
}
