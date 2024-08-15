import { ExampleComponent } from "@/components/example_components";

export const metadata = {
  title: 'title',
  description: 'description'
}

export default function Home() {
  return (
    <div className="mt-[4rem]">
      <ExampleComponent />
    </div>
  )
}
