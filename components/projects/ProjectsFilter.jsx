const selectOptions = ['Web development', 'UI/UX Design'];

function ProjectsFilter({ setSelectProject }) {
  return (
    <select
      onChange={(e) => {
        setSelectProject(e.target.value);
      }}
      className="px-4 py-2 text-sm border rounded-lg sm:px-6 dark:border-secondary-dark sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
    >
      <option value="" className="text-sm sm:text-md">
        All Projects
      </option>

      {selectOptions.map((option) => (
        <option className="text-normal sm:text-md" key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default ProjectsFilter;
