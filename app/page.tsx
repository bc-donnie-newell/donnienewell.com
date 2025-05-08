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
        {`I love creating software that people find useful. Thank you for visiting my site! The last few years I've been solely focused on Android development, but I'm interested in all things software.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
