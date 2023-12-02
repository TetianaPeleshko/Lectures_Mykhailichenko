import React, { useState, useCallback } from 'react';

const LoginHeader = React.memo(({ openLoginModal }) => {
  return (
    <div
      style={{
        borderBottom: '1px solid black',
        width: 150,
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 40,
        fontSize: 18,
      }}
    >
      <div>Header</div>
      <button onClick={openLoginModal}>Login</button>
    </div>
  );
});

const UserCard = ({ likeCounter, setLikeCounter }) => {
  return (
    <button
      style={{ fontSize: 18 }}
      onClick={() => setLikeCounter(likeCounter + 1)}
    >
      Like post
    </button>
  );
};

export default function CallbackExampale() {
  const [likeCounter, setLikeCounter] = useState(0);

  const openLoginModal = useCallback(() => {
    console.log('Open Login Modal');
  }, []);

  return (
    <div
      style={{
        margin: 50,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontSize: 18,
        border: '1px solid black',
        paddingLeft: 5,
      }}
    >
      <LoginHeader openLoginModal={openLoginModal} />

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {likeCounter}

        <UserCard likeCounter={likeCounter} setLikeCounter={setLikeCounter} />
      </div>
    </div>
  );
}
