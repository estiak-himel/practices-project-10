import React from 'react'
import Container from './../Container';
import Image from './../Image';
import fasion from '../../assets/fasion.png';
import Heading from './../Heading';
import Flex from './../Flex';
import Paragraph from './../Paragraph';

const Fashion = () => {
  return (
    <nav className='py-32'>
        <Container>
            <Flex>

            <div className='w-[50%]'>
                <Image src={fasion} />
            </div>
            <div className='w-[50%] ml-[120px] mt-[70px]'>
                <Heading className='text-[64px] font-frank pr-16 font-bold' text='Best Fashion
                  Since 2010' />

                <Paragraph className='text-[24px] font-pop font-semibold mt-9 pr-40' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. '/>
            </div>
          </Flex>
       
        </Container>
    </nav>
  )
}

export default Fashion