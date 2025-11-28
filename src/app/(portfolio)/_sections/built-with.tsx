export default function BuiltWithSection() {
  return (
    <section id="built-with" className="py-20 space-y-4">
      <div className="space-y-4 text-center md:text-left p-4 rounded-md">
        <h2 className="text-4xl font-bold">🛠️ Site Info</h2>
        <p className="font-light">
          This site was built a modern, cost-effective architecture designed to
          scale seamlessly without increasing overhead. By combining
          Cloudflare's global edge network, Workers, R2, and D1 with a headless
          Payload CMS backend, the platform delivers fast performance while
          keeping infrastructure expenses extremely low. OpenNext enables
          efficient deployment of my Next.js app directly onto Cloudflare's
          edge, removing the need for traditional servers and reducing
          operational complexity. Together, this stack creates a highly
          optimized, globally distributed system that remains affordable whether
          serving a handful of pages or handling large-scale traffic
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 border-2 border-dashed divide-x divide-y divide-dashed">
        <div className="flex flex-col items-center justify-center p-4">
          <p>Next.js / React</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <p>Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <p>Payload</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <p>Cloudflare R2</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <p>Cloudflare D1</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <p>Cloudflare Workers</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <p>Cloudflare Images</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <p>OpenNext</p>
        </div>
      </div>
    </section>
  );
}
