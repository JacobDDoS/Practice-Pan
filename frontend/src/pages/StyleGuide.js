import React, { useEffect, useState } from 'react'
import Code from '../components/Code';
import { SimpleDropdown } from 'react-js-dropdavn'
import 'react-js-dropdavn/dist/index.css'
import { MathComponent } from "mathjax-react";

export const StyleGuide = () => {
  const data = [
    {label: 'Ex opt 1', value: 1},
    {label: 'Ex opt 2', value: 2},
    {label: 'Ex opt 3', value: 3},
    {label: 'Ex opt 4', value: 4},
  ]

  const labels = {
    "notSelected": "Please select an item"
  }

  const [math, setMath] = useState("\\int_{a}^{b} x^2 \\,dx ");
  return (
    <div className='main'>
        <div>
            <h1>Style guide!</h1>
        </div>
        <div className='tertiary-gray br-30 p-10'>
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
        <div className='tertiary-gray br-30 p-10 p-b-30'>
            <h2>Colors</h2>
            <section className="section grid">
                <div>
                    <h2>Main Colors</h2>
                    <div className='primary-color'>
                        <p className="fs-500">Primary</p>
                    </div>
                    <div className='secondary-color'>
                        <p className="fs-500">Secondary</p>
                    </div>
                    <div className='tertiary-color'>
                        <p className="fs-500">Tertiary</p>
                    </div>
                </div>
                <div>
                    <h2>Supporting Colors</h2>
                    <div className='primary-gray'>
                        <p className="fs-500">Primary Gray</p>
                    </div>
                    <div className='secondary-gray'>
                        <p className="fs-500">Secondary Gray</p>
                    </div>
                    <div className='tertiary-gray'>
                        <p className="fs-500">Tertiary Gray</p>
                    </div>
                </div>
            </section>
        </div>
        <div className='tertiary-gray p-10 br-30'>
            <h2>Inputs</h2>
            <div className="section grid">
                <div>
                    <h3>Buttons</h3>
                    <div className="flex-column">
                        <button className="btn">Submit Button</button>
                        <button className="mult-btn">Choice Button</button>
                    </div>
                </div>
                <div>
                    <h3>Text Inputs</h3>
                    <div className="flex">
                        <div className="flex-column">
                            <span>
                                <label htmlFor="short">
                                    <p>Short Answer: </p>
                                </label>
                                <input type="text" name="short" id="" />
                            </span>
                            <span>
                            <label htmlFor="long">
                                    <p>Long Answer: </p>
                                </label>
                                <textarea name="long" id="" cols="30" rows="10"></textarea>
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Code</h3>
                    <div className="flex-column">
                        <Code code={`console.log('hello')\nconsole.log('meow')`} language="javascript" editable={true}/>
                    </div>
                </div>
                <div>
                    <h3>Dropdown</h3>
                    <div className="flex-column Code">
                        <SimpleDropdown
                            options={data}
                            clearable
                            searchable
                            configs={
                            { position: { y: 'top', x: 'center' } }
                            }
                            labels={labels}
                        />
                    </div>
                </div>
                <div>
                    <h3>Math</h3>
                    <div className="flex-column Code">
                        <MathComponent tex={math}/>
                        <textarea name="mathInput" id="mathInput" cols="30" rows="10" onChange={(e)=>setMath(e.target.value)}>{math}</textarea>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h2>Components</h2>
        </div>
    </div>
  )
}
