import React from 'react'
import alex from '../assets/images/alex.jpg'

const enver = alex
const vans = alex

const members = [
  {
    name: 'Alex Dovzhanyn',
    title: 'Technical Co-Founder',
    image: alex,
    description: 'Lorem ipsum dolor set amet words words words'
  },
  {
    name: 'Enver Peck',
    title: 'Co-Founder',
    image: enver,
    description: ''
  },
  {
    name: 'Vans Design',
    title: 'Designer',
    image: vans,
    description: ''
  }
]

export default props => (
  <div className="Team">
    { members.map(member => (
      <div className="member">
        <img src={ member.image } alt={ member.name } />
        <h3>{ member.name }</h3>
        <h4>{ member.title }</h4>
        <p>{ member.description }</p>
      </div>
    ))}
  </div>
)
