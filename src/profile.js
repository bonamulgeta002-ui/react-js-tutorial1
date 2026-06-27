import './profile.css';

export function Profile() {
  return (
    <div className="profile">
      <h2>My Profile</h2>
      <h3>passionate learner * developer and dreamer</h3>

      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Profile"
        className="avatar"
        style={{
          width: 150,
          height: 150,
        }}
      />
    </div>
  );
}