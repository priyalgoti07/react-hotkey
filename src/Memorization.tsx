import { useMemo, useState } from "react"

const Memorization = () => {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const firstCount = () => {
    setCounterOne(counterOne + 1)
  }
  const Evennumber = useMemo(() => {
    console.log("i am unwanted funaction");
    return counterOne % 2 === 0 ? "even" : "odd"; // Return the result correctly
  }, [counterOne])
  const secondCount = (): void => {
    setCounterTwo(counterTwo + 1)
  }
  return (
    <>
      <button onClick={firstCount}>firstCounter: {counterOne}</button>
      {Evennumber}
      <button onClick={secondCount}>secondCounter: {counterTwo}</button>
    </>

  )
}

export default Memorization