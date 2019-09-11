import React from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'

const Users = (props) => {

  return (
    <div style={userStyle}>
      {props.isLoading ? <Spinner /> : props.users.map((user => {
        return <UserItem key={user.id} user={user} />
      }))}
    </div>
  )

}


const userStyle = {
  display: "grid",
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
}
Users.prototype = {
  users: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
}
export default Users
