import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center dark">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold text-foreground mb-4">Maiki UI Gallery</h1>
        <p className="text-xl text-muted-foreground mb-8">A comprehensive collection of Tailwind CSS UI components</p>
        <Link
          href="/gallery"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Browse Components
        </Link>
      </div>
    </div>
  )
}
