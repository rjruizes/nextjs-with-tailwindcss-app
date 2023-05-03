
export async function generateStaticParams({
  params: { org, dept },
}: {
  params: { org: string, dept: string };
}) {
  const orgDeptUnitDict: Record<string, Record<string, string[]>> = {
    org1: {
      dept1: ["unit1", "unit2"],
      dept2: ["unit3", "unit4"],
    },
    org2: {
      dept1: ["unit5", "unit6"],
      dept2: ["unit7", "unit8"],
    },
  }
  const units = orgDeptUnitDict[org][dept]
  console.log(`unit for ${org}, ${dept}:`, units)
  return units.map((unit) => ({ unit }));
}

export default async function UnitPage({ params }: { params: { org: string, dept: string, unit: string } }) {
  return <div>{JSON.stringify(params)}</div>
}