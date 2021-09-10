import { Button } from '../../../components/Button';
import useUser from '../../../hooks/useUser';
import { useState } from 'react';

import { AddTweet } from '../../../firebase/client';
import router from 'next/router';

const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
};

export default function ComposeTweet() {
  const user = useUser();
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    setStatus(COMPOSE_STATES.LOADING);
    e.preventDefault();

    AddTweet({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      username: user.username,
    })
      .then(() => {
        router.push('/home');
      })
      // eslint-disable-next-line node/handle-callback-err
      .catch((err) => {
        setStatus(COMPOSE_STATES.ERROR);
      });
  };

  const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Whats up?"
          onChange={handleChange}
          value={message}
        ></textarea>
        <div className="button">
          <Button disabled={isButtonDisabled}>Tweet</Button>
        </div>
      </form>
      <style jsx>{`
        .button {
          width: 100%;
          display: flex;
          justify-content: end;
          padding: 10px;
        }
        textarea {
          padding: 15px;
          min-height: 130px;
          border: 0;
          resize: none;
          font-size: 21px;
          width: 100%;
          outline: 0;
        }
      `}</style>
    </>
  );
}
