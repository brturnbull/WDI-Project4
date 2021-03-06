import React from 'react';

const MessageSelection = ({ currentUser, handleSelection }) => {

  return (
    <div>
      {currentUser.acceptedMatchRequests.map(user =>
        <div key={user._id}>
          <div className="columns profileFrame profileframemessages"
            onClick={handleSelection}
            id={user._id}
          >
            <div className="column is-one-quarter" id={user._id}>
              <img id={user._id} src={user.image} />
            </div>
            <div className="column is-one-half" id={user._id}>
              <p id={user._id} className="is-size-2 darktext featuretext">{user.name}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageSelection;
