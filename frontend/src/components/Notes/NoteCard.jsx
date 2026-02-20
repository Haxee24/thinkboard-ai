function NotesCard({ title, content, createdAt }) {
  return (
    <div className=" cursor-pointer bg-[#242425] w-100 border-t-10 text-white p-5 rounded-xl border-green-400 hover:border hover:border-t-10 hover:border-green-500 transition">
      {/* Title */}
      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>

      {/* Content preview */}
      <p className="text-white/70 text-sm line-clamp-3 mb-4">
        {content}
      </p>

      {/* Footer */}
      <div className="text-xs text-white/50">
        {createdAt}
      </div>
    </div>
  );
}

export default NotesCard;
