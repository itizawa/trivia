import React from 'react';
import Link from 'next/link';
import {
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import { useSession } from 'next-auth/client';

function PersonalDropdown() {
  const [session] = useSession();
  const { user } = session;

  return (
    <UncontrolledDropdown>
      <DropdownToggle caret color="info">
        <img height="24px" className="rounded-circle bg-white mr-2" src={user.image} />
        {user.name}
      </DropdownToggle>
      <DropdownMenu>
        <Link href="/me">
          <DropdownItem>
            <a className="text-dark text-decoration-none">My page</a>
          </DropdownItem>
        </Link>
        <DropdownItem divider />
        <Link href="/api/auth/signout">
          <DropdownItem>
            <a className="text-dark text-decoration-none">Sign out</a>
          </DropdownItem>
        </Link>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

export default PersonalDropdown;
