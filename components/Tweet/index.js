import React from 'react';
import { Avatar } from '../Avatar';

export const Tweet = ({ avatar, username, message, id }) => {
  return (
    <>
      <article>
        <div>
          <Avatar alt={avatar} src={avatar} />
        </div>
        <section>
          <strong>{username}</strong>
          <p>{message}</p>
        </section>
      </article>
      <style jsx>{`
        article {
          border-bottom: 2px solid #ccc;
          display: flex;
          padding: 10px 15px;
        }

        div {
          margin-right: 10px;
        }

        p {
          line-height: 1.31;
          margin: 0;
        }
      `}</style>
    </>
  );
};
