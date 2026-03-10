import { useAuth } from "../../context/authContext";
import { useNotesContext } from "../../context/notesContext";
import NotesCard from "../../components/Notes/NoteCard";

export default function Profile() {
  const { user } = useAuth();
  const { notes } = useNotesContext();

  const recentNotes = [...notes]
    .sort((a, b) => new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt))
    .slice(0, 4);

  return (
    <div className="min-h-[85vh] text-white px-6 py-10">
      <div className="max-w-205 mx-auto">

        {/* Profile Header */}
        <div className="flex items-center gap-6 mb-10">
          {/* Avatar */}
          <div className={`w-20 h-20 rounded-full ${user.color? `bg-${user.color}-700`:"bg-blue-700"} flex items-center justify-center text-3xl font-bold`}>
            {user?.fullname?.[0]?.toUpperCase() || "U"}
          </div>

          {/* User Info */}
          <div>
            <h1 className="text-2xl font-bold">
              {user?.fullname || "Unnamed User"}
            </h1>
            <p className="text-white/70">@{user?.username}</p>
            <p className="text-white/50 text-sm">{user?.email}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Recent Notes */}
        <h2 className="text-xl font-semibold mb-4">Recent Notes</h2>

        {recentNotes.length === 0 ? (
          <p className="text-white/50">No notes yet.</p>
        ) : (
          <div className="flex gap-5 flex-wrap">
            {recentNotes.map((note) => (
              <NotesCard
                key={note._id}
                _id={note._id}
                title={note.title}
                content={note.info}
                createdAt={note.createdAt}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
