import { useState } from 'react'

const Promo = ({applyDiscount}) => {

    const [input, setInput] = useState('')

    const codes = [
        {
          promo: 'YESPLS', 
          discount: 0.5, 
          arr: [1,2,3,4,5,6,7,8,9]
        }, {
          promo: '20OFF', 
          discount: 0.8, 
          arr: [1,2,5]}
    ]

    const checkPromo = codes.filter((code) => input.toUpperCase() === code.promo)
    

    const handleDiscount = (promo, incID) => applyDiscount(promo, incID)

    const onSubmit = (e) => {
        e.preventDefault()
        if (checkPromo.length !== 0) {
            alert('Valid Promo Code')
            handleDiscount(checkPromo[0].discount, checkPromo[0].arr)
            console.log(checkPromo)
          }
          else{
              alert('invalid promo code')
          }
        setInput('')
      }


    return (
      <div className='container'>
      <form className='add-form row align-items-center' onSubmit={onSubmit}>
      <div className='col-auto'>
        <label className='col-form-label text-align-center'>Enter Promocode</label>
        {/* <span className='form-text'>Only one promocode valid per purchase</span> */}
        </div>
        <div className='col-auto'>
        <input className='form-control'
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder=' Pstt Try 20OFF'
        />
      </div>
      <div className='col-auto'>
      <input type='submit' value='Submit' className='btn btn-dark mb-2' />
      </div>
      </form>
      </div>
    )
}

export default Promo
