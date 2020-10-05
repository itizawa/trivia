import React from 'react';
import Link from 'next/link';

import Swal from 'sweetalert2';

import { useSession, signout } from 'next-auth/client';

function PersonalDropdown() {
  const [session] = useSession();
  const { user } = session;

  const signOutHandler = () => {
    Swal.fire({
      title: 'ログアウトしますか?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'ログアウトする !',
      preConfirm: async() => {
        try {
          signout();
        }
        catch (err) {
          Swal.showValidationMessage(
            `ログアウト中にエラーが発生しました。<br>${err.message}`,
          );
        }
      },
    });
  };

  return (
    <div className="btn-group">
      <button className="btn btn-sm dropdown-toggle border-0" type="button" data-toggle="dropdown" aria-expanded="false">
        <img height="24px" className="rounded-circle bg-white mr-2" src={user.image} />
      </button>
      <ul className="dropdown-menu dropdown-menu-right">
        <li>
          <Link href="/term">
            <a className="dropdown-item">利用規約</a>
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <button className="dropdown-item" type="button" onClick={signOutHandler}>Logout</button>
        </li>
      </ul>
    </div>
  );
}

export default PersonalDropdown;
