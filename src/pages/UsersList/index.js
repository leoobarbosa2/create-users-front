import React, { Component } from 'react'
import api from '../../services/api'

import { Link } from 'react-router-dom'

import { FaUserFriends } from 'react-icons/fa'

import { MdDelete, MdEdit } from 'react-icons/md'

import { Container, List, Header, Add } from './styles'

export default class UsersList extends Component {
  state = {
    users: [],
  }

  async componentDidMount() {

    const response = await api.get('/users');

    this.setState({ users: response.data})

    console.log(response.data)

  }

  async componentDidUpdate(_, prevState){
    if(prevState.users !== this.state.users){
      prevState.users = this.state.users
    }
  }

  handleDelete = async (id) => {

    await api.delete(`/users/${id}`)

    this.setState({ users: this.state.users.filter(user => user._id !== id)})
  }
  
  render(){
    const { users } = this.state; 

    return (
      <Container>
        <Header>
          <FaUserFriends size={40}/>
          Listagem de usuários
        </Header>

        <List>
          {users.map((user, index) => {
            return (
            <li key={user._id}>
              <span>
                {user.email}
              </span>
              <div>
                <Link to={`/users/${user._id}`}>< MdEdit  size={20} color="#178"/></Link>
                <button onClick={() => this.handleDelete(user._id)}>< MdDelete  size={20} color="#f00"/></button>
              </div>
            </li>
            )
          })}
        </List>
        <Add>
          <Link to="/">Adicionar novo usuário</Link>
        </Add>
      </Container>
    )
  }
}