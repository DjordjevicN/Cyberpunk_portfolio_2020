import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'

function Home() {
    let homeVariants = {
        hidden: {
            opacity: 0,
            x: 100
        },
        visible: {
            opacity: 1,
            x: 0,
        }
    }
    return (
        <div className='homeWrapper' style={{ "@fontFace": 'src: /fonts/Dirgra.ttf', fontFamily: "Dirga" }}>
            <AnimatePresence>
                <div className="homeContent">
                    <div className="myName">
                        <motion.p
                            variants={homeVariants}
                            initial='hidden'
                            animate='visible'
                            transition={{ delay: 0.3, }}
                        >NIKOLA</motion.p>
                        <motion.h6
                            variants={homeVariants}
                            initial='hidden'
                            animate='visible'
                            transition={{ delay: 0.5 }}
                        >ĐORĐEVIĆ
                    </motion.h6>
                    </div>
                </div>
            </AnimatePresence>
        </div >
    );
}

export default Home;
