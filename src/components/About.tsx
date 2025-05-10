

export default function About() {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ fontFamily: 'Indie Flower, cursive' }}>
      <div className="w-[95vw] max-w-7xl min-h-[60vh] p-12 flex flex-col">
        <h1 className="text-5xl font-bold mb-12 text-left">About</h1>
        <div className="flex-1 flex flex-row items-start justify-between gap-8">
          {/* What */}
          <div className="flex-1 flex flex-col items-center">
            <div className="text-3xl font-bold mb-6 w-full text-left">What</div>
            <div className="text-2xl flex flex-col gap-6 w-full">
              <p>
                TextTextTextTextTextTextText
                TextTextTextTextTextTextText
                TextTextTextTextTextTextText
                TextTextTextTextTextTextText
                TextTextTextTextTextTextText
                TextTextTextTextTextTextText
              </p>
            </div>
          </div>
          {/* Why */}
          <div className="flex-1 flex flex-col items-center">
            <div className="text-3xl font-bold mb-6 w-full text-left">Why</div>
            <div className="text-2xl flex flex-col gap-6 w-full">
              <p>
                TextTextTextTextTextTextText
                TextTextTextTextTextTextText
                TextTextTextTextTextTextText
                TextTextTextTextTextTextText
                TextTextTextTextTextTextText
                TextTextTextTextTextTextText
              </p>
            </div>
          </div>
          {/* Who */}
          <div className="flex-1 flex flex-col items-center">
            <div className="text-3xl font-bold mb-6 w-full text-left">Who</div>
            <div className="text-2xl flex flex-col gap-6 w-full">
              <p>
                TextTextTextTextTextTextText
                TextTextTextTextTextTextText
                TextTextTextTextTextTextText
                TextTextTextTextTextTextText
                TextTextTextTextTextTextText
                TextTextTextTextTextTextText
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
