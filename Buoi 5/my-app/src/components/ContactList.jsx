import React from 'react'
import Card from './Card'

const ContactList = ({ contacts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {contacts.map((contact, index) => (
        <Card 
          key={index}
          name={contact.name}
          city={contact.city}
        />
      ))}
    </div>
  )
}

export default ContactList
