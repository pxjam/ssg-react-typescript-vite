import { addAndMultiply } from '../add'

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <div>{addAndMultiply(1, 2, 3)}</div>
    </>
  )
}
