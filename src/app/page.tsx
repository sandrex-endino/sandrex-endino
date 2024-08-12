export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-200 text-slate-50 absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className="fixed top-0 left-0 p-4 flex items-end w-full flex-col gap-2">
        <div className="flex justify-end gap-2 flex-wrap">
          <a href="https://github.com/sandrex-endino" target="_blank">Github</a>
          <a href="https://www.linkedin.com/in/sandrex-endino/" target="_blank">Linkedin</a>
          <a href="https://www.instagram.com/sandrex_______________/" target="_blank">Instagram</a>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 p-4 flex justify-between items-end w-full">
        <h1>Sandrex Endino</h1>
        <div className="flex flex-col items-end gap-2">
          <a href="mailto:sandrex.endino.dev@gmail.com">sandrex.endino.dev@gmail.com</a>
          <div className="flex gap-2">
            <h2>50% dev</h2>
            <h2>50% IT audit</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
