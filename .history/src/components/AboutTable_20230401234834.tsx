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
    <article className="my-12">
      <h2 className="text-3xl font-semibold text-slate-600 border-b py-8">
        {subject}
      </h2>
      <ul>
        {tableData.map(({ organization, role, period }) => (
          <li
            key={organization}
            className="flex items-center h-16 border-b justify-between"
          >
            <h3 className="font-bold text-xl text-black/70">{organization}</h3>
            <p className="text-black/60">
              {period}
              <span className="border-l text-sm mx-2 border-slate-400" />
              {role}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
