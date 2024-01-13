import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { projectsData } from '../../data/projectsData';
import ProjectsFilter from './ProjectsFilter';

function ProjectsGrid() {
	const [searchProject, setSearchProject] = useState();
	const [selectProject, setSelectProject] = useState();

	const selectProjectsByCategory = projectsData.filter((item) => {
		let category =
			item.category.charAt(0).toUpperCase() + item.category.slice(1);
		return category.includes(selectProject);
	});

	return (
		<section className="py-5 mt-5 sm:py-10 sm:mt-10">
			<div className="text-center">
				<p className="mb-1 text-2xl font-general-medium sm:text-4xl text-ternary-dark dark:text-ternary-light">
					Projects portfolio
				</p>
			</div>

			<div className="mt-10 sm:mt-16">
				<h3
					className="mb-3 text-center  font-general-regular text-secondary-dark dark:text-ternary-light text-md sm:text-xl"
				>
					Search projects by title or filter by category
				</h3>
				<div
					className="flex justify-between gap-3 pb-3 border-b  border-primary-light dark:border-secondary-dark"
				>
					<div className="flex justify-between gap-2">
						<span
							className="
                                hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
						>
							<FiSearch className="w-5 h-5 text-ternary-dark dark:text-ternary-light"></FiSearch>
						</span>
						<input
							onChange={(e) => {
								setSearchProject(e.target.value);
							}}
							className="py-2 pl-3 pr-1 text-sm border border-gray-200 rounded-lg  ont-general-medium sm:px-4 dark:border-secondary-dark sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
							id="name"
							name="name"
							type="search"
							required=""
							placeholder="Search Projects"
							aria-label="Name"
						/>
					</div>

					<ProjectsFilter setSelectProject={setSelectProject} />
				</div>
			</div>

			<div className="grid grid-cols-1 mt-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
				{selectProject
					? selectProjectsByCategory.map((project, index) => {
							return <ProjectSingle key={index} {...project} />;
					  })
					: projectsData.map((project, index) => (
							<ProjectSingle key={index} {...project} />
					  ))}
			</div>
		</section>
	);
}

export default ProjectsGrid;
