'use client'

import React, { useState } from 'react'
import InputField from './InputField' // Importing reusable input field component
import TextAreaField from './TextAreaField' // Importing reusable textarea field component
import axios from 'axios'

export default function ContactForm({ fields, form, type, btn, bg }) {
  const [formData, setFormData] = useState(
    fields.reduce(
      (acc, field) => {
        acc[field.id] = ''
        return acc
      },
      { formType: type }
    ) // Include form type in initial state
  )

  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(String(email).toLowerCase())
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    // console.log('clicked')
    const newErrors = {}
    // console.log('clicked-1')
    // Check for empty fields
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key} is required`
      }
    })

    // Email validation
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = 'Invalid email address'
    }
    // if (!formData.phone) {
    //   newErrors.phone = 'Phone number is required'
    // } else if (!/^\d+$/.test(formData.phone)) {
    //   newErrors.phone = 'Phone number must be numeric'
    // }

    // If there are errors, set the errors state
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    // console.log('clicked-2')
    setLoading(true)
    setSuccessMessage('')

    try {
      const formDataToSend = new FormData()
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key])
      })

      const response = await axios.post(
        'https://docs.cms.org.in/wp-json/contact-form-7/v1/contact-forms/10383/feedback',
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )

      console.log('Form data sent:', formDataToSend)
      setSuccessMessage('Thank you for contacting us')
      setFormData(
        fields.reduce(
          (acc, field) => {
            acc[field.id] = ''
            return acc
          },
          { formType: type }
        )
      )
      setErrors({})
      console.log('Form submitted successfully', response.data)
    } catch (error) {
      console.error('Error submitting form', error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }))
  }

  const renderError = (field) => {
    return errors[field] ? (
      <span className="text-red-500 text-sm">{errors[field]}</span>
    ) : null
  }

  return (
    <form className="w-full max-w-screen-lg" onSubmit={handleFormSubmit}>
      {successMessage && (
        <div
          class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <span class="font-medium">Submitted!</span> {successMessage}
        </div>
      )}
      <div className={`grid-cols-${form} grid gap-4`}>
        {fields.map((field) => (
          <div
            key={field.id}
            className={`${
              field.type === 'textarea'
                ? `col-span-${form} text-black`
                : 'flex flex-col w-full '
            }`}
          >
            <label htmlFor={field.id} className="text-white">
              {field.label}
            </label>
            {field.type === 'textarea' ? (
              <TextAreaField
                id={field.id}
                value={formData[field.id]}
                onChange={handleChange}
                className="text-black"
              />
            ) : (
              <InputField
                type={field.type}
                id={field.id}
                value={formData[field.id]}
                onChange={handleChange}
              />
            )}
            {renderError(field.id)}
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          type="submit"
          className={`${
            form === '2'
              ? `px-4 py-2 ${bg} rounded ${btn} text-lg sm:text-xl`
              : `px-4 py-2 ${bg} rounded ${btn} text-lg sm:text-xl`
          }`}
        >
          Submit
        </button>
      </div>
    </form>
  )
}
