import logo from '../images/Alien.png';

const ThankYou = () => {
  return (
    <>
      <img className='logo' src={logo} alt='Alien face logo'/>
      <h1>Thank you for submitting!</h1>
      <p>Now we can consider sparing your planet.</p>
    </>
  )
}

export default ThankYou;