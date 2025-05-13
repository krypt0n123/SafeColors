export default function About() {
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <h1 className="text-7xl font-bold mb-12 text-left">About</h1>
      <div className="max-w-[1800px] p-12 flex flex-col rounded-3xl bg-gray-900/80 backdrop-blur-lg">
        <div className="flex flex-row items-start justify-between gap-8">
          {/* How */}
          <div className="flex-1 min-w-[300px] max-w-sm flex flex-col items-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md p-6">
            <div className="text-4xl font-bold mb-6 w-full text-left">How</div>
            <div className="text-2xl flex flex-col gap-6 w-full">
              <p>
                Coloring addresses with hash values can significantly improve the distinguishability of addresses. 
                Even if only one error occurs at the address, 
                the color change calculated by the hash value will be significantly different.
              </p>
            </div>
          </div>
          {/* What */}
          <div className="flex-1 min-w-[300px] max-w-sm flex flex-col items-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md p-6">
            <div className="text-4xl font-bold mb-6 w-full text-left">What</div>
            <div className="text-2xl flex flex-col gap-6 w-full">
              <p>
              This dyeing scheme is compatible with the existing address display schemes and does not require complex modifications. 
              It can be directly implemented on the existing system, 
              and users do not need to adapt to the new interface.
              </p>
            </div>
          </div>
          {/* Why */}
          <div className="flex-1 min-w-[300px] max-w-sm flex flex-col items-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md p-6">
            <div className="text-4xl font-bold mb- w-full text-left">Why</div>
            <div className="text-2xl flex flex-col gap-6 w-full">
              <p>
              Hackers can generate fake addresses with similar beginning and end by force. 
              Due to the difficulty in verifying complex characters, 
              users may easily overlook the tampering in the middle by only verifying the characters before and after, 
              which may lead to financial risks.
              </p>
            </div>
          </div>
          {/* Who */}
          <div className="flex-1 min-w-[300px] max-w-sm flex flex-col items-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md p-6">
            <div className="text-4xl font-bold mb-6 w-full text-left">Who</div>
            <div className="text-2xl flex flex-col gap-6 w-full">
              <p>
              This tool is suitable for cryptocurrency users (especially those who frequently transfer money),
              exchanges and wallet developers in scenarios where address security needs to be quickly confirmed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
