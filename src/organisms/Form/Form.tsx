import Rating from '../Rating'
import React, { useState } from 'react'
import { Button, Label, Text, TextArea, TextInput } from '../../components'
import { FormStyles } from './style'
import { postFormRating } from 'client'

export interface FormValues {
  rating: number
  name: string
  comment: string
}
interface FormPropsError {
  rating?: string
  name?: string
  comment?: string
}

const Form = () => {
  const [name, setName] = useState<string>('')
  const [comment, setComment] = useState<string>('')
  const [formErrors, setFormErrors] = useState<FormPropsError>({})
  const [formValues, setFormValues] = useState<FormValues>({
    rating: 0,
    name: '',
    comment: ''
  })

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(() => {
      setFormErrors({
        ...formErrors,
        name: undefined
      })
      setFormValues({
        ...formValues,
        name: event.target.value
      })
      return event.target.value
    })
  }

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(() => {
      setFormValues({
        ...formValues,
        comment: event.target.value
      })
      return event.target.value
    })
  }

  const handleRatingChange = (rating: number) => {
    setFormValues(() => {
      setFormErrors({
        ...formErrors,
        rating: undefined
      })
      return {
        ...formValues,
        rating
      }
    })
  }
  const validateForm = (formValues: FormValues) => {
    const errors: Partial<FormPropsError> = {}
    if (formValues.rating === 0) {
      errors.rating = 'Por favor, selecione uma avaliação'
    }
    if (formValues.name.trim() === '') {
      errors.name = 'Por favor, insira um nome válido'
    }
    setFormErrors(errors)
    return errors
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const errors = validateForm(formValues)
    if (Object.keys(errors).length > 0) {
      return
    }
    setFormValues({
      ...formValues,
      name,
      comment
    })
    console.log('Dados do formulário:', formValues)
    try {
      const response = await postFormRating(formValues)
      console.log('Dados enviados para a API:', response)
      return response
    } catch (error) {
      console.log('Erro ao enviar dados para a API:', error)
      return error
    }
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <FormStyles onSubmit={handleSubmit}>
      <Label variant='md'>
        <Text align={'center'}>Marque de 1 á 5 estrelas</Text>
        <Rating onChange={handleRatingChange} numberStars={5} />
        {(formErrors.rating != null) ? <Text align={'center'} color='error'>{formErrors.rating}</Text> : null}
      </Label>
      <Label variant='md' >
        <Text>Nome</Text>
        <TextInput
        type="text"
        value={name}
        onChange={handleNameChange}
        />
        {(formErrors.name != null) ? <Text align={'center'} color='error'>{formErrors.name}</Text> : null}
      </Label>
      <Label variant='md'>
        <Text>Comentário (opcional)</Text>
        <TextArea value={comment} onChange={handleCommentChange} />
      </Label>
      <Button type="submit">Enviar</Button>
    </FormStyles>
  )
}

export default Form
