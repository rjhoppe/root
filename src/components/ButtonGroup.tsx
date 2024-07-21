import Button from "./Button"
import { MENU_BUTTONS } from "../data/data"

type ButtonGroupProps = {
  gameState: string
}

const displayBtns = () => {
  
}

const ButtonGroup = ({ gameState }: ButtonGroupProps) => {
  return (
    <>
      {MENU_BUTTONS.map((item) => (
          <Button children={item}></Button>
      ))}
    </>
  )
}

export default ButtonGroup