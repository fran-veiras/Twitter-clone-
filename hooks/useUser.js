import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { onAuthStateChange } from '../firebase/client';

export const USER_STATES = {
  NOT_LOGED: null,
  NOT_KNOWN: undefined,
};

export default function useUser() {
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChange((user) => setUser(user));
  }, []);

  useEffect(() => {
    user === USER_STATES.NOT_LOGED &&
      router.push('https://twitter-clone-lovat.vercel.app/');
  }, [user]);

  return user;
}
