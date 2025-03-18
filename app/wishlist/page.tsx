'use client'

import {useCallback} from "react";

export default function Wishlist() {

  const ll = useCallback(async () => {

  }, []);


  return (
    <div>

      <div>
        <ul>
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ul>
      </div>

      <div onClick={ll}>Add New Wish</div>

    </div>
  );
}
