import React, { useEffect, useState } from 'react'

const HomeRoute = () => {
  // Create the count state.
  const [count, setCount] = useState(0)
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000)
    return () => clearTimeout(timer)
  }, [count, setCount])

  return (
    <div>
      <h2>Home</h2>
      <p>Count: {count}</p>
    </div>
  )
}

export default HomeRoute
