type Props = {
  tableData: {
    organization: string;
    role: string;
    period: string;
  }[];
  subject: string;
};

export default function AboutTable({ tableData, subject }: Props) {
  return (
    <article className="mt-8">
      <h2 className="text-center lg:text-left text-3xl font-semibold text-slate-500 py-8 lg:py-4">
        {subject}
      </h2>
      <ul>
        {tableData.map(({ organization, role, period }) => (
          <li
            key={organization}
            className="flex flex-col justify-center lg:justify-start lg:flex-row items-center h-28 lg:h-16 border-t gap-0 lg:gap-4 px-8"
          >
            <h3 className="font-bold text-xl text-black/70">{organization}</h3>
            <div className="text-black/60 text-center lg:text-left">
              <span>{role}</span>
              <span className="border-l text-sm mx-2 border-slate-400" />
              <span>{period}</span>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}
