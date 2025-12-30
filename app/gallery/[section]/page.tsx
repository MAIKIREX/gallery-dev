import SectionView from "@/features/gallery/components/SectionView"

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params

  return <SectionView sectionId={section} />
}
