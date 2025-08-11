import LeftPanel from '../components/LeftPanel'
import MiddleColumn from '../components/MiddleColumn'
import RightPanel from '../components/RightPanel'

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-12 gap-3">
        <aside className="col-span-3">
          <LeftPanel />
        </aside>

        <section className="col-span-6">
          <MiddleColumn />
        </section>

        <aside className="col-span-3">
          <RightPanel />
        </aside>
      </div>
    </main>
  )
}
