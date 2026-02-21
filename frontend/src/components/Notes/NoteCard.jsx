import DeleteButton from "./DeleteButton";

function NotesCard({ title, info, createdAt, _id }) {
  
  return (
    <div className=" cursor-pointer bg-[#130d0d] w-100 border-t-5 text-white p-5 rounded-xl border-green-400 hover:border hover:border-t-5 hover:border-green-500 transition">
      {/* Title */}
      <div className="flex justify-between">
        <h3 className="text-xl font-semibold mb-2">
          {title}
        </h3>
        <DeleteButton noteId={_id} />
      </div>

      {/* Content preview */}
      <p className="text-white/70 text-sm line-clamp-3 mb-4">
        {info}
      </p>

      {/* Footer */}
      <div className="text-xs text-white/50">
        {createdAt}
      </div>
    </div>
  );
}

export default NotesCard;
