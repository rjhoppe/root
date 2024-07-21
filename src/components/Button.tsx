type ButtonProps = {
  children: {
    label: string,
    onClick: () => void,
  },
}

const Button = ({ children }: ButtonProps) => {
  return (
    <div className="btn-container">
      <button onClick={children.onClick} 
      >{children.label}
      </button>
    </div>
  )
}

export default Button