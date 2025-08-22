'use client'
import Image from 'next/image';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faChevronUp,
    faChevronDown
} from '@fortawesome/free-solid-svg-icons';


interface CollapsibleProp {
    open?: boolean;
    description: Array<string>;
    tldrs: Array<string>;
}

const experience_json = {
    experience: [
        {
            title: 'Software Engineering Intern',
            company: 'Center for Computation and Visualization',
            location: 'Providence, RI',
            date_start: 'September 2023',
            date_end: 'Present',
            about: "  \
                    ",
            description: [
                "Built and deployed a full-stack dashboard using React, Node.js, FastAPI, and MongoDB to streamline the management of bioinformatics \
                    data pipelines.",
                "Designed and implemented a CI/CD pipeline with Docker and GitHub Actions for faster and more reliable deployments.", 
                "Integrated a large language model to automate schema generation and improved developer experience with standardized environments and automated testing." 
            ],
            tldr: ["Full-stack", "DevOps", "LLM-ops", "Observability"],
            skills: [
                "React", "Node.js", "FastAPI", "MongoDB",
                "Docker", "CI/CD",
                "LLM Integration", "HTML/CSS",
            ]

        },
        {
            title: 'Machine Learning Undegraduate Researcher',
            company: 'Balestriero Lab, Brown University',
            location: 'Providence, RI',
            date_start: 'September 2024',
            date_end: 'Present',
            about: ' \
                    ',
            description: [
                "Designed machine learning experiments to study how data augmentations influence model bias in self-supervised vision models.",
                "Developed training infrastructure and contributed to open-source libraries using PyTorch.", 
                "Engineered distributed training scripts for large-scale experiments on HPC clusters, streamlining setup and job scheduling with Slurm."
            ],
            tldr: ["Self-Supervised Learning", "Computer Vision", "ML Infrastructure", "HPC / Slurm"],
            skills: ['Python', 'PyTorch', 'Matplotlib']
        },
        {
            title: 'Undergraduate Teaching Assistant',
            company: 'Department of Computer Science, Brown University',
            location: 'Providence, RI',
            date_start: 'January 2024',
            date_end: 'May 2025',
            about: '  ',
            description: [
                "Led course development, project design, and student support for both a small seminar on AI & Security and a large lecture course on Deep Learning.",
                "Collaborated with faculty to develop assignments on cryptography, AI safety, and neural networks.",
                "Provided mentorship to student teams applying deep learning in domains like music, genomics, and art."
            ],
            tldr: ["Course Development", "AI Safety", "Deep Learning", "Project Mentorship"],
            skills: ["Python", "PyTorch", "Jupyter", 'NumPy', 'Pandas']
        },
        {
            title: 'Computational Physics Undergraduate Researcher',
            company: 'Martiniani Lab, NYU',
            location: 'New York City, NY',
            date_start: 'June 2024',
            date_end: 'August 2024',
            about: ' \
                    ',
            description: [
                "Implemented and optimized Monte Carlo simulation algorithms in Python and C++ to study complex particle systems.",
                "Worked closely with postdocs and faculty on algorithm design, performance tuning, and real-time data visualization.",
                "Presented research and software at the NYU Summer Research Symposium under the NYU Computational Physical Chemistry SURP."
            ],
            tldr: ["Monte Carlo Simulation", "Computational Physics", "Monte Carlo Algorithms", "Scientific Visualization"],
            skills: ['C++', 'Python', 'CMake', 'Matplotlib']
        },
        {
            title: "Computational Biophysics Undergraduate Researcher",
            company: "Rubenstein Group, Brown University",
            location: 'Providence, RI',
            date_start: 'October 2022',
            data_end: 'May 2025',
            about: '  ',
            description: [
                'Built modular bioinformatics pipelines in Python to analyze protein sequence and structural data, with significant performance improvements over existing tools.',
                'Automated molecular dynamics simulations using GROMACS and WESTPA on HPC clusters to study conformational dynamics in Abl1 kinase mutants.',
                'Co-authored a peer-reviewed preprint in eLife uncovering novel mechanistic insights into rare kinase states.'
            ],
            tldr: ['Bioinformatics', 'Molecular Dynamics', 'HPC / GROMACS / WESTPA'],
            skills: ["Python", "MDAnalysis", "NumPy", "GROMACS"]
        }
    ]
}

// {
//             title: '',
//             company: '',
//             location: '',
//             date_start: '',
//             date_end: '',
//             description: [
                
//             ]
//         }

function CollapsibleDescription({open, description, tldrs}: CollapsibleProp) {
    const [isOpen, setIsOpen] = useState(open);

    const handleCollapse = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className='mt-3'>
                <div className='flex justify-between'>
                    TLDRs:
                    <div>
                        {tldrs.map((tag, index) => (
                            <span key={index} className='px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium'>
                                {tag}
                            </span>
                        ))}
                    </div>
                    <button type='button' onClick={handleCollapse} className='flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium'>
                        {isOpen ? 'Less' : 'More'}
                        {!isOpen ? <FontAwesomeIcon icon={faChevronDown} />: <FontAwesomeIcon icon={faChevronUp}/>}
                    </button>
                </div>
                
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    {isOpen && 
                        <ul className="mb-4 [&>*]:mx-4 space-y-2 text-gray-700 text-sm leading-relaxed">
                                {description.map((item, subIndex) => {
                                    return (
                                        <li id='experience-list-item' key={subIndex} className='className="flex items-start gap-2"'>{item}</li>
                                    )
                                })}
                            </ul>
                        }
                </div>
            </div>
        </>
    )
}

function Intro() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 id='about' className='inter-font text-2xl mb-3 text-left'>About Me</h1>
            <div className='flex flex-col md:flex-row justify-center items-center w-full mb-10 min-h-[65vh]'>
                <div className='w-full md:w-[60rem] max-w-5xl'>
                    
                    <div className='text-left mb-10 mt-10 mr-15 md:mr-50 inter-font'>
                        <h2 className='text-2xl font-semibold mb-5'>I'm Kyle Lam — I build systems that make data-driven research faster, smarter, and more scalable.</h2>
                        <p className='text-lg '>
                            Originally from Southern California, I recently graduated from Brown University having studied my "ABCs":
                            Applied Math, Biochemistry, and Computer Science.
                        </p>
                        <p className='mt-5 text-lg'>
                            I’m especially interested in the spaces where research meets real-world engineering — whether that’s training large-scale ML models, 
                            designing scientific software, or building infrastructure for high-throughput bioinformatics data workflows.
                        </p>

                        <p className='mt-5 text-lg'>Outside of work, I practice Taekwondo, take interesting pictures, and love to test new recipes and food. If you have any, send them my way!</p>

                        {/* <p className='px-4 py-2 p mt-5 border-2 rounded-xl'>
                            Currently software engineering intern for Brown University's Center for Computation and Visualization, a department
                            that manages high-performance computing resources and support for computational research @ Brown.
                        </p> */}
                        {/* <div className="bg-white border-2 border-red-500 rounded-lg p-4 my-3 shadow-lg shadow-red-500/10 inter-font">
                            <div className="flex items-center text-red-500 font-semibold text-sm uppercase mb-2 pulse-bullet">
                                Now
                            </div>
                            <p className="font-semibold">Software Engineering Intern</p>
                            <p className="text-gray-600 text-sm">Brown University's Center for Computation and Visualization</p>
                            <p className='text-sm'>Managing high-performance computing resources and support for computational research @ Brown</p>
                        </div> */}
                        <div className="border-2 border-emerald-200 rounded-lg p-4 my-3 hover:border-emerald-300 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-2">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                    </span>
                                    <span className="text-emerald-600 font-semibold text-sm">Currently Working</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div>
                                    <h3 className="font-semibold text-slate-800">Software Engineering Intern</h3>
                                    <p className="text-slate-600 text-sm">Brown University's Center for Computation and Visualization</p>
                                </div>
                                <div className="text-slate-700 text-sm leading-relaxed bg-emerald-50 p-3 rounded border-l-4 border-emerald-400">
                                    Managing high-performance computing resources and support for computational research @ Brown
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>

                {/* <div className='bg-yellow-300 h-[10rem] w-50'></div> */}
                <div className='mt-10 md:mt-0'>
                    <Image src='/pfpic.jpg' alt='profile picture' width={350} height={100} className='rounded-2xl'></Image>
                    <p className='text-center italic mt-1'>Flower picking at a tulip field in Exeter, RI!</p>
                </div>
            </div>
        </div>
    )
}
export default function Experience() {
    return (
        <div className='mx-4 md:mx-16 flex flex-col justify-center items-center'>
            <Intro/>
            <p id='experience' className='inter-font text-2xl mb-5'>Experience</p>
            <div className='flex'>
                <div id='experience-card' className="max-w-sm md:max-w-4xl mx-auto">
                    <div className='relative border-l-gray-500 border-l-2 pl-2 my-2 mx-4'>
                        <div className="space-y-4">
                            {experience_json.experience.map((entry, idx) => {
                                return (
                                    <div key={idx} className="relative md:max-w-[50rem]">
                                        
                                        <div className='absolute w-2 h-2 border-gray-500 bg-gray-500 rounded-full border left-[-12.5]'></div>
                                        <div className="ml-16 md:ml-20 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6">
                                            <div className="mb-0">
                                                <h3 className="text-base font-semibold text-gray-800 mb-1 flex items-center gap-2">{entry.title} &bull; {entry.company}</h3>
                                            
                                                <div>{entry.date_start} - {entry.date_end} | {entry.location}</div>

                                                <div className='flex gap-4 mt-1 overflow-auto'>
                                                    <p className='flex text-xs font-semibold items-center'>TL;DR:</p>
                                                    {entry.tldr.map((tag, index) => (
                                                        <span key={index} className='px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium text-center'>
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <ul className='mt-4 text-sm opacity-80 '>
                                                    {entry.description.map((point, index) => (
                                                        <li key={index} className='flex'>
                                                            <span className='mr-2'>&bull;</span>
                                                            {point}
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className='flex gap-2 mt-3 overflow-auto'>
                                                    {entry.skills.map((tag, index) => (
                                                        <span key={index} className='px-2 py-1 bg-green-200 text-gray-700 text-xs rounded-full font-medium text-center'>
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* <CollapsibleDescription description={entry.description} tldrs={entry.tldr}></CollapsibleDescription> */}
                                            
                                        </div >

                                        
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>            
        </div>
    )
}
