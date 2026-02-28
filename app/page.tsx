import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <div className="flex flex-col items-center mb-8">
        <Image
          src="/profile.jpg"
          alt="Donnie Newell"
          width={150}
          height={150}
          className="rounded-full mb-4"
          priority
        />
        <h1 className="text-2xl font-semibold tracking-tighter">
          Donnie Newell
        </h1>
      </div>
      <p className="mb-4">
        Staff Android Engineer. Nearly 7 years at Square, where I built the
        tax engine that applies taxes to every transaction. Now building
        independently and looking for what's next.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
