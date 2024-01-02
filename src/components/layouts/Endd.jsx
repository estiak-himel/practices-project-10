import React from 'react'
import Container from './../Container';
import Flex from './../Flex';
import Heading from './../Heading';
import Paragraph from './../Paragraph';
import Button from './../Button';
import Image from './../Image';
import end1 from '../../assets/end1.png';
import end2 from '../../assets/end2.png';

const Endd = () => {
  return (
    <nav className='bg-enddColor py-24'>
        <Container>
           <Flex>

            <div className='w-[40%]'>
                <Heading className='text-[64px] font-bold font-frank text-white'  text='Best Seller Product' />
                <Paragraph className='font-frank mt-7 font-bold text-white pr-[100px]' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus.' />

                <Button className='bg-black text-white mt-[40px] ' textbtn='Learn MORE' />
            </div>
            <div className='w-[60%] '>
                   <Flex className='justify-between'>
                <div>
                    <Image src={end1} />
                </div>
                <div>
                <Image src={end2} /> 
                </div>
                   </Flex>
                    
            </div>
           </Flex>

        </Container>
    </nav>
  )
}

export default Endd