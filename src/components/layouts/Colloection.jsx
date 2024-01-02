import React from 'react'
import Container from './../Container';
import Heading from './../Heading';
import Image from './../Image';
import col1 from '../../assets/col1.png';
import col2 from '../../assets/col2.png';
import col3 from '../../assets/col3.png';
import Flex from './../Flex';
import Button from './../Button';

const Colloection = () => {
  return (
    <nav className='pt-28'>
        <Container>
            <Heading className='text-center text-[60px] font-frank font-bold' text='New Collection' />

            <div className='mt-24 mb-20'>
                <Flex className='justify-between'>
                 <div>
                  <Button className='absolute z-10 bg-white ml-[50px] mt-[300px] px-[80px]' textbtn='Sweater' />
                  
                  <Image className='relative ' src={col1} /></div>
                <div>
                <Button className='absolute z-10 bg-white ml-[50px] mt-[300px] px-[80px]' textbtn='Jeans' />
                  <Image src={col2} /></div>
                <div>
                <Button className='absolute z-10 bg-white ml-[50px] mt-[300px] px-[80px]' textbtn='Baskets' />
                  <Image src={col3} /></div>

                </Flex>
            </div>
        </Container>
    </nav>
  )
}

export default Colloection