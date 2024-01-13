import Image from 'next/image';
import { FiClock, FiTag } from 'react-icons/fi';
import PagesMetaHead from '../../components/PagesMetaHead';
import { projectsData } from '../../data/projectsData';
/* import RelatedProjects from '../../components/projects/RelatedProjects'; */

function ProjectSingle(props) {
	return (
		<div className="container mx-auto">
			<PagesMetaHead title={props.project.title} />

		{/* header info */}
			<div>
				<p className="text-3xl font-bold text-left font-general-medium sm:text-4xl text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
					{props.project.ProjectHeader.title}
				</p>
				<div className="flex">
					<div className="flex items-center mr-10">
						<FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />
						<span className="ml-2 leading-none font-general-regular text-primary-dark dark:text-primary-light">
							{props.project.ProjectHeader.publishDate}
						</span>
					</div>
					<div className="flex items-center">
						<FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
						<span className="ml-2 leading-none font-general-regular text-primary-dark dark:text-primary-light">
							{props.project.ProjectHeader.tags}
						</span>
					</div>
				</div>
			</div>

			{/* get project images */}
			<div className="grid grid-cols-1 mt-12 sm:grid-cols-3 sm:gap-10">
				{props.project.ProjectImages.map((project) => {
					return (
						<div className="mb-10 sm:mb-0" key={project.id}>
							<Image
								src={project.img}
								className="shadow-lg cursor-pointer rounded-xl sm:shadow-none"
								alt={project.title}
								key={project.id}
								layout="responsive"
								width={100}
								height={90}
							/>
						</div>
					);
				})}
			</div>

			{/* Info */}
			<div className="block gap-0 sm:flex sm:gap-10 mt-14">
				<div className="w-full text-left sm:w-1/3">
					{/* Single project client details */}
					{/* <div className="mb-7">
						<p className="mb-2 text-2xl font-semibold font-general-regular text-secondary-dark dark:text-secondary-light">
							{props.project.ProjectInfo.ClientHeading}
						</p>
						<ul className="leading-loose">
							{props.project.ProjectInfo.CompanyInfo.map(
								(info) => {
									return (
										<li
											className="font-general-regular text-ternary-dark dark:text-ternary-light"
											key={info.id}
										>
											<span>{info.title}: </span>
											<a
												href="https://stoman.me"
												className={
													info.title === 'Website' ||
													info.title === 'Phone'
														? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
														: ''
												}
												aria-label="Project Website and Phone"
											>
												{info.details}
											</a>
										</li>
									);
								}
							)}
						</ul>
					</div> */}

					{/* Single project objectives */}
					<div className="mb-7">
						<p className="mb-2 text-2xl font-semibold font-general-regular text-ternary-dark dark:text-ternary-light">
							{props.project.ProjectInfo.ObjectivesHeading}
						</p>
						<p className="font-general-regular text-primary-dark dark:text-ternary-light">
							{props.project.ProjectInfo.ObjectivesDetails}
						</p>
					</div>

					{/* Single project technologies */}
					<div className="mb-7">
						<p className="mb-2 text-2xl font-semibold font-general-regular text-ternary-dark dark:text-ternary-light">
							{props.project.ProjectInfo.Technologies[0].title}
						</p>
						<p className="font-general-regular text-primary-dark dark:text-ternary-light">
							{props.project.ProjectInfo.Technologies[0].techs.join(
								', '
							)}
						</p>
					</div>

					{/* Single project social sharing */}
					<div>
						<p className="mb-2 text-2xl font-semibold font-general-regular text-ternary-dark dark:text-ternary-light">
							{props.project.ProjectInfo.SocialSharingHeading}
						</p>
						{/* <div className="flex items-center gap-3 mt-5">
							{props.project.ProjectInfo.SocialSharing.map(
								(social, index) => {
									<Link
										key={index}
										href={social.url}
										target="__blank"
										passHref={true}
										aria-label="Share Project"
										className="p-2 text-gray-400 duration-500 rounded-lg shadow-sm bg-ternary-light dark:bg-ternary-dark hover:text-primary-dark dark:hover:text-primary-light"
									>
										<span className="text-lg lg:text-2xl">
											{social.icon}
										</span>
									</Link>;
								}
							)}
						</div> */}
					</div>
				</div>

				{/*  Single project right section details */}
				<div className="w-full mt-10 text-left sm:w-2/3 sm:mt-0">
					<p className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-7">
						{props.project.ProjectInfo.ProjectDetailsHeading}
					</p>
					{props.project.ProjectInfo.ProjectDetails.map((details) => {
						return (
							<p
								key={details.id}
								className="mb-5 text-lg font-general-regular text-ternary-dark dark:text-ternary-light"
							>
								{details.details}
							</p>
						);
					})}
				</div>
			</div>

		{/* 	<RelatedProjects /> */}
		</div>
	);
}

export async function getServerSideProps({ query }) {
	const { id } = query;
	return {
		props: {      
			project: projectsData.filter(
				(project) => project.id === parseInt(id)
			)[0],
		},
	};
}
export default ProjectSingle;

