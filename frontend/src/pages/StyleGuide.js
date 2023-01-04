import React from 'react'

export const StyleGuide = () => {
  return (
    <div className='main'>
        <div>
            <h1>Style guide!</h1>
        </div>
        <div>
            <h2>Typography</h2>
            <section className="section grid centered centered-vertically">
                <div>
                    <h2 className='fs-600 left'>Font-sizes: </h2>
                    <h3 className='fs-200'>200</h3>
                    <h3 className='fs-300'>300</h3>
                    <h3 className='fs-400'>400</h3>
                    <h3 className='fs-500'>500</h3>
                    <h3 className='fs-600'>600</h3>
                    <h3 className='fs-700'>700</h3>
                    <h3 className='fs-800'>800</h3>
                    <h3 className='fs-900'>900</h3>
                </div>
                <div>
                    <h2 className='fs-600 left'>Headings:</h2>
                    <h4>Heading 4</h4>
                    <h3>Heading 3</h3>
                    <h2>Heading 2</h2>
                    <h1>Heading 1</h1>
                    <div className='m-t-10'>
                        <h2 className="fs-600 left">Font-Families:</h2>
                        <p className="fs-600 m-t-5 primary-ff">Primary Family</p>
                        <p className="fs-600 secondary-ff">Secondary Family</p>
                        <p className="fs-600 tertiary-ff">Tertiary Family</p>
                    </div>
                </div>
            </section>
        </div>
        <div>
            <h2>Colors</h2>
        </div>
        <div>
            <h2>Inputs</h2>
        </div>
        <div>
            <h2>Components</h2>
        </div>
    </div>
  )
}
