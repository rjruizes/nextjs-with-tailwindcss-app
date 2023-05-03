// Generate segments for [org]
export async function generateStaticParams() {
  const orgs = ["org1", "org2"]
  return orgs.map(org => ({ org }));
}

export default function OrgLayout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: {
    org: string;
  }
}) {
  return (
    <>
      {children}
    </>
  );
}