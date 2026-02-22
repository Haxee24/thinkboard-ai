export default function AiThinkingAnimation() {
  return (
    <div className="flex flex-col items-center gap-4 text-white">

      <div className="flex gap-2">
        <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce [animation-delay:-0.2s]" />
        <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce [animation-delay:-0.1s]" />
        <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce" />
      </div>

      <p className="text-sm tracking-wide text-white/80">
        Enhancing your thoughts…
      </p>
    </div>
  );
}