'use client'

import { useState } from 'react'
import Modal from '../ui/Modal'
import { methodologyData } from '../../data/methodologyData'
import ModuleCard from '../cards/ModuleCard'

const MethodologySection = () => {
  const [selectedMethod, setSelectedMethod] = useState(null)

  return (
    <section
      id='metodologia'
      className='container mx-auto py-8 md:py-8 lg:py-8'
    >
      <h2 className='text-5xl font-bold text-center text-secondary mb-12 font-handwritten tracking-wider'>
        Mi Metodología
      </h2>
      <p className='text-xl text-center text-[var(--text-dark)] mb-12'>
        En cada sesión íntegro y combino diferentes técnicas
        de acuerdo a la necesidad del paciente.
        <br />
        <br />
        Conoce más sobre las técnicas que utilizo:
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center'>
        {methodologyData.map((data, index) => (
          <ModuleCard
            key={index}
            title={data.title}
            description={data.description}
            image={data.image}
            onShowDetails={() => setSelectedMethod(data)}
          />
        ))}
      </div>

      <Modal
        isOpen={!!selectedMethod}
        onClose={() => setSelectedMethod(null)}
        title={selectedMethod?.title}
      >
        {selectedMethod && (
          <div className='space-y-4'>
            <p className='text-lg text-[var(--text-dark)] mb-4'>
              {selectedMethod.description}
            </p>
            <h4 className='text-xl font-semibold text-secondary mb-2'>
              ¿Qué hace?
            </h4>
            <ul className='list-disc pl-6 space-y-2'>
              {selectedMethod.whatItDoes.map(
                (item, index) => (
                  <li
                    key={index}
                    className='text-[var(--text-dark)]'
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        )}
      </Modal>
    </section>
  )
}

export default MethodologySection
