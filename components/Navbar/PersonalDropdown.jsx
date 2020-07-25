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
      <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
        <li><a className="dropdown-item" onClick={() => { signout() }}>Logout</a></li>
      </ul>
    </div>
  );
}

export default PersonalDropdown;
