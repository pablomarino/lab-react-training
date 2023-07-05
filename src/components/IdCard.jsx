import './IdCard.css';

function IdCard({ picture, firstName, lastName, gender, height, birth }) {
  return (
    <div className='idcard'>
      <img src={picture} alt={'profile picture of ' + firstName} />
      <p><b>Firstname:</b> {firstName}</p>
      <p><b>Lastname:</b> {lastName}</p>
      <p><b>Gender:</b> {gender}</p>
      <p><b>Height:</b> {`${height} m`}</p>
      <p><b>Birth:</b> {birth.toDateString()}</p>
    </div>
  );
}

export default IdCard;