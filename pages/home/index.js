import React, { useEffect, useState } from 'react';
import { Tweet } from '../../components/Tweet';
import useUser from '../../hooks/useUser';
import { fetchLatestTweets } from '../../firebase/client';

export default function HomePage() {
  const [timeLine, setTimeLine] = useState([]);

  const user = useUser();

  useEffect(() => {
    user && fetchLatestTweets().then(setTimeLine);
  }, [user]);

  return (
    <>
      <div className="Container">
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeLine.map(({ id, username, avatar, content }) => {
            return (
              <Tweet
                avatar={avatar}
                id={id}
                key={id}
                message={content}
                username={username}
              />
            );
          })}
        </section>
        <nav></nav>
      </div>
      <style jsx>{`
        section {
          padding-top: 49px;
        }

        .Container {
          background: #fff;
          height: 100vh;
        }

        h2 {
          font-size: 21px;
          font-weight: 700;
        }

        header {
          align-items: center;
          border-bottom: solid 1px #ccc;
          height: 49px;
          display: flex;
          position: fixed;
          top: 0;
          width: 100%;
          background: #ffffff;
        }

        nav {
          bottom: 0;
          position: fixed;
          border-top: solid 1px #ccc;
          height: 49px;
          width: 100%;
          background: #fff;
        }
      `}</style>
    </>
  );
}
