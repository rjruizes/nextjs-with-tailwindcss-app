// Generate segments for [dept]
export async function generateStaticParams() {
  const depts = ["dept1", "dept2"]
  return depts.map(dept => ({ dept }));
}

export default function deptLayout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: {
    dept: string;
  }
}) {
  return (
    <>
      {children}
    </>
  );
}