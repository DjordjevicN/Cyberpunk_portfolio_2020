import React from 'react';
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'


function Projects() {
    let projectsVariantsLeft = {
        hidden: {
            opacity: 0,
            x: -100
        },
        visible: {
            opacity: 1,
            x: 0,
        }
    }
    let projectsVariantsRight = {
        hidden: {
            opacity: 0,
            x: 100
        },
        visible: {
            opacity: 1,
            x: 0,
        }
    }

    // const [pageX, setPageX] = useState('')
    // const [pageY, setPageY] = useState('')

    // useEffect(() => {
    //     window.addEventListener('mousemove', (e) => {
    //         setPageX(e.pageX * -1 / 55)
    //         setPageY(e.pageY * -1 / 50)
    //     })
    //     return () => {
    //         window.removeEventListener('mousemove', () => {
    //         })
    //     };
    // }, []);
    return (
        <div className="projectsWrapper">
            <AnimatePresence>
                <div className="projectsContent">
                    <div className="projectBlock">
                        <motion.div
                            variants={projectsVariantsLeft}
                            initial='hidden'
                            animate='visible'
                            transition={{ delay: 0.3, }} className="project1">
                            <Link to={`/project?:id`}>
                                <img className="project1Image" src="/images/zanatlijePortfolio.png" alt="" />
                            </Link>
                        </motion.div>
                        <motion.div
                            variants={projectsVariantsRight}
                            initial='hidden'
                            animate='visible'
                            transition={{ delay: 0.3, }}
                            className="project2">
                            <Link to={`/project/:id`}>
                                <img className="project1Image" src="/images/izgubljeneTablice.png" alt="" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </AnimatePresence>
        </div>
    );
}

// <div className="project1" style={{ transform: `translate3d(${pageX}px, ${pageY}px,0)` }}></div>  
export default Projects;