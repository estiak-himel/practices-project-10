import React from 'react'
import Container from './../Container';
import Flex from './../Flex';
import Image from './../Image';
import Fresh from '../../assets/Fresh.png';
import List from './../List';
import Button from './../Button';

const Header = () => {
  return (
    <nav className='py-6 bg-prymariColor'>
        <Container>
          <Flex>

        <div className='w-[10%] '>
            <Image src={Fresh}  />
        </div>

        <div className='w-[60%] py-2'>
        <ul>
         <Flex className='justify-center gap-8'>
         <List menuName='Men'/>
        <List menuName='Women'/>
        <List menuName='Kids'/>
        <List menuName='Coloction'/>
        <List menuName='Trends'/>
         </Flex>
       
        </ul>
        </div>
        <div className='w-[30%]'>
         <Flex className='gap-3 justify-end'>
         <Button textbtn='Sin up' />
         <Button textbtn='Log in' />
         </Flex>
        </div>
          </Flex>
        </Container>
    </nav>
  )
}

export default Header