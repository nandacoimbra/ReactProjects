import React from 'react'
import './Contato.css'

export default function Contato(props) {

  return (

    <div className='contact'>
      <h1>{props.name}</h1>
      <div className='flex-container'>
        <div className='text-container'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit tempora ratione vitae, aliquam rem aperiam omnis nostrum explicabo voluptate. Necessitatibus dolorum doloremque, rem commodi impedit voluptatum debitis accusamus facilis eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsam sunt ullam quis repellat. Itaque nostrum sapiente placeat nobis laudantium consequuntur soluta ratione! Quod non itaque tempora dolor, odio provident? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet qui vel reiciendis facilis est fugiat aliquid cum. Quo praesentium iure repellendus natus labore, eius facilis dolorum impedit deserunt similique animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor facere fugiat nesciunt quia obcaecati veniam iste. Omnis, quasi consectetur. Saepe quia error unde veritatis ipsa molestiae aliquam deleniti hic ut.</p>
        </div>
        <div className='icons'>
          <img src=".\src\assets\email.png" alt="" />
          <img src=".\src\assets\github.png" alt="" />
          <img src=".\src\assets\linkedin-logo.png" alt="" />
          <img src=".\src\assets\whatsapp.png" alt="" />
        

        </div>

        <div></div>
      </div>

    </div>
  )
}