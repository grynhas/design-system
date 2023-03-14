import { type FormValues } from 'organisms/Form/Form'

const mockData = [{
  id: 1,
  name: 'Manoel',
  comment: 'é um teste de comentário',
  rating: 5
}]

export async function postFormRating (formData: FormValues) {
  return await new Promise((resolve) => {
    console.log('formData', formData)
    setTimeout(() => {
      resolve(mockData.push({
        id: Math.floor(Math.random() * 1000),
        ...formData
      }))
    }, 2000)
    console.log('dados cadastrados:', mockData)
  })
}
