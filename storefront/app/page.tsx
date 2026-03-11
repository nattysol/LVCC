export default async function HomePage() {
  const backendUrl = "https://chocolate.medusajs.app" 
  
  console.log(`[DEBUG] Attempting fetch to: ${backendUrl}/store/production-batches`)

  try {
    const response = await fetch(`${backendUrl}/store/production-batches`, {
  method: "GET",
  headers: { "Content-Type": "application/json","x-publishable-api-key": "pk_2392098ce782473f7b5916a5c8d3e3bc1ba92564fcd37bcebb7a48919af952f6" },
  cache: 'no-store' 
})

    // Log the status code to your terminal
    console.log(`[DEBUG] Response Status: ${response.status} ${response.statusText}`)

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`[DEBUG] Error Body: ${errorText}`)
      throw new Error(`Server responded with ${response.status}`)
    }

    const data = await response.json()
    console.log(`[DEBUG] Data Received:`, JSON.stringify(data).substring(0, 100))

    const production_batches = data?.production_batches || []
    const activeBatch = production_batches[0] || { name: "No Active Batches", cocoa_percentage: 0 }

    return (
      <div className="space-y-12">
        <header className="border-l-2 border-white pl-6">
          <h1 className="text-4xl font-bold tracking-tighter uppercase italic">LVCC / Mission Control</h1>
          <p className="text-xs text-zinc-500 mt-2 uppercase">Signal: {production_batches.length > 0 ? "Stable" : "Empty Set"}</p>
        </header>

        <section className="max-w-md">
          <div className="border border-white/10 bg-black/40 p-8 backdrop-blur-sm">
            <p className="text-[10px] text-zinc-600 uppercase mb-1">Active Batch</p>
            <p className="text-2xl italic mb-6">{activeBatch.name}</p>
            <div className="flex justify-between items-end border-t border-white/5 pt-6">
              <span className="text-[10px] text-zinc-600 uppercase">Intensity</span>
              <span className="text-4xl font-black">{activeBatch.cocoa_percentage}.0%</span>
            </div>
          </div>
        </section>
      </div>
    )
  } catch (error: any) {
    console.error(`[DEBUG] Fetch Operation Failed: ${error.message}`)
    return (
      <div className="p-10 font-mono text-red-500">
        <p className="font-bold">CONNECTION_ERROR</p>
        <p className="text-xs text-white/50 mt-2">Check terminal for [DEBUG] logs.</p>
      </div>
    )
  }
}