import CollectionView from "@/features/gallery/components/CollectionView"

export default async function CollectionPage({ params }: { params: Promise<{ section: string; collection: string }> }) {
  const { section, collection } = await params

  return <CollectionView sectionId={section} collectionId={collection} />
}
