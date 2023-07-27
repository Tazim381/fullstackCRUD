const UserProfileModal = ({ profile, logOut,toggleModal }) => {


    return (
      <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-5 rounded-lg">
          {/* Display user details */}
          <p>{profile.firstName} {profile.lastName}</p>
          {/* Add more user details here */}
          {/* Render the logout button */}
          <button className="bg-[#61d7a2] px-4 py-2 rounded-lg" onClick={logOut}>
            Logout
          </button>
          {/* Close the modal when clicking outside the content */}
          <div className="absolute top-0 left-0 w-full h-full" onClick={toggleModal} />
        </div>
      </div>
    );
  };
  
  export default UserProfileModal;
  