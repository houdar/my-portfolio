import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

const RelatedProject = {
	title: 'Related Projects',
	Projects: [
		{
			id: uuidv4(),
			title: 'web application',
			img: '/images/ui-project-2.jpg',
		},
		{
			id: uuidv4(),
			title: 'Web Application',
			img: '/images/mobile-project-1.jpg',
		},
		{
			id: uuidv4(),
			title: 'UI Design',
			img: '/images/web-project-1.jpg',
		},
		{
			id: uuidv4(),
			title: 'Kabul Mobile App UI',
			img: '/images/mobile-project-2.jpg',
		},
	],
};

function RelatedProjects() {
	return (
		<div className="pt-10 mt-10 border-t-2 sm:pt-14 sm:mt-20 border-primary-light dark:border-secondary-dark">
			<p className="mb-10 text-3xl font-bold text-left font-general-regular text-primary-dark dark:text-primary-light sm:mb-14">
				{RelatedProject.title}
			</p>

			<div className="grid grid-cols-1 gap-10 sm:grid-cols-4">
				{RelatedProject.Projects.map((project) => {
					return (
						<Image
							src={project.img}
							className="cursor-pointer rounded-xl"
							width="400"
							height="400"
							alt={project.title}
							key={project.id}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default RelatedProjects;
