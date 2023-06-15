import { useEffect, useState } from 'react'

// สร้าง Hook ที่มีฟังก์ชันดึงข้อมูลจาก API
const useContent = (postId) => {
  const [datas, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch('https://api.learnhub.thanayut.in.th/content')

        const data = await res.json()

        setData(data.data)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return { datas, setData, loading }
}

export default useContent
