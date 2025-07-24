import Image from 'next/image'

const projects_json = {
    projects: [
        {
            title: 'Real-time ASL Classification',
            description: 'A deep learning approach to classify American Sign Language fingerspellings in real-time.',
            imageUrl: '/ASL.PNG',
            tags: ['Python', 'Tensorflow', 'OpenCV', 'Computer Vision'],
            categories: []
        },
        {
            title: 'Semantic Cube',
            description: 'A database integration enabling natural language OLAP queries using prompt caching and LLMs for \
                query parsing and documentation',
            imageUrl: '/semantic.PNG',
            tags: ['Database', 'NLP', 'LLM', 'OLAP'],
            categories: []
        },
        {
            title: 'Anomaly Detection of Falling Events',
            description: 'A comparison of XGBoost, KNN, and RandomForest classifiers for detecting anomalous fall events in elderly care homes.',
            imageUrl: '/anom.PNG',
            tags: ['Machine Learning', 'XGBoost', 'Anomaly Detection', 'EDA', 'Data Cleaning'],
            categories: []
        },
        {
            title: '3D Scene Reconstruction with Flexible Object Control',
            description: 'A modular data pipeline for SfM scene reconstruction to enable flexible object configurations',
            imageUrl: '/3drecon.PNG',
            tags: ['3D Reconstruction', 'Computer Vision', 'SfM',],
            categories: []
        },
        {
            title: 'Interpretation of Audio Diffusion Trajectories',
            description: 'Understanding and defining interpretability in diffusion model trajectories in audio generation and synthesis applications.',
            imageUrl: '/audiointer.PNG',
            tags: ['Audio Processing', 'Diffusion Models', 'PyTorch', 'Interpretability'],
            categories: []
        }
    ]
}
// {
//             title: '',
//             description: '',
//             imageUrl: '',
//             tags: [],
//             categories: []
//         }


export default function ProjectCard() {
    return (
        <div className=''>
            <p className='text-center mb-8 inter-font text-2xl'>Featured Projects</p>
            <div className="grid grid-cols-3 grid-auto-rows gap-4">
                {projects_json.projects.map((entry, idx) => {
                    return (
                        <div 
                            key={idx} 
                            className="group relative bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 overflow-hidden cursor-pointer"
                        >
                            {/* Gradient overlay that appears on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Image placeholder with gradient background */}
                            <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                                {entry.imageUrl ? 
                                    <Image 
                                        src={entry.imageUrl} 
                                        alt={entry.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    /> :
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-gray-300 group-hover:bg-blue-300 rounded-lg flex items-center justify-center transition-colors duration-300">
                                            <svg className="w-8 h-8 text-gray-500 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                        </div>
                                    </div>
                                }
                            </div>

                            {/* Card content */}
                            <div className="relative p-6 space-y-2">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900  transition-colors duration-300 line-clamp-2">
                                        {entry.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mt-2 leading-relaxed line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
                                        {entry.description || 'Project description coming soon...'}
                                    </p>
                                </div>

                                {/* Tags */}
                                {entry.tags && entry.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {entry.tags.slice(0, 4).map((tag, tagIdx) => (
                                            <span 
                                                key={tagIdx}
                                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 group-hover:bg-blue-100 group-hover:text-blue-800 transition-all duration-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {entry.tags.length > 4 && (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-all duration-300">
                                                +{entry.tags.length - 4} more
                                            </span>
                                        )}
                                    </div>
                                )}

                                {/* Hover indicator */}
                                <div className="flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <span className="text-sm font-medium">View Project</span>
                                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}


