"use client"

interface TagChipsProps {
  tags: string[]
  selectedTags: string[]
  onTagToggle: (tags: string[]) => void
}

export default function TagChips({ tags, selectedTags, onTagToggle }: TagChipsProps) {
  const handleToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagToggle(selectedTags.filter((t) => t !== tag))
    } else {
      onTagToggle([...selectedTags, tag])
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleToggle(tag)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            selectedTags.includes(tag)
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}
