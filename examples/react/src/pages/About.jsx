import { addAndMultiply } from '../add'

export default function About() {
  return (
    <>
      <h1>About</h1>
      <div>{addAndMultiply(1, 2, 3)}</div>
    </>
  )
}
