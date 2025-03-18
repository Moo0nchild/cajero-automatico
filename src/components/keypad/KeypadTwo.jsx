import './KeypadTwo.css'

export function KeypadTwo({ onKeyPress }) {
  const keys = [
    { label: '1', value: '1' },
    { label: '2 ABC', value: '2' },
    { label: '3 DEF', value: '3' },
    { label: '4 GHI', value: '4' },
    { label: '5 JKL', value: '5' },
    { label: '6 MNO', value: '6' },
    { label: '7 PRS', value: '7' },
    { label: '8 TUV', value: '8' },
    { label: '9 WXY', value: '9' },
    { label: '0', value: '0' },
  ]

  return (
    <div className='keypad-container-two'>
      {keys.map((key) => (
        <button
          key={key.value}
          className='keypad-button-two'
          onClick={() => onKeyPress(key.value)} // ✅ Corregido
        >
          {key.label}
        </button>
      ))}
      <button
        className='keypad-button-two cancel-two'
        onClick={() => onKeyPress('CANCEL')}
      >
        CANCEL
      </button>
      <button
        className='keypad-button-two clear-two'
        onClick={() => onKeyPress('CLEAR')}
      >
        CLEAR
      </button>
      <button
        className='keypad-button-two enter-two'
        onClick={() => onKeyPress('ENTER')}
      >
        ENTER
      </button>
    </div>
  )
}
