import { useState } from 'react'

export function useToggle() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return { openId, toggle }
}
