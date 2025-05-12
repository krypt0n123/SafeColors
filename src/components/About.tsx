

export default function About() {
  return (
    <div className="flex flex-col items-center" style={{ fontFamily: 'Indie Flower, cursive' }}>
      <h1 className="text-7xl font-bold mb-12 text-left">About</h1>
      <div className="ml-60 mr-20 max-w-8xl p-12 flex flex-col">
        <div className="flex flex-row items-start justify-between">
          {/* What */}
          <div className="flex-1 flex flex-col items-center">
            <div className="text-5xl font-bold mb-6 w-full text-left">What</div>
            <div className="text-4xl flex flex-col gap-6 w-full">
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
            <div className="text-5xl font-bold mb-6 w-full text-left">Why</div>
            <div className="text-4xl flex flex-col gap-6 w-full">
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
            <div className="text-5xl font-bold mb-6 w-full text-left">Who</div>
            <div className="text-4xl flex flex-col gap-6 w-full">
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
