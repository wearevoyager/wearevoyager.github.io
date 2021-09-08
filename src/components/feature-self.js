import * as React from "react"
import { CheckIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Powerful APIs',
    description: 'Our APIs enable a direct connection to global tavel services with enhanced product offerings.',
  },
  { 
    name: 'Integrate with your existing platform', 
    description: 'Integrate with your existing platform using Voyagers powerful APIs.' 
  },
  {
    name: 'Complex itineries',
    description: 'Develop complex itineries leveraging multiple routes and airlines.',
  },
  { 
    name: 'Advanced analytics', 
    description: 'Combine customer analytics with big data, and machine learning to improve customer success.' 
  },
]

const Serve = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-8 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">The self-serve platform</h2>
        <p className="mt-4 text-lg text-gray-500">
          Work with our APIs directly using your existing IATA credentials.
        </p>
      </div>
      <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
        {features.map((feature) => (
          <div key={feature.name} className="relative">
            <dt>
              <CheckIcon className="absolute h-6 w-6 text-blue-500" aria-hidden="true" />
              <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
            </dt>
            <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default Serve
