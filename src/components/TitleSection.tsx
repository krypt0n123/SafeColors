// src/components/TitleSection.tsx
interface TitleSectionProps {
    title: string;
    description: string;
  }
  
  export function TitleSection({ title, description }: TitleSectionProps) {
    return (
      <div className="ml-20 flex-1 flex flex-col items-start justify-center"> {/* Changed items-left to items-start for valid Tailwind */}
        <h1 className="font-bold text-6xl mb-8 bg-gradient-to-r from-[#4dabf7] via-[#a18cd1] to-[#fbc2eb] bg-clip-text text-transparent">
          {title}
        </h1>
        <div className="text-2xl text-left leading-relaxed whitespace-pre-line">
          {description}
        </div>
      </div>
    );
  } 