import Image from 'next/image'

import avatarImg from '@/images/avatar.png'

import { Block } from '@/components/blocks/block'
import { Wave } from '@/components/wave'

export const Avatar = () => {
  return (
    <Block
      data-type='about'
      className='bg-gradient-to-b from-blue-300 to-blue-50 p-0'
    >
      <Wave />
      <Image
        className='absolute inset-x-0 bottom-0 z-10 origin-bottom scale-110'
        src={avatarImg}
        alt='avatar'
        placeholder='blur'
        width={280}
        height={280}
      />
    </Block>
  )
}
