import { PersonProps } from "../types/Persoon.types"

const Person = (props:PersonProps) => {
  return (
    <div>{props.name.first} {props.name.last}</div>
  )
}

export default Person