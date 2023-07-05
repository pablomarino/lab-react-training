import './FaceBook.css'
import profiles from '../data/berlin.json';

const users = profiles.map((profile,index) => (
  <div key={index} className='facebookcard'> 
    <img src={profile.img} alt={`Profile of ${profile.firstName}`} />
    <p><strong>First Name:</strong> {profile.firstName}</p>
    <p><strong>Last Name:</strong> {profile.lastName}</p>
    <p><strong>Country:</strong> {profile.country}</p>
    <p><strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}</p>
  </div>
));

function FaceBook() {
    return (
      <div className='facebookcardlist'>
      {users}
      </div>
    )
}

export default FaceBook