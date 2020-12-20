import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'
function Skills() {
    let skillsVariantsLeft = {
        hidden: {
            opacity: 0,
            x: -100
        },
        visible: {
            opacity: 1,
            x: 0,
        }
    }
    let skillsVariantsItem = {
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
        <div className="skillsWrapper">
            <AnimatePresence>
                <div className="skillsContent">
                    <div className="skillsInformation">
                        < motion.img
                            variants={skillsVariantsLeft}
                            initial='hidden'
                            animate='visible'
                            transition={{ delay: 0.3, }} className="skillsBGImage" src="images/skillsFolder.png" alt="folderBG" />
                        <div className='skillsText'>
                            <motion.h3
                                variants={skillsVariantsItem}
                                initial='hidden'
                                animate='visible'
                                transition={{ delay: 0.2, }}
                            >Favorite Stack</motion.h3>
                            <motion.div
                                variants={skillsVariantsItem}
                                initial='hidden'
                                animate='visible'
                                transition={{ delay: 0.7, }}
                                className='skillsItem'>
                                <img className='skillsLogo' src="/images/html.png" alt="javascript" />
                                <p>HTML</p>
                                <img className='skillsLogoAdditional' src="/images/css.png" alt="javascript" />
                                <p>CSS</p>
                                <img className='skillsLogoAdditional' src="/images/js.png" alt="javascript" />
                                <p>JavaScript</p>
                            </motion.div>
                            <motion.div
                                variants={skillsVariantsItem}
                                initial='hidden'
                                animate='visible'
                                transition={{ delay: 0.9, }}
                                className='skillsItem'>
                                <img className='skillsLogo' src="/images/react.png" alt="react" />
                                <p>React</p>
                                <img className='skillsLogoAdditional' src="/images/redux.png" alt="redux" />
                                <p>Redux</p>
                            </motion.div>
                            <motion.div
                                variants={skillsVariantsItem}
                                initial='hidden'
                                animate='visible'
                                transition={{ delay: 1.2, }}
                                className='skillsItem'>
                                <img className='skillsLogo' src="/images/nodejs.png" alt="react" />
                                <p>Node JS</p>
                                <img className='skillsLogoAdditional' src="/images/express.png" alt="react" />
                                <p>Express</p>
                            </motion.div>
                            <motion.div
                                variants={skillsVariantsItem}
                                initial='hidden'
                                animate='visible'
                                transition={{ delay: 1.5, }}
                                className='skillsItem'>
                                <img className='skillsLogo' src="/images/mySql.png" alt="react" />
                                <p>MySQL</p>
                                <img className='skillsLogoAdditional' src="/images/mongoDB.png" alt="react" />
                                <p>MongoDB</p>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </AnimatePresence>
        </div>
    );
}

export default Skills;
