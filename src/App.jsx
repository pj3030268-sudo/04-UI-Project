import React from 'react'
import Section1 from './components/Section1/Section1.jsx' 


const App = () => {

    const users = [
      {
        img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        intro: '',
        color: 'orange',
        tag: 'Satisfied'
      },
      {
        img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        intro: '',
        color: 'lightseagreen',
        tag: 'Underserved'
      },
      {
        img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        intro: '',
        color: 'Royalblue',
        tag: 'Underbanked'
      },
       {
        img: 'https://images.unsplash.com/photo-1752856408620-2e6fc6ac072f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        intro: '',
        color: 'orange',
        tag: 'Underwear'
      },
      {
        img: 'https://plus.unsplash.com/premium_photo-1661777467209-d1fb895cd266?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        intro: '',
        color: 'lightseagreen',
        tag: 'Average'
      },
    ]

  return (
    <div>
      <Section1 users={users} />
     
    </div>
  )
}

export default App 



