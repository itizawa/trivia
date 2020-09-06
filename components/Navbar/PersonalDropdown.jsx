import React from 'react';

import { useSession, signout } from 'next-auth/client';

function PersonalDropdown() {
  const [session] = useSession();
  const { user } = session;

  return (
    <div className="dropdown">
      <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
        <img height="24px" className="rounded-circle bg-white mr-2" src={user.image} />
      </button>
      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
        <button className="dropdown-item" type="button" onClick={() => { signout() }}>Logout</button>
      </div>
    </div>
  );
}

export default PersonalDropdown;
