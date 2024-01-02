import React from 'react'
import Container from './../Container';
import Heading from './../Heading';
import Image from './../Image';
import bodyy from '../../assets/bodyy.png';
import Flex from './../Flex';
import Paragraph from './../Paragraph';
import Button from './../Button';


const Body = () => {
  return (
    <nav className='pt-14 pb-20 bg-prymariColor'>
        <Container>
            <Flex className=''>

            <div className='w-[60%]'>
             <Heading className='text-[64px] font-semibold font-pop pr-[250px]' text='Find The Best Fashion Style 
             For You' /> 
             <Paragraph className='pr-56' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. ' />

             <Button className='bg-black text-white mt-7' textbtn='SHOP NOW' />
            </div>

            <div className='w-[40%]'>
                <Image src={bodyy} />
            </div>
            </Flex>
            
        </Container>
    </nav>
  )
}

export default Body