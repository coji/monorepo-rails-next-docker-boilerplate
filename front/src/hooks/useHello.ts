import { useQuery } from 'react-query'
import ky from 'ky'

export const useHello = () => {
  const query = useQuery(['hello'], async () => {
    return await ky
      .get('http://localhost:3001/hello')
      .json<{ message: string }>()
  })

  return {
    ...query,
  }
}
