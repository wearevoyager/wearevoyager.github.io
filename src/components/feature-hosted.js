import * as React from "react"
import { CheckIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Intuitive booking platform',
    description: 'The Voyager platform enables the full booking experience.',
  },
  { name: 'Powerful APIs', 
    description: 'Our APIs enable a direct connection to global travel services with enhanced product offerings.' },
  {
    name: 'Easy-to-use admin panel',
    description: 'Invite, support, and manage your team members.',
  },
  { 
    name: 'Real-time ticketing', 
    description: 'Book travel and get tickets issued instantly through the Voyager API.' 
  },
  { 
    name: 'Accredited travel booking', 
    description: 'Book travel through an IATA accredited agency.' 
  },
  { 
    name: 'All ancilliaries', 
    description: 'Books seats, meals, requirements, make changes and cancelled travel as necessary. ' 
  },
  { 
    name: 'Complex itineries', 
    description: 'Develop complex itineries leveraging multiple routes and airlines.' 
  },
  { 
    name: 'Advanced analytics', 
    description: 'Combine customer analytics with big data, and machine learning to improve customer success.' 
  },
]

const Hosted = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-8 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">The hosted platform</h2>
        <p className="mt-4 text-lg text-gray-500">
          Let Voyager handle the complexity of travel booking; while you focus on the customer.
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

export default Hosted
