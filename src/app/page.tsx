import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MindfulMetrics',
  description: 'MindfulMetrics offers personalized mental health and productivity insights for remote workers, helping them stay healthy and productive while working from home.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">MindfulMetrics</h1>
      <p className="mt-4 text-lg">MindfulMetrics offers personalized mental health and productivity insights for remote workers, helping them stay healthy and productive while working from home.</p>
    </main>
  )
}
