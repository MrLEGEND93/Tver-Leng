import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {useSnapshot} from 'valtio'

import state from '../store'
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'
import { CustomButton } from '../components';
 
const Home = () => {
  const snap = useSnapshot(state)

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img src='./threejs.png' alt='tverleng' className='w-8 h-8 object-contain' />
          </motion.header>

          <motion.div className='home-content' {...headContainerAnimation}>
            
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className='xl:block hidden'/> DO IT.
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation}>
              <p>
                Create your unique and exclusive 3D shirt with your own brand-new 3D customization tools. <strong> Unleash your imagination</strong>{" "} and define your own style.
              </p>
              <br />
              <CustomButton
                type = 'filled'
                title = 'Customize Now'
                handleClick = {() => state.intro = false}
                customStyles = 'w-fit px-4 py-2.5 font-bold text-sm'
              />
            </motion.div>

          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}
export default Home