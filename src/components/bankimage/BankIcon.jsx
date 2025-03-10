import bankicon from '../../assets/images/bank-ico.png'
import './BankIcon.css'

export function BankIcon({ width = '100px', height = '100px', marginTop = '0px', marginLeft = '0px' }) {
  return (
    <div className='bank-container' style={{width, height, marginTop, marginLeft}}>
      <div className='bank-icon'>
        <img src={bankicon} alt='' className='bank-logo'/>
        <h1 className='bank-name'>Banco de Valledupar</h1>
      </div>
    </div>
  )
}
