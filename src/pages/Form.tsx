import Rating from '../components/Rating'
import React, { useState } from 'react'
import { Button, Text, TextArea, TextInput } from '../components'
interface FormValues {
  rating: number
  name: string
  comment: string
}

const Form = () => {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [formValues, setFormValues] = useState<FormValues>({
    rating: 0,
    name: '',
    comment: ''
  })

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // enviar os dados do formulário
  }

  const handleRatingChange = (rating: number) => {
    setFormValues({
      ...formValues,
      rating
    })
  }

  console.log('teste aqui', formValues)
  return (
    <form onSubmit={handleSubmit}>
      {/* Incluir logo e texto aqui */}
      <label>
        Avaliação:
        <Rating
        onChange={handleRatingChange}
        numberStars={5}
         />
      </label>
      <label>
        <Text as='span' size='lg'>Nome:</Text>

        <TextInput
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label>
      <Text as='span' size='lg'>Comentário:</Text>
        <TextArea
          value={comment}
          onChange={handleCommentChange}
        />
      </label>
      <Button type="submit">Enviar</Button>
    </form>
  )
}

export default Form
