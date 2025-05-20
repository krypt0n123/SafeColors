import { aboutSections } from '../data/aboutContent'; // 导入文本数据

export default function About() {
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <h1 className="text-7xl font-bold mb-12 text-left">About</h1>
      <div className="max-w-[1800px] p-12 flex flex-col rounded-3xl bg-gray-900/80 backdrop-blur-lg">
        <div className="flex flex-row items-start justify-between gap-8">
          {aboutSections.map((section, index) => (
            <div
              key={index}
              className="flex-1 min-w-[300px] max-w-sm flex flex-col items-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md p-6"
            >
              <div className="text-4xl font-bold mb-6 w-full text-left">{section.title}</div> {/* 使用mb-6确保一致性*/}
              <div className="text-2xl flex flex-col gap-6 w-full">
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}