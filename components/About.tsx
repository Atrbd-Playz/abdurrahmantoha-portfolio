'use client'


import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
    return (
        <section className='relative py-24 overflow-hidden'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h1 className='flex items-center justify-center gap-1 m-2'>About <span className='text-emerald-500/70'>Me</span></h1>
                <motion.div
                    className="h-1 w-20 mx-auto rounded-full"
                    style={{
                        background: `linear-gradient(to right, var(--accent-primary), var(--accent-primary-dark))`,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                />
            </motion.div>

            <div className='mx-3 flex gap-8 flex-col lg:flex-row items-center lg:items-start lg:justify-start justify-center'>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.8, }}
                    className='rounded-lg overflow-hidden shrink-0 '>
                    <Image
                        src="/About.jpg"
                        alt="About image"
                        width={600}
                        height={700}
                        className='object-cover w-[600px] h-80'
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{amount: 0.3 }}
                    transition={{ duration: 0.8, }} 
                className=' flex justify-center flex-col px-5'>
                    <h2 className='text-white'>Passionate Fullstack Developer</h2>
                    <p className='mt-4 max-w-3xl leading-relaxed tracking-tighter text-white/60'>
                        With over 3 years of experience in web development, I specialize in building modern, scalable applications using the MERN stack. My passion lies in creating seamless user experiences backed by robust server architectures.
                    </p>
                    <p className='mt-4 max-w-3xl leading-relaxed tracking-tighter text-white/60'>
                    
                        I've worked on various projects from startup MVPs to enterprise applications, always striving to deliver clean code, optimal performance, and exceptional user experiences.</p>
                </motion.div>
            </div>

        </section>
    )
}

export default About