import './Button.css'

function Button(props) {
  return (
    <button
      className={`${'button'} ${props.className}`}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button
