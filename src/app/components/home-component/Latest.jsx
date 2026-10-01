import React from 'react'
import Card from '../common/Card'


export default function Latest() {
  return (
    <div>

      <section className='mx-[2%]'>
        <h2>Latest Products </h2>
        <div className='flex flex-row justify-between'>
          <Card  number="One" />
          <Card  number="Two" />
          <Card  number="Three" />
          <Card  number="Four"/>
        </div>

      </section>
    </div>
  )
}
