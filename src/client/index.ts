import { type FormValues } from 'organisms/Form'

const mockData = [{
  id: 1,
  name: 'Manoel',
  comment: 'é um teste de comentário',
  rating: 5
}]

export async function postFormRating (formData: FormValues) {
  return await new Promise((resolve, reject) => {
    console.log('formData', formData)
    setTimeout(() => {
      mockData.push({
        id: Math.floor(Math.random() * 1000),
        ...formData
      })
      console.log('dados cadastrados:', mockData)
      Math.floor(Math.random() * 10) > 5
        ? resolve({ status: 200 })
        // eslint-disable-next-line prefer-promise-reject-errors
        : reject({ status: 500 })
    }, 2000)
  })
}
