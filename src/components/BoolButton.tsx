// src/components/BoolButton.tsx
interface BoolButtonProps {
    label: string;
    value: boolean;
    onClick: () => void;
  }
  
  export function BoolButton({ label, value, onClick }: BoolButtonProps) {
    return (
      <button
        onClick={onClick}
        className={`flex items-center justify-between px-6 py-2 rounded-xl border-2 border-black text-2xl text-black font-bold shadow transition-all duration-200 bg-white`}
        style={{ fontFamily: 'Indie Flower, cursive' }} 
      >
        <span>{label}</span>
        <span className="ml-3 w-6 h-6 rounded-md border-2 border-black flex items-center justify-center bg-white">
          {value ? <span className="text-2xl leading-none">✔</span> : null}
        </span>
      </button>
    );
  } 